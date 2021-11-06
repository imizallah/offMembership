import React, {useEffect} from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { updateAdvertiser } from 'redux/actions';



const Advertiser = ({loading,
    updateAdvertiserRequest,
    message,
    user,
    error
}) => {


    useEffect(() => {
        if (error) {
          NotificationManager.warning(error, 'Update Membership', 3000, null, null, '');
        } else if (message) {
          NotificationManager.success(message, 'Update Membership', 3000, null, null, '');
        }
      }, [error, message]);

    const initialValues = {
        bvn: user.bvn,
        nin: user.nin,
        country: user.country,
        state: user.state,
        address: user.address,

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


    const registerAdvertiser = (values) => {
        updateAdvertiserRequest(values);
        // console.log(values)
    }

    return (
        <>
            <div>
                <h3 className='font-weight-bold w-75' style={{ fontSize: '16px' }}>You have selected the EmAds Membership Package. Membership is N1000 yearly</h3>
            </div>
            <Row className='mt-5'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Formik initialValues={initialValues} onSubmit={registerAdvertiser}>
                        {({ errors, touched }) => (
                            <Form encType="multipart/form-data"  >
                                <Card style={{ borderRadius: '20px' }}>
                                    <div className='my-3 '>
                                        <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>Membership Requirements</h1>
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
                                                        defaultValue={user.bvn}
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
                                                        defaultValue={user.nin}

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
                                                        defaultValue={user.country}

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
                                                        defaultValue={user.state}

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
                                                        defaultValue={user.location}

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
                                    type='submit' color='primary'
                                    className={`mt-3 btn-lg font-weight-light py-1 font-weight-light  my-3 btn-multiple-state ${loading ? 'show-spinner' : ''
                                        }`}
                                >
                                    <span className="spinner d-inline-block">
                                        <span className="bounce1" />
                                        <span className="bounce2" />
                                        <span className="bounce3" />
                                    </span>
                                    <span className="label">
                                        Pay N1000
                                    </span>
                                </Button>
                            </Form>)
                        }
                    </Formik >
                </Colxx>

            </Row>

        </>


    )
}
const mapStateToProps = ({ membership }) => {
    const { loading, message, error } = membership;
    return { loading, message, error };
};
export default connect(mapStateToProps, { updateAdvertiserRequest: updateAdvertiser })(Advertiser)