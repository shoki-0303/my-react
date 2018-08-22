import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' //Link作成に必要

// import { postEvent } from '../actions'


class EventsNew extends Component {

    render() {
      return (
        <React.Fragment>
          <div>foo</div>
        </React.Fragment>
      )
    }
  }

//const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)
