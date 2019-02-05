import { connect } from 'react-redux';
import LoginView from './Login.view';
import ForgotPasswordView from './ForgotPassword.view';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginView);
const ForgotPasswordPage = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView);

export { LoginPage, ForgotPasswordPage };
