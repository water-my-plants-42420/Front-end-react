import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const PlantCard = props => {
    const deletePlant = e =>{
        e.preventDefault();
        console.log(props.plant.id);
        axiosWithAuth()
        .delete(`/plants/${props.plant.id}`)
        .catch(err=>{
            console.log(err);
        })      

        axiosWithAuth()
        .get(`/plants/${props.plant.id}`)
        .then(res=>{
            console.log('data', res.data);
        })
    }
    return(
        <div>
            Plant Name: {props.plant.name}<br/>
            Species Name: {props.plant.species}<br/>
            Watering Cycle: {props.plant.water_freq}<br/>
            id: {props.plant.id}<br/>
            <div className='delete-button' onClick={deletePlant}>
                Delete
            </div>
            <br/><br/>
        </div>
    )
}

export default PlantCard;