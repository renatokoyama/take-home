import { compose, createStore, Store } from 'redux'
import storeSynchronize from 'redux-localstore'
import { ApplicationState, rootReducer } from './ducks'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // Create Store
  const store = createStore(rootReducer, initialState, composeEnhancers())
  storeSynchronize(store, {
    
  })
  return store
}
