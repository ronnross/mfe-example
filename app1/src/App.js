import React, {Suspense} from "react";

const DogPics = React.lazy(() => import("dogpix/DogPictures"));

function App() {
  return <div>
    Hello from App1
    <header>hi</header>
    <Suspense fallback={<div>loading</div>}>
      <DogPics />
    </Suspense>
    <footer>footer</footer>
  </div>;
}

export default App;
