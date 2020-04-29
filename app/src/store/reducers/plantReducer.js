const initialState = {
    plantList: [{
        name: '',
        species: '',
        water_freq: '',
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