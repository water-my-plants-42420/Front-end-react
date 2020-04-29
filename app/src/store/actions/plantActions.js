import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const fetchPlantList = () => {
    const userId = window.localStorage.getItem('userId');
    return dispatch => {
        axiosWithAuth()
            .get(`/plants/user/${userId}`)
            .then(res=>{
                console.log(res.data)
                dispatch({type: 'FETCH_PLANT_SUCCESS', payload: res.data })
            });
    };
};
