const INITIAL_STATE = {
    users:null,
    loading:false,
    error:false,
    token:null

}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'register_user_start':
            return{...state, loading:true};
        case 'register_user_done':
            return{...state, loading:false, error: false}
        case 'register_error':
            return{...state, loading: false, error: action.payload}
        
        case 'login_user_start':
            return{...state, loading:true};
        case 'login_user_done':
            return{...state, loading:false, users: action.payload.user, token:action.payload.token}
        case 'login_error':
            return{...state, loading: false, users:null, error: action.payload}

        case 'logout_user_start':
            return{...state, loading:true};
        case 'logout_user_done':
            return{...state, loading:false, users: null,token:null, error: false}

        case 'checkSession_start':
            return {...state, loading:true};
        case 'checkSession_done':
            return {...state, loading:false, users: action.payload.user, token:action.payload.token};
        case 'checkSession_error':
            return {...INITIAL_STATE}
        default:
            return state;
    }
}
export default userReducer;