import React, { useEffect, useState } from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { NotificationManager } from 'components/common/react-notifications';
import OtpInput from 'react-otp-input';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createUser, verifyUser,createCustomer } from 'redux/actions';




const SuperEVP = ({
    createUserAction,
    verifyUserAction,
    userError,
    membership,
    userMessage,
    createLoading,
    userData,
    membershipLoading,
    userOTP,
    createCustomerAction
}) => {

    useEffect(() => {
        if (userError) {
            NotificationManager.warning(userError, 'Registration Error', 3000, null, null, '');
        }
        if (userMessage) {
            NotificationManager.success(userMessage, 'Registration Successful', 3000, null, null, '');
        }
    }, [userError, userMessage]);

    const [otp, updateOtp] = useState('');
    const handleChange = (e) => updateOtp(e);

    const initialValues = {
        fullName: "",
        phoneNumber: ""
    }

    const registerValues = {
        
    }






    const validateName = (value) => {
        let err;
        if (!value) {
            err = 'Please enter fullname';
        }
        return err;
    };

    const validateNumber = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Number';
        }
        return err;
    };


    const handleUserCreation = (values) => {
        createUserAction(values);
    }

    const handleVerify = () => {
        verifyUserAction(otp);
    }


    const validateBVN = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your BVN';
        }
        return err;

    };

    const validateNIN = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your NIN';
        }
        return err;
    };

    const validateCountry = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Country';
        }
        return err;
    };

    const validateState = (value) => {
        let err;
        if (!value) {
            err = 'Please enter State';
        }
        return err;
    };
    const validateLocation = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your current location';
        }
        return err;
    };


    const handleMemberShipCreation = (values) => {
        
        const { _id ,phoneNumber} = userData
        /* eslint no-underscore-dangle:0 */
        const data = { ...values, userId: _id, phoneNumber,membershipId: membership[0]._id }
        console.log(data)
        createCustomerAction(data);
    }



    return (
        <>
            <Row className='mt-4'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Formik initialValues={initialValues} onSubmit={(e) => { handleUserCreation(e) }}>
                        {({ errors, touched }) => (
                            <Form encType="multipart/form-data" method="post" action="#">
                                <Card style={{ borderRadius: '20px' }}>
                                    <div className='my-3 '>
                                        <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>General Information</h1>
                                        <Separator />
                                    </div>
                                    <CardBody className='pt-0'>
                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Phone Number</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="phoneNumber"

                                                        validate={validateNumber}
                                                    />
                                                    {errors.number && touched.number && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.number}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Full Name</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="fullName"

                                                        validate={validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                    </CardBody>

                                </Card>
                                {
                                    !userOTP &&
                                    <Button style={{ fontSize: '12px' }} type='submit' className={`font-family-m font-weight-light mt-4 px-4 py-1  btn-lg mt-3 btn-shadow btn-multiple-state ${createLoading ? 'show-spinner' : ''
                                        }`}
                                        color='primary'>
                                        <span className="spinner d-inline-block">
                                            <span className="bounce1" />
                                            <span className="bounce2" />
                                            <span className="bounce3" />
                                        </span>
                                        <span className="label">
                                            Verfy
                                        </span>
                                    </Button>

                                }

                            </Form>

                        )}
                    </Formik >
                    {
                        userOTP &&
                        <div className='mt-3'>
                            <h5>Enter OTP sent </h5>
                            <OtpInput
                                inputStyle={{ margin: "0.2em", fontSize: "2.5em" }}
                                className='font-family-m '
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span>-</span>}
                            />
                            <Button
                                color="primary"
                                className={`font-family-m font-weight-light mt-2 px-4 py-1  btn-lg mt-3 btn-shadow btn-multiple-state ${createLoading ? 'show-spinner' : ''
                                    }`}
                                disabled={otp.length < 6}
                                onClick={handleVerify}
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

                    }





                </Colxx>

                <Colxx xxs="6" md='6' sm='12'>

                    <Formik initialValues={registerValues} onSubmit={(e) => { handleMemberShipCreation(e) }}>
                        {({ errors, touched }) => (
                            <Form encType="multipart/form-data" method="post" action="#">
                                <Card style={{ borderRadius: '20px' }}>
                                    <div className='my-3 '>
                                        <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>EmHire Membership</h1>
                                        <Separator />
                                    </div>
                                    <CardBody className='pt-0'>


                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>BVN</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="bvn"

                                                        validate={validateBVN}
                                                    />
                                                    {errors.bvn && touched.bvn && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.bvn}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>NIN</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="nin"


                                                        validate={validateNIN}
                                                    />
                                                    {errors.nin && touched.nin && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.nin}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Country</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="country"



                                                        validate={validateCountry}
                                                    />
                                                    {errors.country && touched.country && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.country}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>State</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="state"


                                                        validate={validateState}
                                                    />
                                                    {errors.state && touched.state && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.state}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Current Location</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="address"


                                                        validate={validateLocation}
                                                    />
                                                    {errors.address && touched.address && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.address}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                    </CardBody>
                                </Card>
                                <Button
                                type='submit'
                                    disabled={userData === null}
                                    style={{ fontSize: '12px' }} className={`font-family-m font-weight-light mt-2 px-4 py-1  btn-lg mt-3 btn-shadow btn-multiple-state ${membershipLoading ? 'show-spinner' : ''
                                        }`} color='primary'>
                                    <span className="spinner d-inline-block">
                                        <span className="bounce1" />
                                        <span className="bounce2" />
                                        <span className="bounce3" />
                                    </span>
                                    <span className="label">
                                        Register
                                    </span>
                                </Button>
                            </Form>)
                        }
                    </Formik >
                </Colxx>


            </Row >


        </>


    )
}
const mapStateToProps = ({ user }) => {
    const { loading, userError, userMessage, createLoading,membershipLoading, userData, userOTP } = user;
    return { loading, userError, userMessage, createLoading,membershipLoading, userData, userOTP };
};

export default connect(mapStateToProps, {
    createUserAction: createUser,
    verifyUserAction: verifyUser,
    createCustomerAction: createCustomer

})(SuperEVP);