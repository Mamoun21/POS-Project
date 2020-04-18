import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import useStyles from './style';
import LogoImage from '../aa.png';
import getUserLogin from '../API/getUserLogin';
const Login = (props: any) => {
  const classes = useStyles();
  const [user, setLoginUser] = useState([]);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const letterNumber:RegExp = /^[0-9a-zA-Z]+$/;
    const eventPassword= event.target.value;
    if (eventPassword.length >= 4 && eventPassword.match(letterNumber)) {
      setError(false);
      setHelperText('');
      setPassword(event.target.value);
      setDisabled(false);
    }
    else {
      setError(true);
      setHelperText('should be at least 4 char and contain char and number');
      setDisabled(true);
    }
  }
  useEffect(() => {
    getUserLogin().then(res => {
      setLoginUser(res);
    });
  });
  const handleLoginButton = () => {
    for (let i in user) {
      if (user[i]['name'] === username && user[i]['password'] === password) {
        props.history.push('/home');
      }
    }
  }
  return (
    <div className={classes.headerlogin}>
      <Container component="main" maxWidth='xs' className={classes.containerlogin}>
        <CssBaseline />
        <div className={classes.paper}>
          <img src={LogoImage} alt='LogoImage' />
          <Typography component="h1" variant="h5">
            Login to Your Account
        </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth
              defaultValue={username}
              autoFocus
              onChange={handleUserName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={error}
              helperText={helperText}
              fullWidth
              name="password"
              defaultValue={password}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}
              onClick={handleLoginButton}
            >
              Login
          </Button>
          </form>
        </div>
        <Copyright />
      </Container>
    </div>
  );
}
export default Login