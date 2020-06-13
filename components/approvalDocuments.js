import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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
  grid: {
    margin: 0
  },
  loans: {
    flexDirection:'column',
    margin: 0,
    width: '100%'
  },
  loanPaper: {
    padding:'8px'
  }
});

class ApprovalDocuments extends Component {
  state = {
    email: this.props.email,
    loans: []
  }

  componentDidMount(){
    const lwd = this.props.loans.filter(this.filterLoans)
    console.log(lwd);
    this.setState({loans: lwd})
  }

  filterLoans(loan) {
    return loan.photo !== null
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Paper className={classes.paper}>
            {this.state.loans.length ?
              (<Grid container spacing={2} className={classes.loans}
               >
                <Typography variant='h4'>Approval Documents</Typography>
                {this.state.loans.map(loan => (
                  <Grid item xs={12} sm={6} key={loan.id}>
                    <Paper className={classes.loanPaper}>
                      <Typography variant='body1'>Loan Amount: {` SAR ${loan.amount}`}</Typography>
                      <Typography variant='body1'>Loan Duration: {` ${loan.tenure} months`}</Typography>
                      <Grid item>
                        <Typography variant='body1'>Download Photo</Typography>
                        <Button component='a' variant="outlined" href={`http://35.239.244.63:60000/${loan.payslip}`}> Photo</Button>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>)
                : (<Typography variant='caption'>No Approval Documents have been Uploaded</Typography>)}
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ApprovalDocuments);
