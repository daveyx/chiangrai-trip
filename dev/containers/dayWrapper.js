import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Day from '../components/day.js';
import EmptyDay from '../components/emptyDay.js';
import ActivitiesWrapper from './activitiesWrapper.js';
import {config} from '../config';
import axios from 'axios';
import {loadDataAction, showLoader, hideLoader} from '../actions/index';

class DayWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.getData(0);
    } else if (this.props.params.dayNumber === '1') {
      this.getData(1);
    } else {
      this.props.setBgImage();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.getData(0);
      } else if (this.props.params.dayNumber === '1') {
        this.getData(this.props.params.dayNumber);
      } else {
        this.props.setBgImage();
      }
    }
  }

  setBgImage() {
    this.props.setBgImage(this.state.data.image);
  }

  getData(dayNumber) {
    let day = Number(dayNumber) + 1;
    const key = 'day' + day;
    if (typeof this.props.savedData[key] !== 'undefined') {
      this.setState({
        data: this.props.savedData[key]
      }, () => this.setBgImage());
    } else {
      this.props.showLoader();
      axios.get(config.API_URL + '/days/' + day)
        .then(response => {
          this.setState({
            data: response.data
          }, () => {
            this.props.loadDataAction({
              day: day,
              data: this.state.data});
            this.props.hideLoader();
            this.setBgImage();
          });
      }).catch(function (error) {
        console.log('error axios getData(dayNumber): ' + error);
      });
    }
  }

  render() {
    let pageType = this.props.location.pathname === '/' ? 'home' : 'day';
    let showDay = typeof this.props.params.dayNumber === 'undefined' || this.props.params.dayNumber === '1';
    let content;
    let loader =
      <div className="loader" style={this.props.loaderState}>
        <img src="https://www.daveyx.ga/images/loader.gif" alt="loading..." />
      </div>;

    if (showDay && this.state.data !== null) {
      const dayNumber = this.props.location.pathname === '/' ? 0 : this.props.params.dayNumber;
      const activities = <ActivitiesWrapper day={dayNumber} />;
      content =
        <Day
          pageType={pageType}
          contentStyle={this.props.contentStyle}
          data={this.state.data}
          imgName={this.state.data.image}
          setBgImage={this.props.setBgImage}
          activities={activities}
        />;
    } else {
      content =
        <EmptyDay />;
    }
    return(
      <div>
        {loader}
        {content}
      </div>
    );
  }
}

function mapStatesToProps(state) {
  return {
    savedData: state.activeState,
    loaderState: state.loaderState
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loadDataAction: loadDataAction,
    showLoader: showLoader,
    hideLoader: hideLoader
  }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(DayWrapper);
