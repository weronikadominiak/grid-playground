import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

import * as styles from "./Grid.module.scss";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Grid({ rows, columns, options }) {
  const amount = rows * columns;

  return (
    <div className={styles.grid}>
      {/* TODO: best bnot to use this i here */}
      {[...Array(amount)].map((item, i) => (
        <Item key={i} index={i} option={options[getRandomInt(3)]} />
      ))}
    </div>
  );
}

Grid.propTypes = {};

export default Grid;
