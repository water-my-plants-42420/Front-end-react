import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import {connect} from 'react-redux';
import {fetchPlantList} from '../../store/actions/plantActions';

import {useHistory, useParams} from 'react-router-dom';

function UpdatePlant(props){
    const {push} = useHistory();
    const params = useParams();
    const userId = window.localStorage.getItem('userId');
    
    const [ plant, setPlant ] = useState({
        // name:'',
        // species: '',
        // water_freq: '',
        user_id: userId,
    })

    useEffect(()=>{
        props.plant.map(res=>{
            if(res.id===params.id){
                setPlant(res);
            }
        })
    },[])

    const handleChange = e => {
        e.persist();
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(props.plant.id)
        axiosWithAuth()
        .put(`/plants/${params.id}`, plant)
        .catch(err=> console.log(err));
        props.fetchPlantList();
        push(`/protected`)
    }
    
    return (
        <div>
            <h2>UPDATE PLANT</h2>
            <form onSubmit={handleSubmit}>
                Name:
                <input 
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={plant.name}
                /><br/>
                Species:
                <input 
                    type='text'
                    name='species'
                    onChange={handleChange}
                    value={plant.species}
                /><br/>
                Watering Cycle:
                <input 
                    type='text'
                    name='water_freq'
                    onChange={handleChange}
                    value={plant.water_freq}
                /><br/>
                <button>UPDATE</button>
            </form>   
        </div>

    )



}
const mapStateToProps = state =>{
    return{
        plant: state.plantReducer.plantList,
    };
};
export default connect(
    mapStateToProps, {fetchPlantList}
)(UpdatePlant)