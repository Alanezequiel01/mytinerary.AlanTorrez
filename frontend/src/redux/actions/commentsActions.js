import axios from 'axios';

const commentsActions = {

    addComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-torrez-alan.herokuapp.com/api/V1/comment', { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    
    deleteComment: (id) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

    modifiComment: (comment) => {
        
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put('https://mytinerary-torrez-alan.herokuapp.com/api/V1/comment', { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            
            return res
        }
    },

}

export default commentsActions;