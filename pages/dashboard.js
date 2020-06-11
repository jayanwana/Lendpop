import React, {Component} from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import withStyles from "@material-ui/styles/withStyles";
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoanApplicationForm from '../components/loanApplicationForm';
import { mainListItems, secondaryListItems } from '../components/listItems';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Copyright from '../components/copyright';
import Questions from '../components/questions';
import PreviousLoans from '../components/previousLoans';
import ApprovalDocuments from '../components/approvalDocuments';
import theme from '../src/theme';
import Router from 'next/router';
import PropTypes from 'prop-types';
import ReferButton from '../components/referButton';

const localStorage = require('local-storage');
const sessionstorage = require('sessionstorage');
const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "rgba(131, 210, 217, 0.05)"
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
  optionButtons: {
    "@media screen and (max-width: 600px)":{
      flexDirection: 'column',
      justifyContent: 'space-around',
    }
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
    borderRadius: "10px",
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main
    },
  },
  buttonContainer: {
    flex: 1,
    "@media screen and (max-width: 600px)": {
      marginTop: '10px'
    }

  },
  buttonGroup: {
    marginTop: '50px'
  },
  divider: {
    width: "40px",
    margin: 0,
    alignSelf: "center",
    "@media screen and (max-width: 800px)": {
      display: "none"
    }
  },
});


class Dashboard extends Component {
  static pageTransitionDelayEnter = true
  constructor(props) {
    super (props);
    this.state = {
      loaded: false,
      open: false,
      questions: false,
      application: false,
      showHistory: true,
      showApprovalDocs: false,
      initial_amount: '',
      tenure: '',
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.submit = this.submit.bind(this);
    this.continueApplication = this.continueApplication.bind(this);
    this.reset = this.reset.bind(this);
    this.showHistory = this.showHistory.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000)
    let state = sessionstorage.getItem('state')
    if(state){
      state = JSON.parse(state)
      console.log(state);
      this.setState({
        firstName: state.first_name,
        lastName: state.last_name,
        email: state.email,
        initial_amount: state.initial_amount,
        tenure: state.tenure
      })
    } else if (sessionStorage.getItem('email')) {
    this.setState({
      firstName : sessionStorage.getItem('firstName') ? sessionStorage.getItem('firstName') : '',
      lastName : sessionStorage.getItem('lastName') ? sessionStorage.getItem('lastName') : '',
      email : sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '',
      initial_amount : sessionStorage.getItem('principal') ? sessionStorage.getItem('principal') : '',
      tenure: sessionStorage.getItem('period') ? sessionStorage.getItem('period') : ''
    })
    } else {
    Router.push('/login')
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  continueApplication(){
    this.setState({
      questions: false,
      showHistory: false,
      application: true,
      showApprovalDocs: false,
    })
  }

  showHistory(){
    this.setState({
      questions:false,
      application: false,
      showHistory: true,
      showApprovalDocs: false,
    })
  }

  showApprovalDocuments(){
    this.setState({
      questions:false,
      application: false,
      showHistory: false,
      showApprovalDocs: true,
    })
  }

  handleDrawer() {
    this.setState({open: !this.state.open})
  }
  reset(){
    this.setState({
      showHistory: false,
      application: false,
      showApprovalDocs: false,
      questions: true,
    })
  }
  submit(event) {
    event.preventDefault()
    console.log(event);
  }

  logout() {
    sessionStorage.clear();
    return Router.push('/login')
  }

  render() {
    if (!this.state.loaded) return null;
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const { open, firstName, email, lastName } = this.state;
    return (
      <div className={classes.root}>
        <Head>
          <title>InstaKash: Dashboard</title>
        </Head>
        {/* <CssBaseline /> */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawer}>
              {open && <img src={require('../public/images/instakash-oroginal-logo.png')} style={{width: '180px', height: '50px'}}/>}
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
          <List>
            <ListItem button onClick={this.reset}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            <ListItem button onClick={this.logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
        <main className={classes.content}>
          {/* <div className={classes.appBarSpacer} /> */}
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                  <Grid container>
                    <Grid className={classes.hello} item xs={12} sm={8}>
                      <Typography variant="h3" color="inherit" noWrap className={classes.title}>
                        Hello, {firstName? firstName : 'User'}!
                      </Typography>
                      <Typography variant='body1'>
                        Welcome to InstaKash, please continue your application.
                      </Typography>
                      <ButtonGroup className={classes.buttonGroup} aria-label="outlined primary button group">
                        <Button >Refer your friends and get N1,000</Button>
                        <Button >https://member.instakash.com/api/landing/&pc=5053&sid=CID137</Button>
                        <Button variant="outlined"
                          color="primary"
                          className={classes.root}
                          endIcon={<LinkOutlinedIcon/>} />
                      </ButtonGroup>                      
                    </Grid>
                  </Grid>
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.optionButtons} spacing={0}>
                  <Grid item className={classes.buttonContainer} xs={12} md='auto' lg='auto'><Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    className={classes.gridButton}
                    onClick={this.continueApplication.bind(this)}>
                    <span style={{whiteSpace: 'nowrap'}}>Continue my loan application</span>
                  </Button>
                  </Grid>
                  <Divider className={classes.divider} orientation="horizontal"/>

                  <Grid className={classes.buttonContainer} item xs={12} md='auto' lg='auto'><Button
                    fullWidth
                    variant="outlined"
                    className={classes.gridButton}
                    onClick={this.showApprovalDocuments.bind(this)}
                                                                                             >
                    <span style={{whiteSpace: 'nowrap'}}>Approval Documents</span></Button>
                  </Grid>
                  <Divider className={classes.divider} orientation="horizontal"/>

                  <Grid item className={classes.buttonContainer} xs={12} md='auto' lg='auto'><Button
                    fullWidth
                    variant="outlined"
                    className={classes.gridButton}
                    onClick={this.showHistory.bind(this)}>
                    <span style={{whiteSpace: 'nowrap'}}>Other applications</span></Button>
                  </Grid>
                </Grid>
              </Grid>
              {this.state.questions &&
                <Questions email={email}/>
              }
              {this.state.application &&
                <Grid item xs={12}>
                  <LoanApplicationForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    handler={this.showHistory}
                    initialAmount={this.state.initial_amount}
                    tenure={this.state.tenure}
                  />

                </Grid>}
              {this.state.showHistory &&
                <Grid item xs={12}>
                  <PreviousLoans email={email}/>
                </Grid>
              }
              {this.state.showApprovalDocs &&
                <Grid item xs={12}>
                  <ApprovalDocuments email={email}/>
                </Grid>
              }
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

Dashboard.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Dashboard.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default withStyles(useStyles)(Dashboard);
