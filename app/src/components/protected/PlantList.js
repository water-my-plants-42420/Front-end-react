import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';

function PlantList (props) {
    console.log(props.plantList);
    return (
        <div>
            {
                props.plantList.map(plant=> (
                    <div>{console.log(plant)}
                    <PlantCard plant={plant} />
                    </div>
                ))
            }
        </div>
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
