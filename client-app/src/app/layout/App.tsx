import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import Navbar from "../../features/nav/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

export default function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(load(setActivities), []);
  return (
    <Fragment>
      {App.Navbar}
      {App.Dashboard.call(activities)}
    </Fragment>
  );
}

const load = function (sideEffect: any) {
  return function () {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        sideEffect(response.data);
      })
      .catch((error) => console.log(error));
  };
};

App.Navbar = <Navbar />;

App.Dashboard = function (this: IActivity[]) {
  return (
    <Container style={{ marginTop: "7em" }}>
      <ActivityDashboard activities={this} />
    </Container>
  );
};
