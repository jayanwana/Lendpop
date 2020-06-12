import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme';
import Api from '../utils/axios.service';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '100%'
  },
  placeholder: {
    height: 'auto',
    padding: 4,
  },
}))

export default function Questions(props) {

  const email = props.email;
  const [query, setQuery] = React.useState('idle');

  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    setQuery('progress');
    const postData = {
      sender_email: email,
      question: event.target[0].value
    }
    Api.questions(JSON.stringify(postData)).then((response) => {
      setQuery('success');
    }).catch(error => {
      console.log(error.response);
      setQuery('fail');
    })
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
          <Grid item xs={12} style={{display: 'flex', marginTop: 10}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submit}
            >Send</Button>
            <div className={classes.placeholder}>
              {query === 'success' ? (
                <Typography>Success!</Typography>
              ) : (
                <Fade
                  in={query === 'progress'}
                  style={{
                    // marginLeft: 20,
                    transitionDelay: query === 'progress' ? '800ms' : '0ms',
                  }}
                  unmountOnExit
                >
                  <CircularProgress size={24} color='primary'/>
                </Fade>
              )}
            </div>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}
