import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setScores } from '../actions';

class SetScoresPage extends Component {

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
    this.props.setScores(formValues, this.props.match.params.contract, this.props.match.params.week);
  }

  render(){
    return (
      <div>
        <h3>set week {Number(this.props.match.params.week) + 1} scores</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="teamscore" component={this.renderInput} lable="team score" />
          <Field name="opponentscore" component={this.renderInput} lable="opponent score" />
          <button>submit scores</button>
        </form>
        <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}/${this.props.match.params.week}`}>
          <button>back</button>
        </Link>
      </div>
    );
  }

}

const validate = formValues => {
  const errors = {};
  if (!formValues.teamscore) {
    errors.teamscore = "team score required";
  }
  if (!formValues.opponentscore) {
    errors.opponentscore = "opponent score required";
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'setScores',
  validate
})(SetScoresPage);

export default {
  component: connect(null, { setScores })(formWrapped)
}