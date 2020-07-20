import {combineReducers} from 'redux';
import {homeReducer} from './Home/reducers';

export default combineReducers({
    home: homeReducer,
})