import React from "react";
import { connect } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruit/FruitAction";

const MyStore = ({ apple, orange, buyApple, buyOrange }) => {
  return (
    <div>
      <h3>سیب:{apple}</h3>
      <h3>پرتقال:{orange}</h3>
      <br />
      <button onClick={buyApple}>سیب</button>
      <button onClick={buyOrange}>پرتقال</button>
    </div>
  );
};

const stateToProps = (state) => {
  const fruitState = { apple: state.apple, orange: state.orange };
  return fruitState;
};

const dispatchToProps = (dispatch) => {
  return {
    buyApple: () => dispatch(buyApple()),
    buyOrange: () => dispatch(buyOrange()),
  };
};
export default connect(stateToProps, dispatchToProps)(MyStore);
