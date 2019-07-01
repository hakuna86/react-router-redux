import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import modules from './modules';

export const history = createBrowserHistory()

const logger = createLogger();
// const store = createStore(modules, applyMiddleware(logger, thunk));

export default function configureStore(preloadedState) {
    const store = createStore(
        modules(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk, logger
          // ... other middlewares ...
        ),
      ),
    )
    return store
}