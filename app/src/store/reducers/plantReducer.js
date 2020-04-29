const initialState = {
    plantList: [{
        name: 'test1',
        species: 'test1',
        water_freq: 'test1',
    },
    {
        name:'test2',
        species: 'test2',
        water_freq: 'test2',
    }]
}

export const plantReducer = ( state=initialState, action ) => {
    switch (action.type){
        case 'FETCH_PLANT_SUCCESS':
            return{
                ...state,
                plantList: action.payload
            }
    }
    return state;
}