import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Header from "../Header/index";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Header />
    </Switch>
  </BrowserRouter>
);

export default App;
