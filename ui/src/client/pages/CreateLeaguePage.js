import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLeague } from '../actions';

class CreateLeaguePage extends Component {

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
    this.props.createLeague(formValues);
  }

  render(){
    return (
      <div>
        <h3>create a league</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="teamone" component={this.renderInput} lable="1st pick address" />
          <Field name="teamtwo" component={this.renderInput} lable="2nd pick address" />
          <Field name="teamthree" component={this.renderInput} lable="3rd pick address" />
          <Field name="teamfour" component={this.renderInput} lable="4th pick address" />
          <Field name="teamfive" component={this.renderInput} lable="5th pick address" />
          <Field name="teamsix" component={this.renderInput} lable="6th pick address" />
          <Field name="teamseven" component={this.renderInput} lable="7th pick address" />
          <Field name="teameight" component={this.renderInput} lable="8th pick address" />
          <Field name="teamnine" component={this.renderInput} lable="9th pick address" />
          <Field name="teamten" component={this.renderInput} lable="10th pick address" />
          <button>Create League</button>
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
  if (!formValues.teamone) {
    errors.teamone = "address required";
  }
  if (!formValues.teamtwo) {
    errors.teamtwo = "address required";
  }
  if (!formValues.teamthree) {
    errors.teamthree = "address required";
  }
  if (!formValues.teamfour) {
    errors.teamfour = "address required";
  }
  if (!formValues.teamfive) {
    errors.teamfive = "address required";
  }
  if (!formValues.teamsix) {
    errors.teamsix = "address required";
  }
  if (!formValues.teamseven) {
    errors.teamseven = "address required";
  }
  if (!formValues.teameight) {
    errors.teameight = "address required";
  }
  if (!formValues.teamnine) {
    errors.teamnine = "address required";
  }
  if (!formValues.teamten) {
    errors.teamten = "address required";
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'leagueCreate',
  validate
})(CreateLeaguePage);

export default {
  component: connect(null, { createLeague })(formWrapped)
}

