import React, { useState } from 'react';
import { Card, Row, FormGroup, Label, CardBody,Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';


const SuperEVP = () => {
    const [volunteer, setvolunteer] = useState(false);
    
    const initialValues = {
        name: ""
    }
   



    const validateName = (value) => {
        let err;
        if (!value) {
            err = 'Please enter name';
        }
        return err;
    };

    return (
        <>
            <div>
                <h3 className='font-weight-bold w-75' style={{ fontSize: '16px' }}>You have selected the Vendor Membership Package. Membership is N1000 yearly</h3>
            </div>
            <Row className='mt-5'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>Membership Requirements</h1>
                            <Separator />
                        </div>
                        <CardBody className='pt-0'>
                            <Formik initialValues={initialValues} onSubmit={(e) => { console.log(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>BVN</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>NIN</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Country</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>State</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Current Location</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Speciality</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Contact Number</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Contact Email</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Organizational Type</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Registration Number</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="name"

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
                                    </Form>)
                                }
                            </Formik >

                            <div className='d-flex align-items-center mb-2 mt-3'>
                                <p className='mr-1 mb-0'>Want to be a volunteer ?</p>
                                <Switch
                                    className="custom-switch custom-switch-primary custom-switch-small mx-3"
                                    checked={volunteer}
                                    onChange={(primary) => setvolunteer(primary)}

                                />
                            </div>
                        </CardBody>

                    </Card>

                </Colxx>
                
            </Row>
            <Button className='mt-3 btn-lg' color='primary'>Pay</Button>

        </>


    )
}
export default SuperEVP;