import moment from 'moment'; // Example for onSort prop
import React, { Component } from 'react'; // Import React
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import swal from 'sweetalert';
import {  Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './datatable.css';
const URL = process.env.REACT_APP_LOCAL;

 
class BrandDataTable extends Component{ 
    constructor(props){
        super(props);
        this.state = {
        brandList : [],  
        modal : false,
        brandId : '',
        brandName :'',
        }
    this.fetchBrand = this.fetchBrand.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChangeBrand = this.handleChangeBrand.bind(this);
      }


      toggle(){
        this.setState({
          modal : !this.state.modal
        })
      }

        componentWillMount(){
          this.fetchBrand();
        }

        handleChangeBrand(event){
          this.setState({
            brandName : event.target.value
          })
        }

        fetchBrand(){
            axios.post(URL+'/api/admin/fetchBrands').then((resp)=>{
              // console.log('OOOOOOOOOOOOOOOO',resp.data.doc);
              this.setState({
                brandList : resp.data.doc,
              })
            })
          }

          editBrands (e) {    
            console.log('@@@@@@@@@@@@@@@@@@@@@@@',e);
            let that = this
            axios.get(URL+'/api/admin/editBrands/'+e)
                .then(response => {
                  // console.log('???????????????/',response.data.businesscategory);
                  this.setState({ 
                    brandId : e,
                   brandName : response.data.brandName,  
                  });
                }) 
    
                that.toggle()
          }
     
          updateBrands(e,id) {
            let that = this;
            e.preventDefault();
            // console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;',this.state);
            const obj = {
              brandId: this.state.brandId,
              brandName: this.state.brandName,
              checked : this.state.checked,
            };
            // console.log(']]]]]]]]]]]]]]]]]]]]]]]]]',obj);
            axios.post(URL+'/api/admin/updateBrands/'+this.state.brandId,obj)
            .then(function(response){
                // console.log('response',response);
                if(response.data.status === true){
                    alert(response.data.message);
                    window.location = '/createBrand';
                }  
                else{
                    alert(response.data.message);
                }
            });
          }

          deleteBrand(e){
            swal({
              title: "Are you sure you want to Delete?",
              // text: "Once deleted, you will not be able to recover this imaginary file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete)=>{
              if(willDelete){
                axios.post(URL+'/api/admin/deleteBrand',{
                  brandId: e,
                }).then(res=>{
                  // swal("Proof! Your imaginary data has been deleted!",{
                  //   icon:"success",
                  // });
                  return window.location = '/createBrand';
                })
                // setTimeout(function(){
                //   return window.location = '/createBrand';
                // },2000)
              }else{
               // swal("Your imaginary file is safe!");
              }
            });
           }


render(){
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',this.state.brandList);
const header = [
  { title: 'Brand', prop: 'brand', sortable: true, filterable: true },
  // { title: 'Image', prop: 'image', sortable: true, filterable: true },
  // { title: 'Status', prop: 'status', sortable: true ,filterable: true},
  { title: 'Action', prop: 'action'    ,sortable: true , filterable: true },
  ];
 
let state = this.state;
const body = [];
  state.brandList.map((e,i)=>{
  // console.log('YYYYYYYYYYYYYYYYY',e.file);
      body.push({
     'brand':e.brandName,
    //  'image' : <Link to = "#"> <i className="fa fa-eye "></i></Link>,
      'action': <div className="actiontrans" > 
       {/* <Link to = "#"> <i className="fa fa-eye "></i></Link> */}
       <Link to = "#" onClick={this.toggle} onClick={this.editBrands.bind(this,e._id)} > <i className="fa fa-edit"></i></Link>
       <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
                <div className="form-group">
                <label>Business Category  </label>
                <input type="text" className="form-control" name = "brandName" value = {this.state.brandName} onChange = {this.handleChangeBrand} />
                </div> 
                <div className="form-group">
              
              <button onClick={this.updateBrands.bind(this)}>Update</button>
                </div>
           <div style={{ marginTop: 10 }}>
         
        </div>
        </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </Modal>
       <Link to = "#"  onClick = {this.deleteBrand.bind(this,e._id)}  > <i className="fa fa-trash"></i></Link> 
       </div>  });
})
//  console.log('Hello',body);
const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, 'Do MMMM YYYY').valueOf();
  },
};
 
const customLabels = {
  first: '<<',
  last: '>>',
  prev: '<',
  next: '>',
  show: 'Display',
  entries: 'rows',
  noResults: 'There is no data to be displayed',
};
 
// In your render method
return(
  <div className="salam_datatabl">
<Datatable
  tableHeader={header}
  tableBody={body}
  keyName="userTable"
  tableClass="striped hover responsive"
  rowsPerPage={5}
  rowsPerPageOption={[5, 10, 15, 20]}
  initialSort={{prop: "username", isAscending: true}}
  onSort={onSortFunction}
  labels={customLabels}
/>
</div>
  )
 }
}



export default BrandDataTable;