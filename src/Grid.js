import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

import * as styles from "./Grid.module.scss";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Grid({ rows, columns, options }) {
  const amount = rows * columns;
  const items = [...Array(amount)].map((el) => options[getRandomInt(3)]);
  console.log(items);

  return (
    <div className={styles.grid}>
      {/* TODO: best bnot to use this i here */}
      {items.map((item, i) => (
        <Item key={i} index={i} option={items[i]} items={items} />
      ))}
    </div>
  );
}

Grid.propTypes = {};

export default Grid;
