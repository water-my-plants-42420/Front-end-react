import React, {useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import {fetchPlantList} from '../../store/actions/plantActions';
import { connect } from 'react-redux';


import styled from 'styled-components';

const AddPlantDiv = styled.div`
    width: 2000px;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const AddPlantForm = styled.form`
    width: 280px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    
`;

const AddPlantInput = styled.input`
    width: 80%;
    margin: 0 auto;
`;

const AddPlantButton = styled.button`
    margin: 0 auto;
    width:45%;
    border-radius 3px;
`

function AddPlant (props) {
    const userId = window.localStorage.getItem('userId');
    const [newPlant, setNewPlant] = useState({
        name: '',
        species: '',
        water_freq: '',
        user_id: userId
    })

    const handleChange = e => {
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        });
    };

    const addingNewPlant = e =>{
        e.preventDefault();
        console.log("before get", newPlant)
        axiosWithAuth()
        .post('/plants', newPlant)
        props.fetchPlantList();
    };
    
    return (
        <AddPlantDiv>
            <AddPlantForm onSubmit = {addingNewPlant}>
                Plant's Nickname:
                <AddPlantInput
                    type='text'
                    name='name'
                    value={newPlant.name}
                    onChange={handleChange}
                /><br/>
                Species: 
                <AddPlantInput
                    type='text'
                    name='species'
                    value={newPlant.species}
                    onChange={handleChange}
                /><br/>
                Hours before watering:
                <AddPlantInput  
                    type='number'
                    name='water_freq'
                    value={newPlant.water_freq}
                    onChange={handleChange}
                /><br/>
                <AddPlantButton>ADD NEW PLANT</AddPlantButton>
            </AddPlantForm>
        </AddPlantDiv>
    )
}  

const mapStateToProps = state =>{
    return{

    };
};
export default connect(
    mapStateToProps, {fetchPlantList}
)(AddPlant)