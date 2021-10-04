import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { forgotPassword } from 'redux/actions';
import { NotificationManager } from 'components/common/react-notifications';
// import emChatlogo from '../../assets/logos/emChatlogo.png'


const validatePhone = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } 
  return error;
};

const ForgotPassword = ({
  history,
  forgotPasswordAction,
  loading,
  error,
  message,
}) => {
  const [email] = useState('');

  const onForgotPassword = (values) => {
    if (!loading) {
      if (values.email !== '') {
        forgotPasswordAction(values, history);
      }
    }
  };

  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        error,
        'Forgot Password Error',
        3000,
        null,
        null,
        ''
      );
    } else if (message)
      NotificationManager.success(
        message,
        'Forgot Password Success',
        3000,
        null,
        null,
        ''
      );
  }, [error, message]);

  const initialValues = { email };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h3">Welcome to <span className='h2'>Taskr</span></p>
            <p className="white mb-0">
              Please use your e-mail to reset your password
              {/* If you are not a member, please{' '}
              <NavLink to="/auth/verify-email" className="white">
                register
              </NavLink>
              . */}
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
              {/* <img src={emChatlogo} width='130px' alt='navbrand-logo' /> */}
            </NavLink>
            <CardTitle className="mb-5" />

            <Formik initialValues={initialValues} onSubmit={onForgotPassword}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Phone Number
                    </Label>
                    <Field
                    type='number'
                      className="form-control"
                      name="email"
                      validate={validatePhone}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/auth/forgot-password">
                      <IntlMessages id="user.forgot-password-question" />
                    </NavLink>
                    <Button
                      color="primary"
                      className={`btn-authorization btn-shadow btn-multiple-state ${loading ? 'show-spinner' : ''
                        }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.reset-password-button" />
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
              
            </Formik>
            <p className="text-dark mb-0 mt-2">
                If you are not a member, please{' '}
                <NavLink to="/auth/register" className=" text-info">
                  <u>
                    register
                  </u>
                </NavLink>
                .
              </p>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { loading, error, message } = authUser;
  return { loading, error, message };
};

export default connect(mapStateToProps, {
  forgotPasswordAction: forgotPassword,
})(ForgotPassword);
