import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { iProps } from './login-usage';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login: React.FC<iProps> = (props: iProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { classes, loginRequest, loginState, message } = props;

    const onSubmit = (event: any) => {
        event.preventDefault();
        if (loginState !== 'in progress') {
            loginRequest(email, password);
        }
    }

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={onSubmit}
                >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    {loginState === 'login failure' && (
                        <div>{message}</div>
                    )}
                    {loginState === 'login success' && (
                        <div>Login success!</div>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {loginState === 'in progress' &&
                            <CircularProgress
                                className={classes.spinner}
                                size={20}
                            />
                        }
                        {loginState !== 'in progress' &&
                            'Sign in'
                        }
                    </Button>
                </form>
            </Paper>
        </main>
    );
}


export default Login;
