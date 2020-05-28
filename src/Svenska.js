import React from "react";
import { connect } from "react-redux";
import { getWord, getImage } from "./selectors";
import { Img } from "react-image";

const Word = data => {
  return (
    <div>
      <div style={{ minHeight: 320, boxSizing: "border-box" }}>
        <Img
          height="320"
          src={data["image"]}
          style={{ display: "block", margin: "auto" }}
        />
      </div>
      <h1>{data["word"]["se"]}</h1>
      <code>{data["word"]["en"]}</code>
    </div>
  );
};

const mapStateToProps = state => ({
  word: getWord(state),
  image: getImage(state)
});

export default connect(mapStateToProps)(Word);
