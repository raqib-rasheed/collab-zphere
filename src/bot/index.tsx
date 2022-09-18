import { StoreProvider } from "easy-peasy";
import store from "bot/helpers/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// easy peasy is not supported by react 18 so showing 
// Property 'children' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<StoreProvider<StoreModel>> & Readonly<{ store: Store<StoreModel, EasyPeasyConfig<...>>; }>'.ts(2769)
// fix
const StoreProviderOverride = StoreProvider as any;

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <StoreProviderOverride store={store}>
                <App />
            </StoreProviderOverride>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
