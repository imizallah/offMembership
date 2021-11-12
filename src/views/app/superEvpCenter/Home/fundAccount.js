import React from 'react';
import {
    Row, FormGroup, Label, Button, Modal,
    ModalBody
} from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { fundAccount } from 'redux/actions';
// import { NotificationManager } from 'components/common/react-notifications';


const NewEVP = ({
    fundAccountRequest,
    createLoading, modal, setModal
    // ,SEVPError,
    // message
}) => {


    const initialValues = {
        email: '',
        amount: '',
    }

    // useEffect(() => {
    //     if (SEVPError) {
    //       NotificationManager.warning(SEVPError, 'Login Error', 3000, null, null, '');
    //     } else if (message) {
    //       NotificationManager.success(message, 'Login Successful', 3000, null, null, '');
    //     }
    //   }, [SEVPError, message]);


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

    const validateNumber = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Amount to be funded';
        }
        return err;
    }



    const handleAccountFunding = async (values) => {
        const { amount, email } = values
        const config = {
            amount,
            email,
            redirect_url: `http://${window.location.host}/app/account-funding/`,
            payment_options: 'card,mobilemoney,ussd',
            currency: 'NGN'

        }
        // console.log(config)
        fundAccountRequest(config);
    }

    return (
        <div >
            <Modal
                isOpen={modal}
                toggle={() => setModal(!modal)}
                className="modal-dialog-centered"
                style={{
                    boxShadow: 'unset'
                }}
            >
                <div className='my-3 '>
                    <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold text-center' style={{ fontSize: '20px' }}>Fund Account</h1>
                    <Separator className='' />
                </div>
                <ModalBody>
                    <Row className=''>
                        <Colxx md='12'>
                            <Formik initialValues={initialValues} onSubmit={handleAccountFunding}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">

                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Email</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 pl-2  w-100 border-muted custom-input"
                                                        name="email"
                                                        placeholder='Email to recieve receipt'
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
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Amount</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        type='number'
                                                        className="py-2  pl-2 w-100 border-muted custom-input"

                                                        name='amount'
                                                        placeholder="Amount"
                                                        validate={validateNumber}
                                                    />
                                                    {errors.amount && touched.amount && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.amount}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>

                                        <Button color='primary'
                                            className={`font-weight-light btn-lg font-family-m px-3 py-1 mt-2 mb-3 font-weight-light  my-3 btn-multiple-state ${createLoading ? 'show-spinner' : ''
                                                }`}
                                        >
                                            <span className="spinner d-inline-block">
                                                <span className="bounce1" />
                                                <span className="bounce2" />
                                                <span className="bounce3" />
                                            </span>
                                            <span className="label">
                                                {/* {`Pay ${funding}`} */}
                                                Pay
                                            </span>
                                        </Button>
                                    </Form>)
                                }
                            </Formik >
                        </Colxx>

                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}


const mapStateToProps = ({ payment }) => {
    const { loading, createLoading, message } = payment;
    return { createLoading, loading, message };
};
export default (connect(mapStateToProps, { fundAccountRequest: fundAccount }))(NewEVP)
