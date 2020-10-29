import React, {Suspense} from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

function App() {
  return <div>
    Hello from App1
    <header>hi</header>
    <Suspense fallback={<div>loading</div>}>
      <Dashboard />
    </Suspense>
    <footer>footer</footer>
  </div>;
}

export default App;
