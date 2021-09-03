import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../Pages/Home/index"));
const CreateUpdateForm = React.lazy(
  () => import("../Pages/CreateUpdateForm/index")
);

const Routes: React.FC = () => (
  <Suspense fallback={<h1>Loading ... </h1>}>
    <BrowserRouter basename="customers">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateUpdateForm} />
        <Route exact path="/edit/:id" component={CreateUpdateForm} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routes;
