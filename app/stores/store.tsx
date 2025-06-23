import { configureStore } from '@reduxjs/toolkit'
import { rootApi } from 'app/api/root'

export default configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});