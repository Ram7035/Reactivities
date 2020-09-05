import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { tasks } from "../utilities/tasks";
import template from "./AppTemplate";

export default () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => {
        const activities = [];
        response.data.forEach((a) => {
          a.date = a.date.split(".")[0];
          activities.push(a);
        });
        setActivities(activities);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelectActivity = (id) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleEditActivity = (activity) => {
    setActivities([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id) => {
    setActivities([...activities.filter((a) => a.id !== id)]);
    if (selectedActivity.id === id) {
      setSelectedActivity(null);
      if (editMode) setEditMode(false);
    }
  };

  return (
    <Fragment>
      {tasks
        .reserve({
          activities: activities,
          selectedActivity: selectedActivity,
          selectActivity: handleSelectActivity,
          setSelectedActivity: setSelectedActivity,
          editMode: editMode,
          setEditMode: setEditMode,
          openCreateForm: handleOpenCreateForm,
          createActivity: handleCreateActivity,
          editActivity: handleEditActivity,
          deleteActivity: handleDeleteActivity,
        })
        .init(template)
        .build()}
    </Fragment>
  );
};
