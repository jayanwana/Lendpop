import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Api from '../utils/axios.service';
import theme from '../src/theme';
import Copyright from '../components/copyright';

const localStorage = require('local-storage');
const sessionstorage = require('sessionstorage');
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "left",
    fontSize: "0.6rem"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EmailVerification(props) {
  const firstName = sessionstorage.getItem('firstName') ? sessionstorage.getItem('firstName') : 'User'
  const email = sessionstorage.getItem('email')

  const classes = useStyles();

  const [emailCode, setEmailCode] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (email){
      const postData = {email: email};
      Api.otpGeneration(JSON.stringify(postData))
      .then(response => console.log(response))
      .catch(error => console.log(error))
  } else {
    Router.push('/signUp')
  }
}, [])

  const submit = event => {
    event.preventDefault();
    setLoading(true)
    console.log(emailCode);
    // Router.push('/dashboard');
    const postData = {
      email: email,
      otp: emailCode
    }
    Api.verification(JSON.stringify(postData)).then(response => {
      console.log(response)
      return Router.push('/createPassword');
    }).catch(error => {
      console.log(error)
      if (error.response && error.response.status === 401 || error.response.status === 400){
        setErrorMessage(error.response.data.description);
        setError(true)
        setLoading(false)
      } else {
        console.log(error.response)
        setLoading(false)
      }
    })
  }

  const cancel = event => {
    if (confirm(`Hello ${firstName}, Are you sure you want to cancel?`)){
      Router.push('/');
    } else {
      console.log('continue');
    }
  }

  return (
    <div>
      <Head>
        <title>InstaKash: Email Verification</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify Email
          </Typography>
          <form className={classes.form} onSubmit={submit} validate={1}>
            <Typography>To verify your email, kindly type in the OTP code sent to your email.</Typography>
            <TextField
              error={error}
              helperText={error ? errorMessage : ''}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="outlined-emailCode"
              label="OTP Code"
              name="emailCode"
              autoComplete="Verification Code"
              onChange={event => setEmailCode(event.target.value)}
              autoFocus
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24}/> : 'Verify'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={cancel}
                  className={classes.submit}
                >Cancel</Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
