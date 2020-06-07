import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import theme from '../src/theme';
import { withStyles, styled } from '@material-ui/core/styles';
import Api from '../utils/axios.service';
import Copyright from './copyright';

const localStorage = require('local-storage');
const sessionstorage = require('sessionstorage');
const useStyles = theme => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(' + `${require('../public/images/InstaKash-background.jpg')}` + ')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paperroot: {
    "@media screen and (min-width: 600px)": {
      height: 'auto',
      marginLeft: '30px',
      alignSelf: 'center',
      borderRadius: '10px'
    }
  },
  paper: {
    margin: '2rem 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "left",
    fontSize: "0.6rem",
    alignItems: 'flex-start'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    flexShrink: 1
  },
  submit: {
    borderRadius: '20px',
  },
  sliderLabel: {
    marginTop: '1rem'
 },
  value:{
    color: theme.palette.secondary.main,
  },
  bottom: {
    padding: "0 2em",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "35px",
    marginTop: '1rem'
  }
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},

  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

class SignUp extends Component {
  constructor(props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      principal: 5000,
      period: 6,
      monthlyPayment: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrincipalSlider = this.handlePrincipalSlider.bind(this);
    this.handlePeriodSlider = this.handlePeriodSlider.bind(this);
    this.convertPrincipal = this.convertPrincipal.bind(this);
    this.convertMonth = this.convertMonth.bind(this);
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
    this.submit =this.submit.bind(this);
  }
  componentDidMount() {
    this.calculateMonthlyPayment()
    console.log(Router.route);
  }

  handleInputChange(event) {
    console.log(event.value);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handlePrincipalSlider(event, value) {
    this.setState({ principal: value });
    this.calculateMonthlyPayment()
  }

  handlePeriodSlider(event, value) {
    this.setState({ period: value });
    this.calculateMonthlyPayment();
  }

  convertPrincipal(value) {
    return `SAR ${value.toLocaleString()}`
  }

  convertMonth(value) {
    return `${value} months`
  }

  calculateMonthlyPayment() {
    const period = this.state.period
    const principal = this.state.principal
    const rate = 0.3
    const interest = principal*rate*(period/12)
    const total = principal + interest
    const monthlyPayment = total/(period)
    this.setState({monthlyPayment})
  }

  submit(event) {
    event.preventDefault();
    const postData = {
      amount: `${this.state.principal}`,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
    }
    for (let key in this.state) {
      console.log(key);
      if (['principal', 'period', 'monthlyPayment'].includes(key)){continue}
      sessionstorage.setItem(key, this.state[key])
    }
    Api.register(JSON.stringify(postData)).then(response => {
      Router.push('/email');
    }).catch(error => console.log(error.response))
  }

  render() {
    const { classes } = this.props;
    const { principal, period, monthlyPayment } = this.state;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid className={classes.paperroot} item xs={12} sm={6} md={4} lg={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h4" variant="h5" style={{color: theme.palette.secondary.main}}>
              Sign up
            </Typography>
            <Typography>You are a step closer to joining thousands of people who trust us to back their financial needs</Typography>
            <Typography>Already have an account? <Link href="/login"><a>Login</a></Link></Typography>
            <div className={classes.margin} />
            <form className={classes.form} validate={1} onSubmit={this.submit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="outlined-firstName"
                label="First Name"
                name="firstName"
                autoComplete="first name"
                autoFocus
                size="small"
                onChange={this.handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                id="outlined-lastName"
                autoComplete="last name"
                size="small"
                onChange={this.handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="outlined-email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
                onChange={this.handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography className={classes.sliderLabel} variant="caption" display="block" gutterBottom>How much would you like to borrow? <span className={classes.value}>{this.convertPrincipal(principal)}</span> </Typography>
              <PrettoSlider
                aria-label="pretto slider"
                name="principal"
                value={principal}
                min={1000} max={10000}
                step={500}
                valueLabelDisplay = "auto"
                ValueLabelComponent={ValueLabelComponent}
                valueLabelFormat = {this.convertPrincipal}
                onChange={this.handlePrincipalSlider}
              />
              <Typography className={classes.sliderLabel} variant="caption" display="block" gutterBottom>In how many months would you like to repay<span className={classes.value}> {this.convertMonth(period)}</span></Typography>
              <PrettoSlider
                aria-label="pretto slider"
                name="period"
                defaultValue={6}
                min={3} max={36}
                step={1}
                valueLabelDisplay = "auto"
                ValueLabelComponent={ValueLabelComponent}
                valueLabelFormat = {this.convertMonth}
                onChange={this.handlePeriodSlider}
              />
              <div className={classes.margin} />

              <Grid className={classes.bottom} container justify="space-evenly" spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="left">Monthly Payment<br/>
                    <Typography className={classes.value} variant='body1' align="left">{this.convertPrincipal(monthlyPayment)}</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{padding: '0'}}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  > Continue
                  </Button>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
    }
}

export default withStyles(useStyles)(SignUp)
