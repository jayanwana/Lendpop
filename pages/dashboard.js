import React, {Component} from 'react';
import clsx from 'clsx';
import withStyles from "@material-ui/styles/withStyles";
import {AppBar, CssBaseline, Paper, Typography,
  Grid, Slider, Button, Avatar, Box, Badge, Divider,
  IconButton, List, Drawer, Toolbar, Container, TextField,
} from "@material-ui/core/";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoanApplicationForm from '../components/loanApplicationForm';
import { mainListItems, secondaryListItems } from '../components/listItems';
import Copyright from '../components/copyright';
import theme from '../src/theme';

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 0,
    textAlign: 'left',
    color: theme.palette.secondary.main
  },
  hello: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '10px'
  },
  fixedHeight: {
    height: 240,
  },
  gridButton: {
    borderRadius: "20px",
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main
    },
  },
  divider: {
    width: "5rem",
    margin: 0,
    alignSelf: "center",
    "@media screen and (max-width: 800px)": {
      display: "none"
    }
  },
});

class Dashboard extends Component {
  constructor(props) {
    super (props);
    this.state = {
      open: true,
      questions: false,
      firstName: ''
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.setState({ firstName : localStorage.getItem('firstName')})
  }
  handleDrawer() {
    this.setState({open: !this.state.open})
  }
  submit(event) {
    event.preventDefault()
    console.log(event);
  }

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const { open, firstName } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawer}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
          <List>{mainListItems}</List>
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                  <Grid container xs={12}>
                    <Grid className={classes.hello} item xs={12} sm={8}>
                      <Typography variant="h3" color="inherit" noWrap className={classes.title}>
                        Hello, {firstName? firstName : 'User'}!
                      </Typography>
                      <Typography variant='body1'>
                        Welcome to Lendpop, please continue your application.
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} lg={3}><Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    className={classes.gridButton}
                                                   >Continue my loan application</Button>
                  </Grid>
                  <Divider className={classes.divider} orientation="horizontal"/>

                  <Grid item xs={12} md={3} lg={3}><Button
                    fullWidth
                    variant="outlined"
                    className={classes.gridButton}
                                                   >Approval Documents</Button>
                  </Grid>
                  <Divider className={classes.divider} orientation="horizontal"/>

                  <Grid item xs={12} md={3} lg={3}><Button
                    fullWidth
                    variant="outlined"
                    className={classes.gridButton}
                                                   >Other applications</Button></Grid>
                </Grid>
              </Grid>
              {this.state.questions &&
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <form className={classes.form} onSubmit={this.submit} validate="true">
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
                          className={classes.submit}
                        >Send</Button>
                      </Grid>
                    </form>

                  </Paper>
                </Grid>}
              <Grid item xs={12}>
                <LoanApplicationForm/>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    )
  }
}

export default withStyles(useStyles)(Dashboard);
