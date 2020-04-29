import React from 'react';

const PlantCard = props => {
    return(
        <div>
            Plant Name: {props.plant.name}<br/>
            Species Name: {props.plant.species}<br/>
            Watering Cycle: {props.plant.water_freq}<br/><br/>
        </div>
    )
}

export default PlantCard;