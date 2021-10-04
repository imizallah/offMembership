import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import OtpInput from 'react-otp-input';
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';

import { verifyPhoneToken } from 'redux/actions';
// import emChatlogo from '../../assets/logos/emChatlogo.png'




const VerifyPhoneToken = ({ history, message, loading, error, 
  verifyPhoneTokenAction 
}) => {
  const [otp, updateOtp] = useState('');
  const handleChange = (e) => updateOtp(e);
  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Registration Error', 3000, null, null, '');
    }
    if (message) {
      NotificationManager.success(message, 'Registration Successful', 3000, null, null, '');
    }
  }, [error, message]);

  const onVerifyPhoneToken = () => {
    if (!loading) {
      if (otp !== '') {
        console.log(history, otp)
        verifyPhoneTokenAction(otp, history);
      }
    }
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h3">Welcome to <span className='h2'>Taskr</span></p>
            <p className="white mb-0">
              Enter Token Sent to your Phone.
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single mb-0" />
              {/* <img src={emChatlogo} width='130px' alt='navbrand-logo' /> */}
            </NavLink>
            <CardTitle className="mb-4" />

            <OtpInput
              inputStyle={{ margin: "0.2em", fontSize: "2.5em" }}
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
            />
            <Button
              color="primary"
              className={`mt-3 btn-authorization br-0 btn-shadow btn-multiple-state ${loading ? 'show-spinner' : ''
                }`}
              size="lg"
              disabled={otp.length < 6}
              onClick={onVerifyPhoneToken}
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">
                Verify
              </span>
            </Button>
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
  verifyPhoneTokenAction: verifyPhoneToken,
})(VerifyPhoneToken);
