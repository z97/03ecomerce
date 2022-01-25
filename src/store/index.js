import {createStore, combineReducers} from "redux";
import {pageAmountReducer} from "./pageAmountReducer";
import {basketAmountReducer} from "./basketAmountReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    basketAmount: basketAmountReducer,
    pageAmount: pageAmountReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
