import React, {Suspense} from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const DogPictures = React.lazy(() => import("dogpix/FetchedDogPictures"));

function App() {
  return <div>
    Hello from App1
    <header>hi</header>
    <Suspense fallback={<div>loading</div>}>
      <Dashboard />
      <DogPictures />
    </Suspense>
    <footer>footer</footer>
  </div>;
}

export default App;
