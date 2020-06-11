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
});

class ApprovalDocuments extends Component {
  state = {
    documents: [],
    email: this.props.email
  }

  componentDidMount(){

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Paper className={classes.paper}>
            {this.state.documents.length > 0 ?
              (<Typography variant='caption'>Approval Documents</Typography>)
            : (<Typography variant='caption'>No Approval Documents have been Uploaded</Typography>)}
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ApprovalDocuments);
