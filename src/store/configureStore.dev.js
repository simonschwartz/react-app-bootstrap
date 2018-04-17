import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxImmutable from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();
  const reduxImmutableMiddleware = ReduxImmutable();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, loggerMiddleware, reduxImmutableMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
