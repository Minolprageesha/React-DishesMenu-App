import React, { Component } from 'react'

export class DishdetailComponent extends Component {


    render() {
        const { name,label,image,price} = this.props;
        return (
            <div style={{width:'300px',height:'400px',backgroundColor:'gray'}}>
                <h1>{name}</h1>
                <img src={image} />
                <h3>{label}</h3>
                <h3>{price}</h3>
            </div>
        )
    }
}

export default DishdetailComponent




















// import React, { Component } from 'react';
// import {Card,CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

// export default class DishdetailComponent extends Component {
   
//     render() {
//         const menu=this.props.selectedDish.map((dish)=>{
//         if (selectedDish !=null){
//         return (
//             <div>
//                 <Card>
//                     <CardImg width="500px" object src={dish.image} alt={dish.name}></CardImg>  
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>    
//         );
//     }
// })
    
// }
                
// }

// export default DishdetailComponent;

