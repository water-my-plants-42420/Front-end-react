import React, {useEffect, useState} from 'react';

import AddPlant from './AddPlant';
import PlantList from './PlantList';

import {axiosWithAuth} from '../../utils/axiosWithAuth';

import {fetchPlantList} from '../../store/actions/plantActions';
import { connect } from 'react-redux';

const PersonalPage = (props) => {
    const [plant, setPlant] = useState([]);

    useEffect(()=>{
        props.fetchPlantList();
        /*
        axiosWithAuth()
        .get(`/plants`)
        .then(res=>{
            setPlant(
                ...plant,
                res.data
            )
        })*/
    },[])


    return (
        <div>
            {/*plant.map(res=>{
                return(
                    <div>
                         {res.name}
                        {res.species}
                    </div>
                )
                
            })*/}
            {/*plant.map(res=>{
                <div>{res.name}</div>
            })*/}
            <AddPlant />
            <PlantList />
        </div>
    )
}

const mapStateToProps = state =>{
    return{

    };
};
export default connect(
    mapStateToProps, {fetchPlantList}
)(PersonalPage)