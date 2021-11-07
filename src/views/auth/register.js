import React, { useState, useEffect } from 'react';
import {
  Row,
  Card,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

import { NotificationManager } from 'components/common/react-notifications';
import { Formik, Form, Field } from 'formik';
// import emChatlogo from '../../assets/logos/emChatlogo.png'
import plugbayLogo from '../../assets/logos/plugbaylogo.png'


function padLeadingZeros(num, size) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

const validateName = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your first name';
  }
  return error;
};

const validatePhoneNumber = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your Phone number';
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  }
  return error;
};

const Register = ({ history, loading, error, message,
  registerUserAction
}) => {
  const [password] = useState('');
  const [fullname] = useState('');
  const [phone] = useState('');


  const initialValues = { fullname, phone, password };

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Registration Error', 3000, null, null, '');
    }
    if (message) {
      NotificationManager.success(message, 'Registration Successful', 3000, null, null, '');
    }
  }, [error, message]);


  const onUserRegister = (values) => {

    if (values.fullname !== '' && values.password !== '' && values.phone !== '') {
      const data = { fullName: values.fullname, phoneNumber: padLeadingZeros(values.phone, 11), password: values.password }
      console.log(data, history)
      registerUserAction(data, history)
    }
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h3">Welcome to <span className='h2'>Taskr</span></p>
            <p className="dark mb-0 mt-2  white">
              Enter your details to signup.
              <br />
              {/* If you are not a member, please{' '}
              <NavLink to="/auth/verify-email" className="white">
                register
              </NavLink> */}

            </p>
          </div>
          <div className="form-side">
            {/* <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink> */}
            <NavLink to="/" className="white">
              {/* <span className="logo-single" /> */}
              <img src={plugbayLogo} width='220px' alt='navbrand-logo' />
              {/* <img src={emChatlogo} width='130px' alt='navbrand-logo'/> */}
            </NavLink>

            {/* <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle> */}
            <Formik initialValues={initialValues} onSubmit={onUserRegister}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Full Name
                    </Label>
                    <Field
                      className="form-control"
                      name="fullname"
                      validate={validateName}
                    />
                    {errors.fullname && touched.fullname && (
                      <div className="invalid-feedback d-block">
                        {errors.fullname}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Phone Number
                    </Label>
                    <Field
                      type='number'
                      className="form-control"
                      name="phone"
                      validate={validatePhoneNumber}
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
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      color="primary"
                      type="submit"
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
                        <IntlMessages id="user.register-button" />
                      </span>
                    </Button>
                  </div>

                </Form>
              )}
            </Formik>

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
  registerUserAction: registerUser,
})(Register);
