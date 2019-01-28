import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchPlayer } from '../actions';

class FindPlayerPage extends Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, lable, meta }) => {
    return (
      <div>
        <input {...input} autoComplete="off" placeholder={lable} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.searchPlayer(formValues, this.props.match.params.contract);
  }

  render(){
    return (
      <div>
        <h3>find players</h3>
        <p>the owner of this player is... {this.props.player}</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="draftnumber" component={this.renderInput} lable="player draft position - 123" />
          <Field name="year" component={this.renderInput} lable="year of birth - YYYY" />
          <Field name="month" component={this.renderInput} lable="month of birth - MM" />
          <Field name="day" component={this.renderInput} lable="5th day of birth - DD" />
          <button>find</button>
        </form>
        <Link to={`/`}>
            <button>back</button>
        </Link>
      </div>
    );
  }

}

const validate = formValues => {
  const errors = {};
  if (!formValues.draftnumber) {
    errors.draftnumber = "player draft number required";
  }
  if (!formValues.year) {
    errors.year = "player dob required";
  }
  if (!formValues.month) {
    errors.month = "player dob required";
  }
  if (!formValues.day) {
    errors.day = "player dob required";
  }
  return errors;
}

const mapStateToProps = state => {
  return { player: state.player };
}

const formWrapped = reduxForm({
  form: 'searchPlayer',
  validate
})(FindPlayerPage);

export default {
  component: connect(mapStateToProps, { searchPlayer })(formWrapped)
}