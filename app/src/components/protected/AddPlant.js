import React, {useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export default function AddPlant (props) {
    const [newPlant, setNewPlant] = useState({
        name: '',
        species: '',
        water_freq: '',
        user_id: '',
    })

    const handleChange = e => {
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        });
    };

    const addingNewPlant = e =>{
        e.preventDefault();

        axiosWithAuth()
        .post('/plants', newPlant)

        
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
