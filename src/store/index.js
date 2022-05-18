import { createStore, combineReducers, applyMiddleware } from "redux";
// import { countReducer } from "./countReducer";
// import { emplReducer } from "./emplReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


const rootReducers = combineReducers({
    appConfig: appConfig
});

const persistConfig = { key: "root", storage }
const persistedReducer = persistReducer(persistConfig, rootReducers)

// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
