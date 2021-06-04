import React, { Component } from 'react'

export class SelectedDishDetails extends Component {
    render() {
        if(!this.props.selectedDish){
            return null;
        }
        return (
            <div>
                {this.props.selectedDish.name}
            </div>
        )
    }
}

export default SelectedDishDetails
