import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import styles from '../styles/SignInUp.module.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SignInUp() {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid 
          className={styles.mainContainer} 
          justifyContent="center"
          alignItems="flex-end"
          container 
        >
          <img className={styles.logo3} src="./images/Logo3.png"/>
          <Grid item className={styles.loginLeft} xs={10} md={4}>
            <img className={styles.logo1} src="./images/Logo1.png"/>
            <p className={styles.leftText}>Time will not slow down when something unpleasant lies ahead</p>
          </Grid>
          <Grid item className={styles.loginRight} xs={10} md={3}>
            <h2>Welcome Muggle</h2>
          </Grid>
        </Grid>
      </Box>

  )
}
