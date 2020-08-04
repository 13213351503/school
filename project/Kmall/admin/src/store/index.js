
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer.js'

const middlewares = []
middlewares.push(thunk)
//自定义logger配置信息
const logger = createLogger({
  // ...options
})
if (process.env.NODE_ENV === `development`) {
 	 middlewares.push(logger);
}

const store = createStore(reducer,applyMiddleware(...middlewares))


export default store