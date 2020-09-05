import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function activityImage() {
  return (
    <Image
      src={`/assets/categoryImages/${this.stock.activity.category}.jpg`}
      wrapped
      ui={false}
    />
  );
}

function meta() {
  return (
    <Card.Content>
      <Card.Header>{this.stock.activity.title}</Card.Header>
      <Card.Meta>
        <span>{this.stock.activity.date}</span>
      </Card.Meta>
      <Card.Description>{this.stock.activity.description}</Card.Description>
    </Card.Content>
  );
}

function footer() {
  return (
    <Card.Content extra>
      <Button.Group widths={2}>
        <Button
          basic
          color="blue"
          content="Edit"
          onClick={() => this.stock.setEditMode(true)}
        ></Button>
        <Button
          basic
          color="grey"
          content="Cancel"
          onClick={() => this.stock.setSelectedActivity(null)}
        ></Button>
      </Button.Group>
    </Card.Content>
  );
}

export default [activityImage, meta, footer];
