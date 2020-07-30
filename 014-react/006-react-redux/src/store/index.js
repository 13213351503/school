import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducers from './reducers.js'

const middlewares = [];
middlewares.push(thunk);
//自定义配置logger
const logger = createLogger({
	
});
//logger只在开发环境下显示
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(reducers,applyMiddleware(...middlewares))

export default store