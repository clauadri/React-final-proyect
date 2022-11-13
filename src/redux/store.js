import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ropaReducer from './ropa/ropa.reducer';
import userReducer from './users/user.reducer';

const rootReducer = combineReducers({
    //creamos un reducer para char y planet
    ropas: ropaReducer,
    users: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;