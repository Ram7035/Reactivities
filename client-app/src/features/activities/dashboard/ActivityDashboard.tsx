import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";

interface IProps {
  activities: IActivity[];
}

const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
  return <Grid>{list.call(activities)}</Grid>;
};

const list = function (this: IActivity[]) {
  return (
    <Grid.Column width={10}>
      <List>
        <ActivityList activities={this} />
      </List>
    </Grid.Column>
  );
};

export default ActivityDashboard;
