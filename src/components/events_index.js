import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom' //Link作成に必要

import { readEvents } from '../actions'


class EventsIndex extends Component {
    //componentの初期マウント
    //外部APIサーバからイベント一覧を取得
    componentDidMount() {
      //アクション->reducerへ
      this.props.readEvents()
    }

    renderEvents() {
      return _.map(this.props.events, event => (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
        ))
    }

    render() {
      return (
        <React.Fragment>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
          </table>

          <Link to="/events/new">New Event</Link>
        </React.Fragment>
      )
    }
  }

const mapStateToProps = state => ({ events: state.events })
//componentのイベントとアクションを結ぶ
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
