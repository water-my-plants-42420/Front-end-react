import React, {useState} from 'react';

export default function AddPlant (props) {
    const [newPlant, setNewPlant] = useState({
        name: '',
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
        //action goes here
    };

    return (
        <div>
            <form onSubmit = {addingNewPlant}>
                <input
                    type='text'
                    name='name'
                    value={newPlant.name}
                    onChange={handleChange}
                />
                <input  
                    type='number'
                    name='time'
                    value={newPlant.time}
                    onChange={handleChange}
                />
                <button>ADD NEW PLANT</button>
            </form>
        </div>
    )
}  
