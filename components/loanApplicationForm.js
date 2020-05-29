import React, { Component } from "react";
import clsx from 'clsx';
import Router from 'next/router';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Back from "./common/Back";
import numeral from "numeral";
import StepIcon from '@material-ui/core/StepIcon';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const qs = require("query-string");
const backgroundShape = require("../public/images/shape.svg");

numeral.defaultFormat("0,000");



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },

  title: {
    flexGrow: 0,
    textAlign: 'left',
    color: theme.palette.secondary.main
  }, 
    
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px'
  },
  fixedHeight: {
    height: 240,
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%",
    
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: "100%"
      },
    

  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  }
});

const CustomStepIcon = withStyles({
  text: {
    display: 'none',
  }
})(StepIcon)

const getSteps = () => {
  return ["INSTRUCTIONS", "PERSONAL INFO", "DEMOGRAPHICS", "ELIGIBILITY", "AGREEMENT", "OTHER INFO"];
};

class LoanApplicationForm extends Component {
  state = {
    activeStep: 0,
    receivingAccount: "Home Account",
    repaimentAccount: "Saving Account",
    termsChecked: false,
    labelWidth: 0
  };

  componentDidMount() {
    console.log('mounted');
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    if (this.state.activeStep === 3) {
      return "Accept";
    }
    if (this.state.activeStep === 4) {
      return "Send";
    }
    if (this.state.activeStep === 5) {
      return "Done";
    }
    return "Next";
  }

  goToDashboard = event => {

    Router.push({
      pathname: "/dashboard",
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const Label = <Typography variant="caption">PLEASE CLICK TO AGREE TO THE TERMS AND CONDITIONS</Typography>
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <Back />
                <div className={classes.stepContainer}>
                  <div className={classes.bigContainer}>
                    <Stepper
                      classes={{ root: classes.stepper }}
                      activeStep={activeStep}
                      alternativeLabel
                    >
                      {steps.map(label => {
                        return (
                          <Step key={label}>
                            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </div>
                  {activeStep === 0 && (
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={6}>
                        <Paper className={fixedHeightPaper}>
                          <Typography className= {classes.title} variant="subtitle" >Loan Instructions</Typography>
                          <Typography variant="body2"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry’s standard dummy text ever since the 1500s, when an unkno
                            wn printer took a galley of type and scrambled it to make a type specimen boo
                            k. It has survived not only five centuries, but also the leap into electronic typese
                            tting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recen
                            tly with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper className={fixedHeightPaper}>
                          <Typography variant="h2">Some more legal Bs</Typography>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.termsChecked}
                                  onChange={this.handleTerms}
                                  value="check"
                                />
                              }
                              label={Label}
                            />
                          </FormGroup>
                        </Paper>
                      </Grid>
                    </Grid>
                  )}
                  {activeStep === 1 && (
                                          
                       <form className={classes.formControl} noValidate autoComplete="off">
                         <Grid container xs={12} spacing={2}>
                       <Grid item xs={12} sm={4}>
                         <TextField
                            fullWidth
                           required
                           id="outlined-required"
                           label="Required"
                           defaultValue="Hello World"
                           variant="outlined"
                         />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                         <TextField
                           disabled
                           id="outlined-disabled"
                           label="Disabled"
                           defaultValue="Hello World"
                           variant="outlined"
                         />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                         <TextField
                           id="outlined-password-input"
                           label="Password"
                           type="password"
                           autoComplete="current-password"
                           variant="outlined"
                         />
                          </Grid>
                         <Grid item xs={12} sm={4}>
                         <TextField
                           id="outlined-read-only-input"
                           label="Read Only"
                           defaultValue="Hello World"
                           InputProps={{
                             readOnly: true,
                           }}
                           variant="outlined"
                         />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                         <TextField
                           id="outlined-number"
                           label="Number"
                           type="number"
                           InputLabelProps={{
                             shrink: true,
                           }}
                           variant="outlined"
                         />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                         </Grid>
                         <Grid item xs={12} sm={8}>
                         <TextField
                           id="outlined-helperText"
                           label="Helper text"
                           defaultValue="Default Value"
                           helperText="Some important text"
                           variant="outlined"
                         />
                       </Grid>
                       <Grid item xs={12} sm={2}>
                         <TextField
                           id="outlined-helperText"
                           label="Helper text"
                           defaultValue="Default Value"
                           helperText="Some important text"
                           variant="outlined"
                         />
                       </Grid>
                       <Grid item xs={12} sm={2}>
                         <TextField
                           id="outlined-helperText"
                           label="Helper text"
                           defaultValue="Default Value"
                           helperText="Some important text"
                           variant="outlined"
                         />
                       </Grid>
                       </Grid>
                       </form>
                     //
                   )}
                  {activeStep === 2 && (
                    <div className={classes.bigContainer}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bold" }}
                              gutterBottom
                            >
                              Details
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              We need some details about any information
                            </Typography>
                          </div>
                          <div>
                            <Button
                              variant="outlined"
                              size="large"
                              className={classes.outlinedButtom}
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                        <div className={classes.borderColumn}>
                          <Grid
                            item
                            container
                            xs={12}
                            style={{ marginBottom: 32 }}
                          >
                            <Grid item xs={6}>
                              <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >
                                Amount
                              </Typography>
                              <Typography variant="h5" gutterBottom>
                                {/* {parsed
                                  ? numeral(parsed.amount).format()
                                : "75,000"}{" "} */}
                                "75,000"  DKK
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >
                                Total fees
                              </Typography>
                              <Typography variant="h5" gutterBottom>
                                0 DKK
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item container xs={12}>
                            <Grid item xs={6}>
                              <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >
                                Total price
                              </Typography>
                              <Typography variant="h5" gutterBottom>
                                {/* {parsed
                                  ? numeral(parsed.interest).format()
                                : "6,600"}{" "} */}
                                6,600  USD
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >
                                Total cost
                              </Typography>
                              <Typography variant="h5" gutterBottom>
                                {/* {parsed
                                  ? numeral(parsed.cost).format()
                                : "81,600"}{" "} */}
                                81,600  USD
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                        <Grid item container xs={12}>
                          <Grid
                            item
                            container
                            xs={12}
                            style={{ marginBottom: 32 }}
                          >
                            <Grid item xs={6}>
                              <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >
                                How often
                              </Typography>
                              <Typography variant="h5" gutterBottom>
                                Once a month
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              style={{ textTransform: "uppercase" }}
                              color="secondary"
                              gutterBottom
                            >
                              When to start
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                              01 February 2019
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              style={{ textTransform: "uppercase" }}
                              color="secondary"
                              gutterBottom
                            >
                              When it ends?
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                              01 May 2019
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item container xs={12} style={{ marginTop: 24 }}>
                          <Grid item xs={6}>
                            <Typography
                              style={{
                                textTransform: "uppercase",
                                marginBottom: 20
                              }}
                              color="secondary"
                              gutterBottom
                            >
                              Destination account
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <Select
                                value={this.state.repaimentAccount}
                                onChange={this.handleChange}
                                input={
                                  <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="repaimentAccount"
                                  />
                                }
                              >
                                <MenuItem value="">
                                  <em></em>
                                </MenuItem>
                                <MenuItem value={"0297 00988200918"}>
                                  Account one
                                </MenuItem>
                                <MenuItem value={"0235 00235233332"}>
                                  Account two
                                </MenuItem>
                                <MenuItem value={"1256 00864222212"}>
                                  Other account
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div className={classes.bigContainer}>
                      <Paper className={classes.paper}>
                        <div style={{ marginBottom: 24 }}>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            Terms & Conditions
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Please read through and accept the terms &
                            conditions
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: 330,
                            padding: 16,
                            border: "2px solid #ccc",
                            borderRadius: "3px",
                            overflowY: "scroll"
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            1. Your agreement
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            By using this Site, you agree to be bound by, and to
                            comply with, these Terms and Conditions. If you do
                            not agree to these Terms and Conditions, please do
                            not use this site. PLEASE NOTE: We reserve the
                            right, at our sole discretion, to change, modify or
                            otherwise alter these Terms and Conditions at any
                            time. Unless otherwise indicated, amendments will
                            become effective immediately. Please review these
                            Terms and Conditions periodically. Your continued
                            use of the Site following the posting of changes
                            and/or modifications will constitute your acceptance
                            of the revised Terms and Conditions and the
                            reasonableness of these standards for notice of
                            changes. For your information, this page was last
                            updated as of the date at the top of these terms and
                            conditions.
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            2. Privacy
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Please review our Privacy Policy, which also governs
                            your visit to this Site, to understand our
                            practices. By using this Site, you agree to be bound
                            by, and to comply with, these Terms and Conditions.
                            If you do not agree to these Terms and Conditions,
                            please do not use this site. PLEASE NOTE: We reserve
                            the right, at our sole discretion, to change, modify
                            or otherwise alter these Terms and Conditions at any
                            time. Unless otherwise indicated, amendments will
                            become effective immediately. Please review these
                            Terms and Conditions periodically. Your continued
                            use of the Site following the posting of changes
                            and/or modifications will constitute your acceptance
                            of the revised Terms and Conditions and the
                            reasonableness of these standards for notice of
                            changes. For your information, this page was last
                            updated as of the date at the top of these terms and
                            conditions.
                          </Typography>
                        </div>
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.termsChecked}
                                onChange={this.handleTerms}
                                value="check"
                              />
                            }
                            label="I have read and understood the terms & conditions"
                          />
                        </FormGroup>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 4 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <Grid item container xs={12}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bold" }}
                              gutterBottom
                            >
                              Sign & confirm
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sign and confirm your agreement
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )}
                  {(activeStep === 5 || activeStep === 6) && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <Grid item container xs={12}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                              Congratulations{" "}
                              <span role="img" aria-label="conrats emoji">
                                🎉
                              </span>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              We have now a positive response
                            </Typography>
                            <Button fullWidth variant="outlined">
                              Download the service invoice or whatever
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )}
                  <div className={classes.flexBar}>
                    {activeStep !== 5 && (
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                        size="large"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        activeStep !== 5 ? this.handleNext : this.goToDashboard
                      }
                      size="large"
                      disabled={
                        this.state.activeStep === 0 && !this.state.termsChecked
                      }
                    >
                      {this.stepActions()}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoanApplicationForm);
