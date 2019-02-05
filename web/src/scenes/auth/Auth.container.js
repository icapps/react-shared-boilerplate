import { connect } from 'react-redux';
import LoginView from './Login.view';
import { loginActions } from '../../../../shared/redux';
import ForgotPasswordView from './ForgotPassword.view';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  login: loginActions.login,
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginView);
const ForgotPasswordPage = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView);

export { LoginPage, ForgotPasswordPage };
