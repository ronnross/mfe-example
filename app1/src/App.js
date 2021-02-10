import React, { Suspense } from "react";
import style from "./App.module.css";
import Footer from "./components/footer";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));


function App() {
  return (
    <div className={style.Body}>
      Hello from App!!
      <header className={style.Heading}>hi from right here</header>
      <Suspense fallback={<div>loading</div>}>
        <Dashboard />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
