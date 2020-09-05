import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../../features/nav/Navbar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function navigationBar() {
  return <Navbar openCreateForm={this.stock.openCreateForm} />;
}

function appContent() {
  return (
    <Container style={{ marginTop: "7em" }}>
      <ActivityDashboard payload={this.stock} />
    </Container>
  );
}

export default [navigationBar, appContent];
