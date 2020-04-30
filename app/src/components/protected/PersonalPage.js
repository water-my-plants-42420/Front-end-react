import React, { useEffect, useState } from 'react';
import PlantList from './PlantList';
import { fetchPlantList } from '../../store/actions/plantActions';
import { connect } from 'react-redux';
import Nav from '../Nav';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
const AddPlantButton =styled.button`
  margin-bottom: 5%;
  border-radius:3px;
`
const PersonalPage = (props) => {
  const {push} = useHistory();
  useEffect(() => {
    props.fetchPlantList();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <AddPlantButton className='edit-button' onClick={() => push(`/adding-plant`)}>
          Add Plant
        </AddPlantButton>
        <PlantList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { fetchPlantList })(PersonalPage);
