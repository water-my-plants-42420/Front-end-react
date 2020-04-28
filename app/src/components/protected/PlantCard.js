import React from 'react';

const PlantCard = props => {
    return(
        <div>
            Plant Name: {props.plant.name}<br/>
            Watering Cycle: {props.plant.time} hours<br/><br/>
        </div>
    )
}

export default PlantCard;