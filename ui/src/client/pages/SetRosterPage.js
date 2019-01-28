import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRoster } from '../actions';

class SetRosterPage extends Component {

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
    this.props.setRoster(formValues, this.props.match.params.contract);
  }

  render(){
    return (
      <div>
        <h3>set roster</h3>
        <p>make sure you enter the player with the correct position. players are identified by their date of birth and real world draft position. use the following formate: year, month, day, draft position (YYYYMMDDPPP).</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="week" component={this.renderInput} lable="game week 1-16" />
          <Field name="QB" component={this.renderInput} lable="quarterback" />
          <Field name="RB" component={this.renderInput} lable="running back" />
          <Field name="WR1" component={this.renderInput} lable="wide reciever 1" />
          <Field name="WR2" component={this.renderInput} lable="wide reciever 2" />
          <Field name="TE" component={this.renderInput} lable="tight end" />
          <Field name="FLEX" component={this.renderInput} lable="RB or WR or TE" />
          <Field name="K" component={this.renderInput} lable="kicker" />
          <Field name="DEF" component={this.renderInput} lable="defense" />
          <button>submit roster</button>
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
  if (!formValues.week) {
    errors.teamone = "game week required";
  }
  if (!formValues.QB) {
    errors.QB = "ID required";
  }
  if (!formValues.RB) {
    errors.RB = "ID required";
  }
  if (!formValues.WR1) {
    errors.WR1 = "ID required";
  }
  if (!formValues.WR2) {
    errors.WR2 = "ID required";
  }
  if (!formValues.TE) {
    errors.TE = "ID required";
  }
  if (!formValues.FLEX) {
    errors.FLEX = "ID required";
  }
  if (!formValues.K) {
    errors.K = "ID required";
  }
  if (!formValues.DEF) {
    errors.DEF = "ID required";
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'setRoster',
  validate
})(SetRosterPage);

export default {
  component: connect(null, { setRoster })(formWrapped)
}
