import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';

function PlantList (props) {



    return (
        <div>
            {console.log(props.plantList)}
            {
                props.plantList.map(plant=> (
                    <div>
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
