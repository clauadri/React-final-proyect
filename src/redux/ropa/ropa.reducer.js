const INITIAL_STATE = {
    ropa:[],
    loading:false,
    error:false,

}

const ropaReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'gettingClothes':

            return{...state, loading:true};

        case 'getClothes':
            return{...state, loading:false, ropa: action.payload, error: false}
        case 'errorClothes':
            return{...state, loading: false, ropa:[], error: action.payload}
        default:
            return state;
    }
}
export default ropaReducer;