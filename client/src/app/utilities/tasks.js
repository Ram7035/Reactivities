import React, { Fragment } from "react";

export const tasks = (function () {
  function curryFunc() {
    const self = { stock: { ...this } };
    let builder = [];
    return {
      init: function (callback) {
        builder.push(...callback);
        return this;
      },
      build: function () {
        return builder.map((func) => (
          <Fragment key={Math.random()}>{func.call(self)}</Fragment>
        ));
      },
    };
  }
  return {
    reserve: function (bindValue) {
      return curryFunc.call(bindValue);
    },
  };
})();
