import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import crowdfunding from '../assets/images/daily-ui-crowdfunding.jpg';
import customize from '../assets/images/daily-ui-customize-product.jpg';
import invoice from '../assets/images/daily-ui-invoice.jpg';
import listing from '../assets/images/daily-ui-job-listing.jpg';
import weather from '../assets/images/daily-ui-weather.jpg';
import home from '../assets/images/daily-ui-home.jpg';
import leaderboard from '../assets/images/daily-ui-leaderboard.jpg';
import login from '../assets/images/daily-ui-login.jpg';
import pageCover from '../assets/images/daily-ui-page-cover.jpg';
import profile from '../assets/images/daily-ui-profile.jpg';
import Nav from '../components/ProjectNav.js';


class Ui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      image: weather,
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle(selected) {
    this.setState({
      modal: !this.state.modal,
      image: selected,
    });
  };

  render() {
    return (
      <div className="ux-page">
        <div className="title-wrapper" style={{backgroundColor: 'rgba(141, 158, 142, .5)'}}>
          <img src={home} height='100%' width='100%' />
          <div className="title-text">
            <h2>User Interface Design Iterations</h2>
            <h3 className="subheader body-text">Participating in a design challenge allowed me to hone my iteration skills while working within tight deadlines</h3>
          </div>
        </div>
        <div className="ui-content">
          <div className="ui-grid">
            <div className="ui-item" onClick={() => this.toggle(weather)}>
              <img src={weather} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Weather</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(crowdfunding)}>
              <img src={crowdfunding} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Crowdfunding</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(customize)}>
              <img src={customize} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Custom Product</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(invoice)}>
              <img src={invoice} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Invoice</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(listing)}>
              <img src={listing} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Listing</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(leaderboard)}>
              <img src={leaderboard} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Leaderboard</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(login)}>
              <img src={login} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>Leaderboard</h3>
              </div>
            </div>
            <div className="ui-item" onClick={() => this.toggle(profile)}>
              <img src={profile} height='100%' width='100%' />
              <div className="hidden-text">
                <h3>User Profile</h3>
              </div>
            </div>
          </div>
        </div>
        <Nav page='UI' />
        <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered={true}>
          <img src={this.state.image} height='100%' width='100%' />
        </Modal>
      </div>
    );
  }
}

export default Ui;
