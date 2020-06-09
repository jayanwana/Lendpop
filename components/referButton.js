import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '10px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function ReferButton(props) {
  const classes = useStyles();

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <Paper component="form" className={classes.root}>
      {/* <React.Fragment> */}
      <Button className={classes.iconButton} variant='contained' aria-label="refer">
        Refer your friends and get SAR100
      </Button>
      <InputBase
        className={classes.input}
        value="https://member.instakash.com/api/landing/&pc=5053&sid=CID137"
        disabled={true}
        inputProps={{ 'aria-label': 'Referral link' }}
      />
      {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
        </IconButton>
      <Divider className={classes.divider} orientation="vertical" /> */}
      <Button
        color="primary"
        className={classes.iconButton}
        variant='contained'
        onClick={() => copyToClipboard(props.link)}
        aria-label="Copy link"
      >
        <LinkOutlinedIcon/>
      </Button>
      {/* </React.Fragment> */}
    </Paper>
  );
}
