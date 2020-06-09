import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Categories from "../Components/Categories";
import Accounts from "../Components/Accounts";
import Transactions from "../Components/Transactions";
import Rapports from "../Components/Rapports";

export default function Content() {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
        <Route path="/Accounts">
          <Accounts />
        </Route>
        <Route path="/Transactions">
          <Transactions />
        </Route>
        <Route path="/Rapports">
          <Rapports />
        </Route>
      </Switch>
    </div>
  );
}
