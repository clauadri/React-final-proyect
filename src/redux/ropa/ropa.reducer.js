const INITIAL_STATE = {
    ropas:[],
    loading:false,
    error:false,

}

const ropaReducer = (state = INITIAL_STATE, action)=>{
    
    switch (action.type) {
        case 'gettingClothes':
            return{...state, loading:true, error: false};
        case 'getClothes':
            return{...state, loading:false, ropas: action.payload, error: false}
        case 'errorClothes':
            return{...state, loading: false, ropas:[], error: action.payload}

        case 'creatingClothes':
            return{...state, loading:true};
        case 'createdClothes':
            return{...state, loading:false, error: false}
        case 'errorCreating':
            return{...state, loading: false, error: action.payload}

        default:
            return state;
    }
}
export default ropaReducer;