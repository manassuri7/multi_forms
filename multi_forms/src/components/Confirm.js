import React from "react";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    //Process ur form-to send form to ur api or backend
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, city, occupation, bio, email }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="BIO" secondaryText={bio} />
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true} //for color
            style={StyleSheet.button}
            onClick={this.continue} //calls the next step from props
          />
          <RaisedButton
            label="Back"
            primary={true} //for color
            style={StyleSheet.button}
            onClick={this.back} //calls the prev step from props
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
