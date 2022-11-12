import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ropaReducer from './ropa/ropa.reducer';

const rootReducer = combineReducers({
    //creamos un reducer para char y planet
    ropas: ropaReducer

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;