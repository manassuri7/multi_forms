import React from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation} //this is done so tht the value we entered stays der.
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city} //this is done so tht the value we entered stays der.
          />
          <br />
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="BIO"
            onChange={handleChange("bio")}
            defaultValue={values.bio} //this is done so tht the value we entered stays der.
          />
          <br />
          <RaisedButton
            label="Continue"
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
