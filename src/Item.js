import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import * as styles from "./Item.module.scss";

function Item({ option, index }) {
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-option");
    const all = document.querySelectorAll(`[data-option=${value}]`);

    [...all].map((item) => item.classList.add("blink"));

    setTimeout(() => {
      [...all].map((item) => item.classList.remove("blink"));
    }, 2000);
  };
  return (
    <div
      data-index={index}
      data-option={option}
      className={cx(styles.item, styles[option])}
      onClick={handleClick}
    >
      {option}
    </div>
  );
}

Item.propTypes = {};

export default Item;
