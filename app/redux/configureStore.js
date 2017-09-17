import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import sagas from './sagas';

const loggerMiddleware = createLogger();
const isDevelopment = process.env.NODE_ENV === 'development';

export default function configureStore({ preloadedState, isClient }) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware,  routerMiddleware(browserHistory)];

	if (isDevelopment && isClient) {
		middlewares.push(loggerMiddleware);
	}

  const store = createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware.apply(this, middlewares),
			isDevelopment && isClient && typeof window !== 'undefined' && window.devToolsExtension
				? window.devToolsExtension()
				: f => f
		)
	);

  sagaMiddleware.run(sagas);

  return store;
}
