import React from "react";
import { connect } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";

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
  // console.log(state); // test
  return { apple: state.apple, orange: state.orange };
};

const dispatchToProps = (dispatch) => {
  return {
    buyApple: () => dispatch(buyApple()),
    buyOrange: () => dispatch(buyOrange()),
  };
};
export default connect(stateToProps, dispatchToProps)(MyStore);
