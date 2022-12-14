import React from "react";
import MyStore from "./MyStore";
import store from "../redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyStore />
      </div>
    </Provider>
  );
};
export default App;
