import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const fetchPlantList = () => {
    const userId = window.localStorage.getItem('userId');
    return dispatch => {
        axiosWithAuth()
            .get(`/plants/user/${userId}`)
            .then(res=>{
                dispatch({type: 'FETCH_PLANT_SUCCESS', payload: res.data })
            });
    };
};

/*
export const deletePlant = (plantId) => {
    return dispatch => {
        axiosWithAuth()
        .delete(`plants/${plantId}`)
        .then(res=>{
            dispatch({type: 'REFRESH_PLANT', payload: res.data})
        })
        .catch(err=>console.log(err))
    }
}
*/