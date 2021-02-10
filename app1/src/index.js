import("./bootstrap");

if (module.hot) {
  console.log("loading hot modules");
  module.hot.accept();
  console.log("hot modules loaded");
}
