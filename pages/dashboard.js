import React, {Component} from 'react';
import Head from 'next/head';
import {Transition} from 'react-spring/renderprops.cjs';
import {animated, config} from 'react-spring';
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
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoanApplicationForm from '../components/loanApplicationForm';
import { mainListItems, secondaryListItems } from '../components/listItems';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import Api from '../utils/axios.service';
import Copyright from '../components/copyright';
import Questions from '../components/questions';
import NewLoanApplicationForm from '../components/newLoanApp';
import PreviousLoans from '../components/previousLoans';
import ApprovalDocuments from '../components/approvalDocuments';
import theme from '../src/theme';
import Router from 'next/router';
import PropTypes from 'prop-types';
import ReferButton from '../components/referButton';

const localStorage = require('local-storage');
const sessionstorage = require('sessionstorage');
const drawerWidth = 240;

const AnimatedGrid = animated(Grid)
const useStyles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "rgba(131, 210, 217, 0.05)",
    width: '100vw',
    overflowX: 'hidden'
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
    flexWrap: 'nowrap',
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
    color: theme.palette.primary.main
  },
  helloContainer: {
    justifyContent:'space-between',
    flexWrap:'nowrap',
    height:'100%'
  },
  hello: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  helloImage: {
    display: 'flex',
    justifyContent: 'flex-end',
    "@media screen and (max-width: 850px)": {
      display: "none"
    }
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
    overflowX: 'hidden',
    minWidth: '280px'
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
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main
    },
  },
  buttonContainer: {
    flex: 1,
    "@media screen and (max-width: 600px)": {
      marginTop: '10px'
    }

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
      newLoanApp: false,
      showHistory: true,
      showApprovalDocs: false,
      firstName: '',
      email: '',
      data: {},
      loans: [],
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.submit = this.submit.bind(this);
    this.continueApplication = this.continueApplication.bind(this);
    this.reset = this.reset.bind(this);
    this.showHistory = this.showHistory.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (this.source) {
          this.source.cancel('Cancel previous request');
      }
    this.source = Api.source()
    const email = sessionstorage.getItem('email')
    if (email) {
      Api.userData(JSON.stringify({email: email}),
      { cancelToken: this.source.token }).then(response => {
        this.setState({
          firstName: response.data.user_data.first_name,
          email: response.data.user_data.email,
          data: response.data.user_data,
          loans: response.data.loan_data,
          loaded: true,
        })
        this.props.pageTransitionReadyToEnter()
      }).catch(error => console.log(error))
    } else {
    Router.push('/login')
    }
  }

  componentWillUnmount() {
    return this.source.cancel('request canceled')
  }

  continueApplication(){
    this.setState({
      questions: false,
      showHistory: false,
      application: true,
      showApprovalDocs: false,
      newLoanApp: false,
    })
  }

  newApplication(){
    this.setState({
      questions: false,
      showHistory: false,
      application: false,
      showApprovalDocs: false,
      newLoanApp: true,
    })
  }

  showHistory(){
    this.setState({
      questions:false,
      application: false,
      showHistory: true,
      showApprovalDocs: false,
      newLoanApp: false,
    })
  }

  showApprovalDocuments(){
    this.setState({
      questions:false,
      application: false,
      showHistory: false,
      showApprovalDocs: true,
      newLoanApp: false,
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
    this.setState({loaded:false})
    return Router.push('/login')
  }

  render() {
    if (!this.state.loaded) return null;
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const { open, firstName, email, data, loans, questions,
      showHistory, showApprovalDocs, newLoanApp, application } = this.state;
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
              {open && <img src={require('../public/images/instakash-original-logo.png')} style={{width: '180px', height: '50px'}}/>}
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon/>}
            </IconButton>
          </div>
          <Divider/>
          <List>
            {loans.length &&
              <React.Fragment>
                <ListItem button onClick={this.continueApplication}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Update Profile" />
                </ListItem>
                <Divider />
              </React.Fragment>}
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
                <Paper className={fixedHeightPaper} style={{justifyContent: 'center'}}>
                  <Grid container className={classes.helloContainer}>
                    <Grid className={classes.hello} item xs={12} sm={10} md={8}>
                      <Grid>
                        <Typography variant="h3" color="inherit" noWrap className={classes.title}>
                          Hello, {firstName? firstName : 'User'}!
                        </Typography>
                        <Typography variant='body1' styles={{marginTop:"5px"}}>
                          Welcome to InstaKash, please continue your application.
                        </Typography>
                      </Grid>
                      <ReferButton link='https://member.instakash.com/api/landing/&pc=5053&sid=CID137'/>
                    </Grid>
                    <Grid className={classes.helloImage} item xs={null} sm={4}>
                      <img src={require('../public/images/dashboard icon.png')} style={{height:'200px'}}/>
                    </Grid>
                  </Grid>
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.optionButtons} spacing={0}>
                  <Grid item className={classes.buttonContainer} xs={12} md='auto' lg='auto'>
                    {loans.length ? <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      className={classes.gridButton}
                      onClick={this.newApplication.bind(this)}>
                      <span style={{whiteSpace: 'nowrap'}}>New loan application</span>
                    </Button> : <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      className={classes.gridButton}
                      onClick={this.continueApplication.bind(this)}>
                      <span style={{whiteSpace: 'nowrap'}}>Continue my loan application</span>
                    </Button>}
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
              <Transition
                items={questions}
                initial={null}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                leave={{ opacity: 0, display: 'none' }}
                trail={300}>
                {items => questions && (props =>
                  <AnimatedGrid style={props} item xs={12}>
                    <Questions email={email}/>
                  </AnimatedGrid>)
                }
              </Transition>
              <Transition
                items={application}
                initial={null}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                leave={{ opacity: 0, display: 'none' }}
                trail={300}>
                {items => application && (props =>
                  <AnimatedGrid style={props} item xs={12}>
                    <LoanApplicationForm
                      firstName={firstName}
                      email={email}
                      data={data}
                      handler={this.showHistory}
                    />
                  </AnimatedGrid>)
                }
              </Transition>
              <Transition
                items={showHistory}
                initial={null}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                leave={{ opacity: 0, display: 'none' }}
                trail={300}>
                {items => showHistory && (props =>

                  <AnimatedGrid style={props} item xs={12}>
                    <PreviousLoans loans={loans}/>
                  </AnimatedGrid>)
                }
              </Transition>
              <Transition
                items={showApprovalDocs}
                initial={null}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                leave={{ opacity: 0, display: 'none' }}
                trail={300}>

                {items => showApprovalDocs && (props =>

                  <AnimatedGrid style={props} item xs={12}>
                    <ApprovalDocuments email={email} loans={loans}/>
                  </AnimatedGrid>)
                }
              </Transition>
              <Transition
                items={newLoanApp}
                initial={null}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                leave={{ opacity: 0, display: 'none'}}
                trail={300}>
                {items => newLoanApp && (props =>

                  <AnimatedGrid style={props} item xs={12}>
                    <NewLoanApplicationForm email={email}/>
                  </AnimatedGrid>)
                }
              </Transition>

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
