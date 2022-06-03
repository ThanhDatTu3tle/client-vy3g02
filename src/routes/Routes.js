import React from "react";

import { Route, Switch } from "react-router-dom";
import ListTour from "../pages/ListTour";
// import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail";
import Air from "../pages/Air";
import DetailAir from "../pages/DetailAir";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Air} />
      {/* <Route path="/detail"  component={Detail} /> */}
      {/* <Route path="/list-tour"  component={ListTour} /> */}
      {/* <Route path="/air"  component={Air} /> */}
      <Route path="/detail-air"  component={DetailAir} />
    </Switch>
  );
};

export default routes;
