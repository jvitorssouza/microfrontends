import React from "react";
import Routes from "../Routes";

import "../../set-public-path";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC<{ name: string }> = (props) => {
  return <Routes />;
};

export default App;
