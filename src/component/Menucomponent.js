{import React, { Component } from 'react';
import {Card,CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import DishdetailComponent,{selec} from './DishdetailComponent';



class Menucomponent extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
        <DishdetailComponent selectedDish={this.state.selectedDish}/>
    }

    renderDish(dish){
        if(dish !=null)
            return(
            <Card>
                <CardImg width="500px" object src={dish.image} alt={dish.name}></CardImg>  
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
        else{
            return(
                <div>
                    
                </div>
            );
        }
    }
    render() {
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                     <Card onClick={()=>this.onDishSelect(dish)}>
                     
                         <CardImg width="500px" object src={dish.image} alt={dish.name}></CardImg>
                         <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                         </CardImgOverlay>
                
                     </Card>
                     
                </div>
            );
        }
        );

        return (

            <div className="container">
                <div className="row">
                    
                        {menu}
                    

                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}



export default Menucomponent ;