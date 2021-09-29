import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import styles from '../styles/SignInUp.module.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SignInUp() {
  const [name, setName] = useState('Composed TextField');

  const handleChange = (event) => {
    setName(event.target.value);
  };

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
          <h1>Welcome Muggle</h1>

          <div className={styles.loginInput}>
            <img src="./images/user.png"  style={{marginRight: "1vw"}} width="40vw" alt="user logo"/>
            <TextField
              label="user name"
              id="outlined-size-small"
              size="small"
              fullWidth
            />
          </div>

          <div className={styles.loginInput}>
            <img src="./images/password.png" style={{marginRight: "1vw"}} width="40vw" alt="password logo"/>
            <TextField
              label="password"
              id="outlined-size-small"
              size="small"
              fullWidth
            />
          </div>
     
          <div className={styles.loginInput}>
            <Button variant="contained" endIcon={<SendIcon />} fullWidth >
              login
            </Button>
          </div>

   

        </Grid>
      </Grid>
    </Box>
  )
}
