import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const fetchPlantList = () => {
    return dispatch => {
        dispatch({type: 'FETCH_PLANT_START' });
        axiosWithAuth()
            .get(`https://watermyplants-backend.herokuapp.com/users/plants`)
            .then(res=>{
                dispatch({type: 'FETCH_PLANT_SUCCESS', payload: res.data })
            });
    };
};