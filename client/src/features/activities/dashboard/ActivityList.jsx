import React from "react";
import { Item, Segment } from "semantic-ui-react";
import Activity from "./Activity";

const ActivityList = ({ activities, selectActivity, deleteActivity }) => (
  <Segment clearing>
    <Item.Group divided>
      {activities.map((activity) => {
        return (
          <Activity
            key={activity.id}
            activity={activity}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        );
      })}
    </Item.Group>
  </Segment>
);

export default ActivityList;
