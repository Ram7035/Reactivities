import React, { Fragment, memo } from "react";
import { IActivity } from "../../../app/models/activity";
import { Item, Button, Label } from "semantic-ui-react";

interface IProps {
  activity: IActivity;
}

const Activity: React.FC<IProps> = ({ activity }) => (
  <Item key={activity.id}>
    <Item.Content>{content.call(activity)}</Item.Content>
  </Item>
);

function content(this: IActivity) {
  const actions = Object.create(elements);
  actions.activity = this;
  return (
    <Fragment>
      {actions.header()}
      {actions.meta()}
      {actions.description()}
      {actions.extra()}
    </Fragment>
  );
}

interface IElements {
  activity: any;
  header: any;
  meta: any;
  description: any;
  extra: any;
}

const elements: IElements | any = {};

elements.header = function () {
  return <Item.Header as="a">{this.activity.title}</Item.Header>;
};

elements.meta = function () {
  return <Item.Meta>{this.activity.date}</Item.Meta>;
};

elements.description = function () {
  return (
    <Item.Description>
      <div>{this.activity.description}</div>
      <div>
        {this.activity.city}, {this.activity.venue}
      </div>
    </Item.Description>
  );
};

elements.extra = function () {
  return (
    <Item.Extra>
      <Button floated="right" content="view" color="blue"></Button>
      <Label basic content={this.activity.category} />
    </Item.Extra>
  );
};

export default memo(Activity);
