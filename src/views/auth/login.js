import React, { useState, useEffect } from 'react';
import { Row, Card, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { loginUser } from 'redux/actions';
import plugbayLogo from '../../assets/logos/plugbay.jpg'

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  }
  return error;
};

function padLeadingZeros(num, size) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

const validatePhone = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your phone number';
  }
  return error;
};

const Login = ({ history, loading, error, message, 
  loginUserAction
 }) => {
  const [phone] = useState('');
  const [password] = useState('');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    } else if (message) {
      NotificationManager.success(message, 'Login Successful', 3000, null, null, '');
    }
  }, [error, message]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.phone !== '' && values.password !== '') {
        const user = { phoneNumber: padLeadingZeros(values.phone, 11), password: values.password }
        loginUserAction(user, history);
      }
    }
  };

  const initialValues = { phone, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h3">Welcome to <span className='h2'>Plugbay</span></p>
            <p className="white mb-0 mt-2">
              Please use your credentials to login.
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              {/* <span className="logo-single" /> */}
              <img src={plugbayLogo} width='85px' alt='navbrand-logo' />
            </NavLink>
            {/* <CardTitle className="mb-4">
              <IntlMessages id="user.login-title" />
            </CardTitle> */}

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom mt-4">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                     Phone Number
                    </Label>
                    <Field
                      type='number'
                      className="form-control"
                      name="phone"
                      validate={validatePhone}
                    />
                    {errors.phone && touched.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.password" />
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center mt-3">
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
                        <IntlMessages id="user.login-button" />
                      </span>
                    </Button>

                  </div>
                </Form>

              )}
            </Formik>


            <p className="text-dark mb-0">
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
  loginUserAction: loginUser,
})(Login);
