import { createStore, applyMiddleware } from 'redux';
import RootReducer from './component/reducer/RootReducer';
import ReduxThunk from 'redux-thunk';
 
export const middlewares = [ReduxThunk];
 
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
 
export const store = createStoreWithMiddleware(RootReducer);

export default store;





















