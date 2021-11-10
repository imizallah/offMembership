import React from 'react';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { saveSettings } from 'redux/actions';



const Settings = ({
    saveSettingsAction
}) => {
    const initialValues = {
        advertAmount: "",
        advertiserAmount: "",
        advertiserDuration: "",
        customerAmount: "",
        customerDuration: "",
        level1: "",
        level2: "",
        level3: "",
        profit1: "",
        profit2: "",
        profit3: "",
        superEVPAmount: "",
        superEVPProfit: "",
        vendorAmount: "",
        vendorDuration: ""
    }

    const validateName = (value) => {
        let err;
        if (!value) {
            err = 'Please enter value';
        }
        return err;
    };

    const handleSettings = (values) => {
        saveSettingsAction(values)
    }

    return (
        <>
            <h2 className=''>Settings</h2>
            <Separator />
            <Row className='mt-5'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            {' '}
                        </div>
                        <CardBody className='pt-0'>
                            <Formik initialValues={initialValues} onSubmit={(e) => { handleSettings(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Label className='font-weight-bold mb-0 '>EVP</Label>
                                        <Row  >
                                            <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="level1"
                                                        placeholder='Start up amount (level 1)'
                                                        validate={validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>
                                            <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="profit1"
                                                        placeholder='Percentage profit'
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
                                        <Row  >
                                            <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="level2"
                                                        placeholder='Start up amount (level 2)'
                                                        validate={validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>
                                            <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="profit2"
                                                        placeholder='Percentage profit'
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
                                        <Row  >
                                            <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="level3"
                                                        placeholder='Start up amount (level 3)'
                                                        validate={validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>
                                            <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="profit3"
                                                        placeholder='Percentage profit'
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

                                        <div className='mt-4'>
                                            <Label className='font-weight-bold mb-0 '>Super EVP</Label>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="superEVPAmount"
                                                            placeholder='Start up amount '
                                                            validate={validateName}
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="superEVPProfit"
                                                            placeholder='Percentage profit'
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
                                        </div>

                                        <div className='mt-4'>
                                            <Label className='font-weight-bold mb-0 '>EmJobs</Label>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="vendorAmount"
                                                            placeholder='Start up amount '
                                                            validate={validateName}
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="vendorDuration"
                                                            placeholder='Duration'
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
                                        </div>

                                        <div className='mt-4'>
                                            <Label className='font-weight-bold mb-0 '>EmAds</Label>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="advertiserAmount"
                                                            placeholder='Start up amount '
                                                            validate={validateName}
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="advertiserDuration"
                                                            placeholder='Duration'
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
                                        </div>


                                        <div className='mt-4'>
                                            <Label className='font-weight-bold mb-0 '>EmHire</Label>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="customerAmount"
                                                            placeholder='Start up amount'
                                                            validate={validateName}
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Field
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="customerDuration"
                                                            placeholder='Duration'
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
                                        </div>


                                        <Row  >
                                            <Colxx className='mt-3' xxs="12" md='12' sm='12'>
                                                <Label className='font-weight-bold mb-0 '>Adverts</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="pl-1 py-3 w-100 border-muted custom-input"
                                                        name="advertAmount"
                                                        placeholder='Amount per advert'
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


                                        <Button className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE SETTINGS</Button>

                                    </Form>)
                                }
                            </Formik >


                        </CardBody>

                    </Card>

                </Colxx>

            </Row>
        </>
    )

}

const mapStateToProps = ({ user }) => {
    const { userProfile, loading } = user;
    return { userProfile, loading };
};
export default connect(mapStateToProps, { saveSettingsAction: saveSettings })(Settings)