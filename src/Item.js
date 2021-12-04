import React from "react";
import PropTypes, { element } from "prop-types";
import cx from "classnames";

import * as styles from "./Item.module.scss";

function Item({ option, index, items }) {
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-option");
    const all = document.querySelectorAll(`[data-option=${value}]`);
    const allOfTheSameColour = [...all];
    const index = e.target.getAttribute("data-index");
    const allToColour = findNeighbours(parseInt(index));
    markItems(allOfTheSameColour, allToColour);
  };

  const findNeighbours = (index, allOfTheSameColour) => {
    const girdSize = 36;
    const columns = Math.sqrt(girdSize);

    const colBefore = index - 1;
    const colAfter = index + 1;
    const rowBefore = index - columns;
    const rowAfter = index + columns;

    const neighbours = [colBefore, colAfter, rowBefore, rowAfter];
    const allToColour = [index, ...neighbours];
    return allToColour;
  };

  const markItems = (allOfTheSameColour, allToColour) => {
    const sameColorNeighbour = allOfTheSameColour.filter((element) =>
      allToColour.includes(parseInt(element.getAttribute("data-index")))
    );

    sameColorNeighbour.map((item) => item.classList.add("blink"));

    setTimeout(() => {
      sameColorNeighbour.map((item) => item.classList.remove("blink"));
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
