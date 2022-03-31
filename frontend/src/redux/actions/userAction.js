import axios from "axios";
 
const userAction = {

    signUpUser:(userData) =>{
        return async(dispatch,getState) => {
            const res = await axios.post('https://mytinerary-torrez-alan.herokuapp.com/api/V1/auth/signUp', {userData})
            console.log(res.data)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },

    signInUser:(userData) =>{
        return async(dispatch,getState) => {
            const user = await axios.post('https://mytinerary-torrez-alan.herokuapp.com/api/V1/auth/signIn', {userData})
            if(user.data.success){
                localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', payload: user.data.response.userData})
            }else {
                console.log(user.data.message)}
        }
    },

    signOutUser: (userData) => {
        return async (dispatch, getState) => {
            const user = axios.post('https://mytinerary-torrez-alan.herokuapp.com/api/V1/auth/signOut', {userData})
            localStorage.removeItem('token')
            dispatch({type: 'user', payload: null});
        }

    },

    verifyToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get('https://mytinerary-torrez-alan.herokuapp.com/api/V1/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            })
            if (user.data.success) {
                dispatch({type: 'user', payload: user.data.response})
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {
                localStorage.removeItem('token')
            }
        }
    }
    
};


export default userAction