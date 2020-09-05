import React from "react";
import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

function activityListAtLeft() {
  return (
    <Grid.Column width={10}>
      <List>
        <ActivityList
          activities={this.stock.activities}
          selectActivity={this.stock.selectActivity}
          deleteActivity={this.stock.deleteActivity}
        />
      </List>
    </Grid.Column>
  );
}

function activityDetailsOrCreateFormAtRight() {
  return (
    <Grid.Column width={6}>
      {this.stock.selectedActivity && !this.stock.editMode && (
        <ActivityDetails
          activity={this.stock.selectedActivity}
          setEditMode={this.stock.setEditMode}
          setSelectedActivity={this.stock.setSelectedActivity}
        />
      )}
      {this.stock.editMode && (
        <ActivityForm
          setEditMode={this.stock.setEditMode}
          activity={this.stock.selectedActivity}
          createActivity={this.stock.createActivity}
          editActivity={this.stock.editActivity}
        />
      )}
    </Grid.Column>
  );
}

export default [activityListAtLeft, activityDetailsOrCreateFormAtRight];
