import ProductReducer from './ProductReducer';
import {combineReducers} from 'redux';
import AdToCart from './AdToCartReducer';

const allReducer= combineReducers(  { 
    products:ProductReducer,
    AddToCart:AdToCart,

});
export default  allReducer;