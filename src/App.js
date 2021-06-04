
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menucomponent, { selectedDish} from './component/Menucomponent';
import {DISHES} from './shared/dishes';
import { Component } from 'react';
import DishdetailComponent from './component/DishdetailComponent';



class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      dishes:DISHES,
      selectedDish:selectedDish


    };
  }

  render(){


  

  return (
    <div>
     
      <Navbar dark color ="primary">
        <div className="container">
          <div className ="navbarbrand"> <NavbarBrand href ="/" >Profile</NavbarBrand>  </div>
        </div>
      </Navbar>
      <Menucomponent dishes={this.state.dishes}/>
      <DishdetailComponent selectedDish={this.state.selectedDish} /> 


      
    </div> 

  );
}
}
export default App;
