import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';

class AddPage extends Component {

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
    this.props.addPlayer(formValues, this.props.match.params.contract);
  }

  render(){
    return (
      <div>
        <h3>add player</h3>
        <p>if player was undrafted enter 000</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} lable="full name" />
          <Field name="draftnumber" component={this.renderInput} lable="player draft position - 123" />
          <Field name="year" component={this.renderInput} lable="year of birth - YYYY" />
          <Field name="month" component={this.renderInput} lable="month of birth - MM" />
          <Field name="day" component={this.renderInput} lable="5th day of birth - DD" />
          <Field name="position" component={this.renderInput} lable="player position" />
          <button>add</button>
        </form>
        <Link to={`/league/${this.props.match.params.contract}`}>
            <button>back</button>
        </Link>
      </div>
    );
  }

}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "player name required";
  }
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
  if (!formValues.position) {
    errors.day = "player position required";
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'addPlayer',
  validate
})(AddPage);

export default {
  component: connect(null, { addPlayer })(formWrapped)
}
