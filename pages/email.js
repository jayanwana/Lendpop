import React, {useState} from 'react';
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
import Api from '../utils/axios.service';
import theme from '../src/theme';
import Copyright from '../components/copyright';
var localStorage = require('local-storage');

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
  const firstName = localStorage('firstName')

  const classes = useStyles();

  const [emailCode, setEmailCode] = useState()

  const submit = event => {
    event.preventDefault();
    console.log(emailCode);
    Router.push('/dashboard');
    // const postData = {
    //   email: emailCode
    // }
    // Api.verification(JSON.stringify(postData)).then(response => {
    //   Router.push('/dashboard');
    // }).catch(error => console.log(error))
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
        <title>LendPop: Email Verification</title>
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
            <Typography>To verify your email, kindly type in the code sent to you</Typography>
            <TextField
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
                > Verify </Button>
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
