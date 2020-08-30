import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

interface IValues {
  id: number;
  name: string;
}

interface IState {
  values: Array<IValues>;
}

class App extends Component {
  state: IState = {
    values: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/values")
      .then((response) => {
        this.setState({ values: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div style={{ margin: "50px auto", textAlign: "center" }}>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((x) => {
            return <List.Item key={x.id}>{x.name}</List.Item>;
          })}
        </List>
      </div>
    );
  }
}

export default App;
