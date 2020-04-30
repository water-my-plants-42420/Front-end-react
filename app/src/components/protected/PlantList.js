import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';

import styled from 'styled-components';

const PlantListDiv = styled.div`
    width: 2000px;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    background-color: #77dd77;
`;

const PlantCardDiv = styled.div`
    width: 350px;
    height: 400px;
    background-color: #093702;
    margin: 1%;
    border-radius: 10px;
`;

function PlantList (props) {



    return (
        <PlantListDiv>
            {console.log(props.plantList)}
            {
                props.plantList.map(plant=> (
                    <PlantCardDiv>
                        <PlantCard plant={plant} />
                    </PlantCardDiv>
                ))
            }
        </PlantListDiv>
    )
}


const mapStateToProps = state => {
    return {
        plantList: state.plantReducer.plantList,
    };
};
export default connect(
    mapStateToProps, {}
)(PlantList)
