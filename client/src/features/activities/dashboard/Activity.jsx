import React, { memo } from "react";
import { Item } from "semantic-ui-react";
import { tasks } from "../../../app/utilities/tasks";
import template from "./ActivityTemplate";

export default memo((props) => (
  <Item>
    <Item.Content>{tasks.reserve(props).init(template).build()}</Item.Content>
  </Item>
));
