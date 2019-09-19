import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setWord, setImage, init } from "./actions";
import Svenska from "./Svenska";

import { styles } from "./styles";
const useWithInit = props => {
  useEffect(() => {
    props.init();
  });
};

const App = props => {
  useWithInit(props);

  return (
    <div style={styles}>
      <Svenska />
    </div>
  );
};

export default connect(
  null,
  { init, setWord, setImage }
)(App);
