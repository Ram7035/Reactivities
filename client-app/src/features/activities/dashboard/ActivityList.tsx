import React from "react";
import { IActivity } from "../../../app/models/activity";
import { Item, Segment } from "semantic-ui-react";
import Activity from "./Activity";

interface IProps {
  activities: IActivity[];
}

const ActivityList: React.FC<IProps> = ({ activities }) => (
  <Segment clearing>{content.call(activities)}</Segment>
);

function content(this: IActivity[]) {
  return (
    <Item.Group divided>
      {this.map((activity) => {
        return <Activity key={activity.id} activity={activity} />;
      })}
    </Item.Group>
  );
}

export default ActivityList;
