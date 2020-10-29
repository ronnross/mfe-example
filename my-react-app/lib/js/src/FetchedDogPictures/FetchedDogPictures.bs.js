'use strict';

var React = require("react");

function FetchedDogPictures(Props) {
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hello"));
}

var make = FetchedDogPictures;

exports.make = make;
/* react Not a pure module */
