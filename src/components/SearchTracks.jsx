import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux'
import { filterTrack } from '../actions/filterTracksAction'


class SearchTrack extends Component {

  state = {
    selected: [],
    tracks: []
  }

  componentWillMount() {
    let tracks = JSON.parse(localStorage.getItem("tracks"))

    this.setState({
      tracks
    })
  }

  handleChange = () => {
    if (typeof this.state.selected !== 'undefined' && this.state.selected.length > 0) {
      this.props.filterTrack(this.state.selected)
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Typeahead
            {...this.state.tracks}
            type="text"
            id="track"
            name="track"
            onChange={selected => this.setState({ selected }, this.handleChange)}
            options={this.state.tracks}
            placeholder="Search Track"
          />
        </FormGroup>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  tracks: state.tracks
})

export default connect(mapStateToProps, { filterTrack })(SearchTrack)