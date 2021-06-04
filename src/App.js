
// import './App.css';
// import {Navbar,NavbarBrand} from 'reactstrap';
// import Menucomponent, { selectedDish} from './component/Menucomponent';
// import {DISHES} from './shared/dishes';

// import DishdetailComponent from './component/DishdetailComponent';

import './App.css';
import React, { Component } from 'react';
import {DISHES} from './shared/dishes'
import Menucomponent from './component/Menucomponent';

class App extends Component{
    /**
     * 
     * !constructor nathuwa gahana puluwan=======>>>>>>>>>>>>>> state={dishes:Dishes} ====>>>>>>>>>>>>>hoyal balann e method eka
     */

  constructor(props){
    super(props);
    this.state={
        dishes:DISHES,
        selectedDish:null
    }
}
  handelSelectedDish(dish){
    this.setState({selectedDish:dish})
  }

  render(){
    return(
      <Menucomponent selectedDish={this.selectedDish} dishes={this.state.dishes}/>
    );
  }
}
export default App;


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state ={
//       dishes:DISHES,
//       selectedDish:selectedDish
//     };
//   }
//   render(){

//   return (
//     <div>
     
//       <Navbar dark color ="primary">
//         <div className="container">
//           <div className ="navbarbrand"> <NavbarBrand href ="/" >Profile</NavbarBrand>  </div>
//         </div>
//       </Navbar>
//       <Menucomponent dishes={this.state.dishes}/>
//       <DishdetailComponent selectedDish={this.state.selectedDish} /> 
 
//     </div> 
//   );

// }
// }
// export default App;
