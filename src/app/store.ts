import sagaMonitor from '@redux-saga/simple-saga-monitor'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from 'src/app/rootReducer'
import { rootSaga } from 'src/app/rootSaga'
import { config } from 'src/config'

const sagaMiddleware = createSagaMiddleware(config.debug ? { sagaMonitor } : undefined)

export const store = configureStore({
  reducer: rootReducer,
  // Disable thunk, use saga instead
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch