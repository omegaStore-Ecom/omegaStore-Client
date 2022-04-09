import "styles/globals.css";
import "styles/LandingPage.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/lib/integration/react";
import store from "redux/store";

const persistor = persistStore(store);

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
            <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
