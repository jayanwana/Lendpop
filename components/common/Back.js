import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const styles = theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  }
});

class Back extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          <Link className={classes.link} href="/dashboard">
            <a>
              <KeyboardArrowLeft />
              <span className={classes.text}>Back to Dashboard</span>
            </a>
          </Link>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Back);
