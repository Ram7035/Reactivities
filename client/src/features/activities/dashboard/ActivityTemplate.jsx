import React from "react";
import { Item, Button, Label } from "semantic-ui-react";

function title() {
  return <Item.Header as="a">{this.stock.activity.title}</Item.Header>;
}

function date() {
  return <Item.Meta>{this.stock.activity.date}</Item.Meta>;
}

function description() {
  return (
    <Item.Description>
      <div>{this.stock.activity.description}</div>
      <div>
        {this.stock.activity.city}, {this.stock.activity.venue}
      </div>
    </Item.Description>
  );
}

function extra() {
  return (
    <Item.Extra>
      <Button
        floated="right"
        content="View"
        color="blue"
        onClick={() => {
          this.stock.selectActivity(this.stock.activity.id);
        }}
      ></Button>
      <Button
        floated="right"
        content="Delete"
        color="red"
        onClick={() => {
          this.stock.deleteActivity(this.stock.activity.id);
        }}
      ></Button>
      <Label basic content={this.stock.activity.category} />
    </Item.Extra>
  );
}

export default [title, date, description, extra];
