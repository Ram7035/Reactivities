import React from "react";
import { Card } from "semantic-ui-react";
import { tasks } from "../../../app/utilities/tasks";
import template from "./ActivityDetailsTemplate";

export const ActivityDetails = (props) => (
  <Card fluid>{tasks.reserve(props).init(template).build()}</Card>
);
