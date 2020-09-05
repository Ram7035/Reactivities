import React from "react";
import { Grid } from "semantic-ui-react";
import { tasks } from "../../../app/utilities/tasks";
import template from "./ActivityDashboardTemplate";

export const ActivityDashboard = ({ payload }) => (
  <Grid>{tasks.reserve(payload).init(template).build()}</Grid>
);
