import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { fetchPlantList } from '../../store/actions/plantActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const PlantDataDiv = styled.div`
    height: 350px;
    display:flex;
    flex-direction: column;
    justify-conent: space-between;
`;
const PlantDataH2 = styled.h2`
    color: black;
`;
const PlantDataNav = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around; 
`;


const PlantCard = props => {
    const { push } = useHistory();
    const deletePlant = e => {
        e.preventDefault();
        console.log(props.plant.id);
        axiosWithAuth()
            .delete(`/plants/${props.plant.id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        props.fetchPlantList();
        push(`/protected`);
    }
    return (
        <div>
            <PlantDataDiv>
                <PlantDataH2>Plant Name: {props.plant.name}</PlantDataH2><br />
                <PlantDataH2>Species Name: {props.plant.species}</PlantDataH2><br />
                <PlantDataH2>Watering Cycle: {props.plant.water_freq} hours</PlantDataH2><br />
            </PlantDataDiv>
            {/*<Router>
            <Link to='/plants/edit'>Edit</Link>
            <Route path='/plants/edit' component={UpdatePlant}/>
            </Router>
            <UpdatePlant plant={props.plant}/>*/}
            <PlantDataNav>
                <button className='edit-button' onClick={() => push(`/update-plant/${props.plant.id}`)}>
                    Edit
                </button>
                <button className='delete-button' onClick={deletePlant}>
                    Delete
            </button>
            </PlantDataNav>
            <br /><br />
        </div>
    )
}

const mapStateToProps = state => {
    return {

    };
};
export default connect(
    mapStateToProps, { fetchPlantList }
)(PlantCard)