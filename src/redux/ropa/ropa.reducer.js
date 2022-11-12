const INITIAL_STATE = {
    ropas:[],
    loading:false,
    error:false,

}

const ropaReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'gettingClothes':
            return{...state, loading:true};
        case 'getClothes':
            return{...state, loading:false, ropas: action.payload, error: false}
        case 'errorClothes':
            return{...state, loading: false, ropas:[], error: action.payload}
        default:
            return state;
    }
}
export default ropaReducer;