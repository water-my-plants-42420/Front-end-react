import React from 'react';

import AddPlant from './AddPlant';
import PlantList from './PlantList';

const PersonalPage = () => {
    console.log('inside personal space');
    return (
        <div>
            {/*<AddPlant />*/}
            <PlantList />
        </div>
    )
}

export default PersonalPage;