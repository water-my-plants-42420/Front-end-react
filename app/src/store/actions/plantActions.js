import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const fetchPlantList = () => {
    
    return dispatch => {
        axiosWithAuth()
            .get(`/plants`)
            .then(res=>{
                console.log(res.data)
                dispatch({type: 'FETCH_PLANT_SUCCESS', payload: res.data })
            });
    };
};
