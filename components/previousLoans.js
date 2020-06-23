import React, { Component } from "react";
import {Transition} from 'react-spring/renderprops.cjs';
import {animated, config} from 'react-spring';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Api from '../utils/axios.service';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary["A100"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: '20 0',
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '100%'
  },
  formLabel: {
    padding: 8,
    fontSize: '1.2rem',
    color:theme.palette.primary.main,
    textTransform: "uppercase"
  },
  grid: {
    margin: 0
  },
});

class PreviousLoans extends Component {
  state = {
    loanHistory: this.props.loans,
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const loans = this.state.loanHistory
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Typography  className={classes.formLabel} variant="caption">Loan history</Typography>
              {loans.length ? (
                <Transition
                  items={loans} keys={item => item.id}
                  initial={null}
                  from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                  enter={{ height: 'auto', opacity: 1, padding: '8px' }}
                  leave={{ height: 0, opacity: 0, }}
                  trail={300}
                >
                  {item => props => (
                    <animated.div style={props}>
                      <Divider/>
                      <Grid container>
                        <Grid item xs={12} sm={6}>
                          <Typography variant='body1'>Loan Amount: {` SAR ${item.amount}`}</Typography>
                          <Typography variant='body1'>Loan Duration: {` ${item.tenure} months`}</Typography>
                          <Typography variant='body1'>Status: <span style={{color: item.status==='AUTHORIZED' ? theme.palette.primary.main :'red'}}>
                            {`  ${item.status}`}
                          </span>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant='body1'>Description: {` ${item.description}`}</Typography>
                          <Typography variant='body1'>Created At: {`  ${item.created_at}`}</Typography>
                        </Grid>
                      </Grid>
                      <Divider/>
                    </animated.div>
                  )}
                </Transition>
              ) : (<Typography variant='caption'>You haven't Applied for any loan yet.</Typography>)}
            </Paper>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PreviousLoans);
