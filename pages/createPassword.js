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
import Api from '../utils/axios.service';
import theme from '../src/theme';
import Copyright from '../components/copyright';

const localStorage = require('local-storage')
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

export default function Login(props) {
  const email = sessionstorage.getItem('email')

  const classes = useStyles();

  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!email) {Router.push('/')}
  }, [])

  const submit = event => {
    event.preventDefault();
    if (password === password1){
    console.log(email, password);
    // Router.push('/dashboard');
    const postData = {
      email: email,
      password: password
    };
    Api.password(JSON.stringify(postData)).then(response => {
      console.log(response);
      return Router.push('/dashboard');
    }).catch(error => {
      if (error.response && error.response.status === 401 ){
        setErrorMessage(error.response.data.description);
        setError(true)}
      else {
        console.log(error)
      }
    })
  } else {
      setErrorMessage("Passwords do not match");
      setError(true)}
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
        <title>InstaKash Password</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a Password
          </Typography>
          <form className={classes.form} onSubmit={submit} validate={1}>
            {/* <Typography></Typography> */}
            <TextField
              error={error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              id="outlined-password"
              label="Password"
              name="password"
              placeholder="Enter Password"
              autoComplete="password"
              onChange={event => setPassword(event.target.value)}
              value={password}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              error={error}
              helperText={error ? errorMessage : ''}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              id="outlined-password1"
              label="Password"
              name="password1"
              placeholder="Re-enter Password"
              autoComplete="password"
              onChange={event => setPassword1(event.target.value)}
              value={password1}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                > Submit </Button>
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
