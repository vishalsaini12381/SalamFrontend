import React from 'react';
import ReactDOM from 'react-dom';
import './productslider.css';

import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Productslider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      productDetail : [],
      productDetailFile:''
    }
    
    this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  componentWillMount(){
    this.fetchProductDetail();
  }

  fetchProductDetail(){

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('product');
    this.setState({
      productId : foo,
    })

    axios.post(URL+'/api/user/productDetail',{
      productId : foo,
    }).then((response)=>{
      console.log('this.12112122122122122',response.data.productData[0].product);
      this.setState({
        productDetail : response.data.productData[0].product,
        productDetailFile:response.data.productData[0].product['file1']
      })
    })
  }

  shoeImgs(e) {
    console.log(e.target.value)
    var navOpened = document.getElementById("imgsIs");
    // navOpened.setState({
    //   productDetailFile : e.target.value
    // })
    console.log(navOpened.src=e.target.src)
   //this.props.offline()    
  }
  
	render()
	{
		return(
                // <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                //   <ul className="moreview" id="moreview">
                //     <li className="moreview_thumb thumb_1"> <img className="moreview_thumb_image" src="./images/product/1.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/1.png" alt=""/>  <img  className="zoomImg" src="./images/product/1.png" alt="thumbnail"/></li>
                //     <li className="moreview_thumb thumb_2 moreview_thumb_active"> <img className="moreview_thumb_image" src="./images/product/2.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/2.png" alt=""/>  <img  className="zoomImg" src="./images/product/2.png" alt="thumbnail"/></li>
                //     <li className="moreview_thumb thumb_3"> <img className="moreview_thumb_image" src="./images/product/3.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/3.png" alt=""/>  <img  className="zoomImg" src="./images/product/3.png" alt="thumbnail"/></li>
                //     <li className="moreview_thumb thumb_4"> <img className="moreview_thumb_image" src="./images/product/4.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/4.png" alt=""/>  <img  className="zoomImg" src="./images/product/4.png" alt="thumbnail"/></li>
                //   </ul>
                //   <div className="moreview-control"> <a href="javascript:void(0)" className="moreview-prev"></a> <a href="javascript:void(0)" className="moreview-next"></a> </div>
                // </div>

               <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                 <div className="mainimage">
                   <img id='imgsIs' src={this.state.productDetailFile} alt="thumbnail"/>
                  </div>
                  <div className="moreimage">
                      <ul className="">
                        <li><img  src={this.state.productDetail['file1']} onClick={this.shoeImgs} alt="thumbnail"/></li>
                        <li><img  src={this.state.productDetail['file2']} onClick={this.shoeImgs} alt="thumbnail"/></li>
                        <li><img  src={this.state.productDetail['file3']} onClick={this.shoeImgs} alt="thumbnail"/></li>
                        <li><img  src={this.state.productDetail['file4']} onClick={this.shoeImgs} alt="thumbnail"/></li>

                      </ul>
                  </div>
                 </div>
    //               <ul className="moreview" id="moreview">
    //                 <li className="moreview_thumb thumb_1"> <img className="moreview_thumb_image" id="imgsIs" src={this.state.productDetailFile} alt="thumbnail"/> <img className="moreview_source_image" src={this.state.productDetail['file1']} alt=""/>  
    //                 </li>
    //                 {/* <li className="moreview_thumb thumb_2 moreview_thumb_active"> <img className="moreview_thumb_image" src={this.state.productDetail['file2']} alt="thumbnail"/> <img className="moreview_source_image" src={this.state.productDetail['file2']} alt=""/>  <img  className="zoomImg" src={this.state.productDetail['file2']} alt="thumbnail"/></li>
    //                 <li className="moreview_thumb thumb_3"> <img className="moreview_thumb_image" src={this.state.productDetail['file3']} alt="thumbnail"/> <img className="moreview_source_image" src={this.state.productDetail['file4']} alt=""/>  <img  className="zoomImg" src={this.state.productDetail['file3']} alt="thumbnail"/></li>
    //                 <li className="moreview_thumb thumb_4"> <img className="moreview_thumb_image" src={this.state.productDetail['file4']} alt="thumbnail"/> <img className="moreview_source_image" src={this.state.productDetail['file4']} alt=""/>  <img  className="zoomImg" src={this.state.productDetail['file4']} alt="thumbnail"/></li> */}
    //               </ul>
    //               <div className="moreview-control"> <a href="javascript:void(0)" className="moreview-prev"></a> <a href="javascript:void(0)" className="moreview-next"></a> </div>
    //               <button value={this.state.productDetail['file1']} id='offline' onClick={this.sayHello}>
    //   Click me! 
    // </button>
              
                





			)
	}

}

export default Productslider;