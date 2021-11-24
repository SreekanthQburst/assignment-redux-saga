import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import app from "./firebase/firebase";

import AppRoutes from "./route/route";

import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

function App() {
  const clientParam = {
    cache: new InMemoryCache(),
    uri: "https://sxewr.sse.codesandbox.io/",
  };
  const client = new ApolloClient(clientParam);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <AppRoutes />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
