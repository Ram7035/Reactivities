import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { tasks } from "../../app/utilities/tasks";
import template from "./navbarTemplate";

export default (props) => (
  <Menu fixed="top" inverted>
    <Container>{tasks.reserve(props).init(template).build()}</Container>
  </Menu>
);
