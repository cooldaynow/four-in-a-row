import {combineReducers} from 'redux';
import borderReducer from './borderReducer';
 export default combineReducers({
   border: borderReducer
})
