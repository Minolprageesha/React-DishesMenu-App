import React, { Component } from 'react';
import {Card,CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

export default class DishdetailComponent extends Component {
   
    render() {
        const menu=this.props.selectedDish.map((dish)=>{
        if (selectedDish !=null)
        return (
            <div>
                <Card>
                <CardImg width="500px" object src={dish.image} alt={dish.name}></CardImg>  
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            
        );
    }
}
