// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Fragment } from "react/jsx-runtime";

import Leerlingen from "./components/leerlingen";

function App() {
  const start = [
    { naam: "karel kleintjes", klassen: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klassen: ["1A", "2B", "3H"] },
  ];
  return (
    <Fragment>
      <Leerlingen start={start} />
    </Fragment>
  );
}

export default App;
