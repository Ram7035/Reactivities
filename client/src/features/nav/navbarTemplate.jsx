import React from "react";
import { Menu, Button } from "semantic-ui-react";

const reactivities = () => (
  <Menu.Item header>
    <img src="/assets/logo.png" alt="logo" style={{ marginRight: "10px" }} />
    Reactivities
  </Menu.Item>
);

const activities = () => <Menu.Item name="Activities" />;

function createActivity() {
  return (
    <Menu.Item>
      <Button
        positive
        content="Create Activity"
        onClick={this.stock.openCreateForm}
      />
    </Menu.Item>
  );
}

export default [reactivities, activities, createActivity];
