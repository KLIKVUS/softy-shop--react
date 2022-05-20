import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { appConfigReducer } from "./appConfigReducer";
import { basket } from "./basketReducer";


const rootReducers = combineReducers({
    appConfig: appConfigReducer,
    basket: basket
});

const persistConfig = { key: "root", storage, blacklist: ["appConfig"] }
const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
