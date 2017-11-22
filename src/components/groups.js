import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/index';

export default class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {groups: []};
  }

  componentDidMount() {
    this.props.fetchGroups(this.state.term);
  }

  render() {
    return (
      // TODO here create the HTML from the JSON I'm receiving
      {this.state.groups}
    )
  }
}

export default connect((state) => state, { requestPageOfPlans })(MyComponent);
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGroups }, dispatch);
}

// No state needed here, so the null
export default connect(null, mapDispatchToProps)(SearchBar);
