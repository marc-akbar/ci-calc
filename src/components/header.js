import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  } from '../actions/main'

class Header extends Component {

  render() {
    const {  } = this.props;

    return (
      <header className='header-container'>
        <h3>This will be the header title</h3>
        <p>
        This is placeholder text for the header
        <br/>
        The header will contain information about the app
        </p>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
