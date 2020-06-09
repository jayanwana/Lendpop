import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
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
  grid: {
    margin: 0
  },
  smallContainer: {
    width: "100%"
  },
  bigContainer: {
    width: "100%"
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
    backgroundColor: "transparent",
    "@media screen and (max-width: 600px)":{
      display: "none"
    }
  },

  title: {
    fontSize: "1rem",
    flexGrow: 0,
    textAlign: 'left',
    color: theme.palette.secondary.main
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '100%'
  },
  successPaper: {
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'space-around'
  },
  successText: {
    margin: '5px 0'
  },
  formPaper: {
    margin: 0,
  },
  formLabel: {
    padding: 8,
    fontSize: '1rem',
    color:theme.palette.secondary.main
  },
  formCaption:{
    padding: 8,
    fontSize: '0.8rem',
  },
  fixedHeight: {
    height: 250,
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
    justifyContent: "center",
    alignSelf: "flex-end",
    width: '40%',
    "@media screen and (max-width: 600px)":{
      marginRight: '15px'
    }
  }
});

class PreviousLoans extends Component {
  state = {
    loanHistory: [],
    email: this.props.email
  }

  componentDidMount() {
    Api.history(JSON.stringify({email: this.state.email})).then(response => {
      console.log(response.data.data);
      if (response.data.data){this.setState({loanHistory: response.data.data})}
    }).catch(error => console.log(error))
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              {this.state.loanHistory.length > 0 ? (<ol>
                {this.state.loanHistory.map((loan) => (
                  <li key={loan.id}>
                    <Divider/>
                    <Grid container>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>Loan Amount: {` SAR ${loan.amount}`}</Typography>
                        <Typography variant='body1'>Loan Duration: {` ${loan.loan_duration}`}</Typography>
                        <Typography variant='body1'>Status: <span style={{color: loan.status==='AUTHORIZED' ? 'green' :'red'}}>
                          {`  ${loan.status}`}
                        </span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>Description: {` ${loan.description}`}</Typography>
                        <Typography variant='body1'>Created At: {`  ${loan.created_at}`}</Typography>
                      </Grid>
                    </Grid>
                    <Divider/>
                  </li>
                ))}
              </ol>) : (<Typography variant='caption'>You haven't Applied for any loan yet.</Typography>)}
            </Paper>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PreviousLoans);
