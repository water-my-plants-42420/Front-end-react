import React, {useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export default function AddPlant (props) {
    const [newPlant, setNewPlant] = useState({
        name: '',
        species: '',
        time: '',
    })

    const handleChange = e => {
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        });
    };

    const addingNewPlant = e =>{
        e.preventDefault();
        //axios goes here
        axiosWithAuth()
        .post('/api/plants', newPlant)
        //action goes here
        
    };

    return (
        <div>
            <form onSubmit = {addingNewPlant}>
                Plant's Nickname:
                <input
                    type='text'
                    name='name'
                    value={newPlant.name}
                    onChange={handleChange}
                /><br/>
                Species: 
                <input
                    type='text'
                    name='species'
                    value={newPlant.species}
                    onChange={handleChange}
                /><br/>
                Hours before watering:
                <input  
                    type='number'
                    name='time'
                    value={newPlant.time}
                    onChange={handleChange}
                /><br/>
                <button>ADD NEW PLANT</button>
            </form>
        </div>
    )
}  
