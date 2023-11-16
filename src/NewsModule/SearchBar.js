import React from "react";
import { Button, Form,Input } from "semantic-ui-react";
import { MDBInput } from 'mdb-react-ui-kit';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }
  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };


  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          
            <Form.Input
            
              placeholder="Search topic"
              name="topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
            />
          
            <Button type="submit" color="green">
              Search
            </Button>
       
        </Form>
      </div>
    );
  }
}

export default SearchBar;