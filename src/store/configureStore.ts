import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddlware from 'redux-saga';

import rootReducers from '../+state/reducers';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddlware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const getAppliedMiddleware = (routerhistory: any) => {
    if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(
            sagaMiddleware,
            routerMiddleware(routerhistory),
            createLogger(),
        );
    } else {
        return applyMiddleware(
            sagaMiddleware,
            routerMiddleware(routerhistory),
        )
    }
}

const configureStore = (routerHistory: any, preloadedState?: any) => {
    const store = createStore(
        connectRouter(routerHistory)(rootReducers),
        preloadedState,
        composeEnhancers(
            getAppliedMiddleware(routerHistory),
        ),
    );
    sagaMiddleware.run(watcherSaga);
    return store;
}

export default configureStore;