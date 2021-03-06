import React from "react";
import PropTypes, { element } from "prop-types";
import cx from "classnames";

import * as styles from "./Item.module.scss";

function Item({ option, index, items }) {
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-option");
    const all = document.querySelectorAll(`[data-option=${value}]`);
    const allOfTheSameColour = [...all];
    const allOfTheSameColourIndexes = allOfTheSameColour.map((item) =>
      parseInt(item.getAttribute("data-index"))
    );
    const index = e.target.getAttribute("data-index");
    const allToColour = findNeighbours(
      parseInt(index),
      allOfTheSameColourIndexes
    );
    markItems(allOfTheSameColour, allToColour);
  };

  const findNeighbours = (index, allOfTheSameColourIndexes) => {
    const girdSize = 36;
    const columns = Math.sqrt(girdSize);
    let allToColor = [index];
    let neighbours = [];
    const track = [];

    const getEdgeIndexes = (columns) => {
      const leftEdge = [];
      const rightEdge = [];
      [...Array(columns)].forEach((el, i) => {
        leftEdge.push(i * columns);
        rightEdge.push(i * columns - 1);
      });

      return [leftEdge, rightEdge];
    };

    const [leftEdge, rightEdge] = getEdgeIndexes(columns);

    const getIt = (index) => {
      if (!track.includes(index)) {
        track.push(index);
        const colBefore = leftEdge.includes(index) ? index : index - 1;
        const colAfter = rightEdge.includes(index) ? index : index + 1;

        const rowBefore = index - columns;
        const rowAfter = index + columns;

        neighbours = [colBefore, colAfter, rowBefore, rowAfter].filter((item) =>
          allOfTheSameColourIndexes.includes(item)
        );

        if (neighbours.length) {
          neighbours.forEach((item) => {
            if (!allToColor.includes(item)) {
              allToColor.push(item);
            }
            getIt(item);
          });
        }
      }
    };
    getIt(index);

    return allToColor;
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
      {index}
    </div>
  );
}

Item.propTypes = {};

export default Item;
