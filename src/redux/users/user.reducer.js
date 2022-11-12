const INITIAL_STATE = {
    users:[],
    loading:false,
    error:false,

}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'gettingUsers':
            return{...state, loading:true};
        case 'getUsers':
            return{...state, loading:false, users: action.payload, error: false}
        case 'errorUsers':
            return{...state, loading: false, users:[], error: action.payload}
        default:
            return state;
    }
}
export default userReducer;