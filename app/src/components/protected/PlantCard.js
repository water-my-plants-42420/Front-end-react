import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UpdatePlant from './UpdatePlant';

import {fetchPlantList} from '../../store/actions/plantActions';
import { connect } from 'react-redux';

import {useHistory} from 'react-router-dom';

const PlantCard = props => {
    const {push} = useHistory();
    const deletePlant = e =>{
        e.preventDefault();
        console.log(props.plant.id);
        axiosWithAuth()
        .delete(`/plants/${props.plant.id}`)
        .catch(err=>{
            console.log(err);
        })

        props.fetchPlantList();
        

    }
    return(
        <div>
            Plant Name: {props.plant.name}<br/>
            Species Name: {props.plant.species}<br/>
            Watering Cycle: {props.plant.water_freq}<br/>
            id: {props.plant.id}<br/>
            {/*<Router>
            <Link to='/plants/edit'>Edit</Link>
            <Route path='/plants/edit' component={UpdatePlant}/>
            </Router>
            <UpdatePlant plant={props.plant}/>*/}
            <div className='edit-button' onClick={()=>push(`/update-plant/${props.plant.id}`)}>
                Edit
            </div>
            <div className='delete-button' onClick={deletePlant}>
                Delete
            </div>
            <br/><br/>
        </div>
    )
}

const mapStateToProps = state =>{
    return{

    };
};
export default connect(
    mapStateToProps, {fetchPlantList}
)(PlantCard)