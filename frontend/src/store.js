import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productReducer, productDetailsReducer, newReviewReducer, newProductReducer,product_Reducer,productReviewReducer,reviewReducer} from './reducers/productReducers'
import {authReducer, userReducer, forgotPasswordReducer,allUsersReducer,userDetailsReducer} from './reducers/authReducers'
import {cartReducer} from './reducers/cartReducers'
import {newOrderReducer,myOrdersReducer,orderDetailsReducer,allOrdersReducer,orderReducer} from './reducers/orderReducers'

const reducer= combineReducers({
 products:productReducer,
 productDetails:productDetailsReducer,
 newProduct: newProductReducer,
 product: product_Reducer,
 productReviews: productReviewReducer,
 review: reviewReducer,
 auth: authReducer,
 user: userReducer,
 allUsers: allUsersReducer,
 userDetails:userDetailsReducer,
 forgotPassword:forgotPasswordReducer,
 cart : cartReducer,
 newOrder: newOrderReducer,
 order: orderReducer,
 myOrders: myOrdersReducer,
 allOrders:allOrdersReducer,
 orderDetails: orderDetailsReducer,
 newReview: newReviewReducer
})



let initialState={
  cart:{
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
      shippingInfo: localStorage.getItem('shippingInfo')? JSON.parse(localStorage.getItem('shippingInfo')) : {}
  }
}

const middleware=[thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;