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

const localStorage = require('local-storage')
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
  const firstName = localStorage('firstName') ? localStorage('firstName') : 'User'

  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit = event => {
    event.preventDefault();
    console.log(email, password);
    // Router.push('/dashboard');
    const postData = {
      email: email,
      password: password
    }
    Api.login(JSON.stringify(postData)).then(response => {
      console.log(response)
      Router.push('/dashboard');
    }).catch(error => console.log(error))
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
        <title>LendPop Login</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={submit} validate={1}>
            {/* <Typography></Typography> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="outlined-email"
              label="Email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              onChange={event => setEmail(event.target.value)}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              id="outlined-password"
              label="Password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              onChange={event => setPassword(event.target.value)}
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
                > Login </Button>
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