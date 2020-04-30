import React, { useEffect, useState } from 'react';

import AddPlant from './AddPlant';
import PlantList from './PlantList';

import { fetchPlantList } from '../../store/actions/plantActions';
import { connect } from 'react-redux';
import Nav from '../Nav';



const PersonalPage = (props) => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    props.fetchPlantList();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <AddPlant />
        <PlantList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { fetchPlantList })(PersonalPage);
