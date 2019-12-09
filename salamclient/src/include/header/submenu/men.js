// import React from 'react';
// import ReactDOM from 'react-dom';
// import './submenu.css';
// import axios from 'axios';
// class Men extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       categoryList : [],
//       SubcategoryList : [],
//     }
//     this.fetchCategory = this.fetchCategory.bind(this);
//     this.fetchSubCategory = this.fetchSubCategory.bind(this);
//   }

//   fetchCategory(){
//     axios.post('http://localhost:3100/api/fetchcategory').then((response)=>{
//       console.log('//////////////////',response.data.category);
//       if(response){
//         this.setState({
//           categoryList : response.data.category
//         })
//       }
//     })
//   }

//   fetchSubCategory(){
//     axios.post('http://localhost:3100/api/fetchSubCategory').then((resp)=>{
//       console.log('|||||||||||||||||',resp.data.subcategory);
//       if(resp){
//         this.setState({
//           SubcategoryList : resp.data.subcategory
//         })
//       }
//     })
//   }

//   componentWillMount(){
//     this.fetchCategory();
//     this.fetchSubCategory();
//   }

// 	render(){
//     console.log('categoryList',this.state.categoryList);
//     console.log('SubcategoryList',this.state.SubcategoryList);
// 		return(
// //             <div className="level0-wrapper dropdown-6col">
// //               <div className="level0-wrapper2">
// //                 <div className="nav-block nav-block-center">
// //                   <ul className="level0">
// //                     {
// //                       this.state.SubcategoryList.map((e,i)=>{
// //                         return(
// //                           <React.Fragment key = {i}>
// //                      <li className="level3 nav-6-1 parent item"> <a href="#"><span>{e.categoryId.category}</span></a> 
// //                       <ul className="level1">
// //                       {/* {
// //                       this.state.SubcategoryList.map((e,i)=>{
// //                         return(
// //                           <React.Fragment key = {i} > */}
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>{e.Subcategory}</span></a> </li>
// //                         {/* </React.Fragment>
// //                         )
// //                       })
// //                     } */}
// //                       </ul>
// //                     </li>
// //                     </React.Fragment>
// //                         )
// //                       })
// //                     }
// // {/* 
// //                     <li className="level3 nav-6-1 parent item"> <a href="#"><span>Second</span></a> 
// //                       <ul className="level1">
// //                       {
// //                       this.state.categoryList.map((e,i)=>{
// //                         return(
// //                           <React.Fragment key = {i} >
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>{e.Subcategory}</span></a> </li>
// //                         </React.Fragment>
// //                         )
// //                       })
// //                     }
// //                       </ul>
// //                     </li> */}
                          
              
// //                     {/* <li className="level3 nav-6-1 parent item"> <a href="#"><span>Clothing</span></a> 
// //                       <ul className="level1">
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Casual Wear</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Wear</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Ethnic Wear</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Denims</span></a> </li>
// //                       </ul>
// //                     </li>
// //                     <li className="level3 nav-6-1 parent item"> <a href="#"><span>Shoes</span></a> 
// //                       <ul className="level1">
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Shoes</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Sport Shoes</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Canvas Shoes</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Leather Shoes</span></a> </li>
// //                       </ul>
// //                     </li>
// //                     <li className="level3 nav-6-1 parent item"> <a href="#"><span>Watches</span></a> 
// //                       <ul className="level1">
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Digital</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Chronograph</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Sports</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Casual</span></a> </li>
// //                       </ul>
// //                     </li>
// //                     <li className="level3 nav-6-1 parent item"> <a href="#"><span>Jackets</span></a> 
// //                       <ul className="level1">
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Coats</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Jackets</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Leather Jackets</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Blazers</span></a> </li>
// //                       </ul> */}
// //                     {/* </li>
// //                     <li className="level3 nav-6-1 parent item"> <a href="#"><span>Sunglasses</span></a>                   
// //                       <ul className="level1">
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Ray Ban</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Fasttrack</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Police</span></a> </li>
// //                         <li className="level2 nav-6-1-1"> <a href="#"><span>Oakley</span></a> </li>
// //                       </ul>
// //                     </li>         */}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>


// 			)
// 	}
// }

// export default Men;