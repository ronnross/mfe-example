import React, {Suspense} from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

function App() {
  return <div>
    Hello from App
    <header>hi from here</header>
    <Suspense fallback={<div>loading</div>}>
      <Dashboard />
    </Suspense>
    <footer>footer</footer>
  </div>;
}

export default App;
