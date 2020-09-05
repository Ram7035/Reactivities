import React, { useState, memo } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

export const ActivityForm = memo(
  ({
    setEditMode,
    activity: initialFormState,
    createActivity,
    editActivity,
  }) => {
    const initializeForm = () => {
      return initialFormState
        ? initialFormState
        : {
            id: "",
            title: "",
            description: "",
            category: "",
            date: "",
            city: "",
            venue: "",
          };
    };

    const [activity, setActivity] = useState(initializeForm);

    const handleChange = (e) => {
      const { placeholder, value } = e.target;
      setActivity((prevState) => ({
        ...prevState,
        [placeholder.toLowerCase()]: value,
      }));
    };

    const handleSubmit = () => {
      if (activity.id.length) {
        editActivity(activity);
      } else {
        createActivity({ ...activity, id: uuid() });
      }
    };

    return (
      <Segment clearing>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Title"
            value={activity.title}
            onChange={handleChange}
          />
          <Form.TextArea
            rows={2}
            placeholder="Description"
            value={activity.description}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Category"
            value={activity.category}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Date"
            type="datetime-local"
            value={activity.date}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="City"
            value={activity.city}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Venue"
            value={activity.venue}
            onChange={handleChange}
          />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            onClick={() => setEditMode(false)}
          />
        </Form>
      </Segment>
    );
  },
  (prevProps, nextProps) => prevProps.activity.id === nextProps.activity.id
);
