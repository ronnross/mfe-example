import React, {Suspense} from "react";

const App2 = React.lazy(() => import("app2/App2"));

function App() {
  return <div>
    Hello from App1
    <header>hi</header>
    <Suspense fallback={<div>loading</div>}>
      <App2 />
    </Suspense>
    <footer>footer</footer>
  </div>;
}

export default App;
