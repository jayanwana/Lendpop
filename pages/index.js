import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import SignUpComponent from '../components/signUp';

export default function Index() {
  return (
    <div>
      <Head>
        <title>InstaKash SignUp</title>
      </Head>
      <SignUpComponent/>
    </div>
  )}
