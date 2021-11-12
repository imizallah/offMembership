import React, {useEffect} from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { updateCustomer } from 'redux/actions';



const Customer = ({loading,
    updateCustomerRequest,
    message,
    error,
    user,
    membership,
    settings,
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
         /* eslint  no-underscore-dangle:0 */
         membershipId: membership[0]._id,
         email:''

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

    
    const validateEmail=(value) => {
        const re = /\S+@\S+\.\S+/;
        let err;
        if (!value) {
            err = 'Please enter your current location';
        }
        if(!re.test(value)){
            err='Enter a valid email address'
        }
        return err;
    };

    const registerCustomer = (values) => {
        updateCustomerRequest(values);
        // console.log(values)
    }

    return (
        <>
            <div>
                <h3 className='font-weight-bold w-75' style={{ fontSize: '16px' }}>{`You have selected the EmHire Membership Package. Membership is N${settings.customer.amount} yearly`}</h3>
            </div>
            <Row className='mt-5'>
                <Colxx xxs="12" md='6' sm='12'>
                    <Formik initialValues={initialValues} onSubmit={registerCustomer}>
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

                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Email</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="email"
                                                       placeholder='Email addres to recieve receipt'
                                                       validate={validateEmail}

                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.email}
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
                                        {`Pay N${settings.customer.amount}`}
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
export default connect(mapStateToProps, { updateCustomerRequest: updateCustomer })(Customer)