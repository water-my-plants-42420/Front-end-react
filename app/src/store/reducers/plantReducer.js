const initialState = {
    plantList: [
        {
            name: 'rose',
            time: 24,
            id: 0,
        },
        {
            name: 'violet',
            time: 12,
            id: 1,
        }
    ]
}

export const plantReducer = ( state=initialState, action ) => {
    return state;
}