import React, { Component } from 'react'

export class DishdetailComponent extends Component {


    render() {
        const { dish,selectedDish} = this.props;
        return (
            <div style={{width:'300px',height:'400px',backgroundColor:'gray'}} onClick={()=>selectedDish(dish)}>
                <h1>{dish.name}</h1>
                <img src={dish.image} />
                <h3>{dish.label}</h3>
                <h3>{dish.price}</h3>
               
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

