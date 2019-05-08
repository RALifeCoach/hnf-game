import { connect } from 'react-redux';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from '@material-ui/core';
import { loginRequest } from '../actions/login-actions';
import { getLoginState, getLoginMessage } from '../selectors/login-selectors';
import withStyles from '@material-ui/core/styles/withStyles';
import iState from '../interfaces/state';
import Login from './login';

export const styles = (theme: Theme) => {
    return createStyles({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        avatar: {
            margin: theme.spacing.unit,
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing.unit,
        },
        submit: {
            marginTop: theme.spacing.unit * 3,
        },
    });
};

export interface iProps {
    classes: any,
    loginState: string,
    loginRequest: any,
    message: string,
}

const mapStateToProps = (state: iState) => {
    return {
        loginState: getLoginState(state),
        message: getLoginMessage(state),
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return { loginRequest: (userId: string, password: string) => dispatch(loginRequest(userId, password)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
