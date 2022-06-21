import * as api from '../api/index';

export const getUsers = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch(error) {
        console.log('Error client in getUsers' + error);
    }
}