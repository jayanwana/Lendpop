import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '100%'
  },
}))

export default function Questions(props) {

  const email = props.email;

  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    const postData = {
      email: email,
      question: event.target[0].value
    }
    console.log(postData);
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={submit} validate="true">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Have Any Questions?"
              placeholder="Leave a message"
              required
              multiline
              rows={8}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submit}
              style={{marginTop: '10px'}}
            >Send</Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}
