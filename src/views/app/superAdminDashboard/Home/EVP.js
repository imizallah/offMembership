import React from 'react';
import { Card, Row, FormGroup, Label, CardBody,Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';



const SuperEVP = () => {

    
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
            <Row className='mt-1'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>General Information</h1>
                            <Separator />
                        </div>
                        <CardBody className='pt-0'>
                            <Formik initialValues={initialValues} onSubmit={(e) => { console.log(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'> Phone Number</Label>
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
                                                <Label className='mb-0 text-muted'>Full Name</Label>
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

                           
                        </CardBody>

                    </Card>

                    <Button style={{fontSize:'12px'}} className='font-family-m font-weight-light mt-5 px-4 py-1  btn-lg' color='primary'>Verify</Button>
                </Colxx>

                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>EVP Membership</h1>
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
                                                <Label className='mb-0 text-muted'>EVP Category</Label>
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

                           
                        </CardBody>

                    </Card>
                    <Button style={{fontSize:'12px'}} className='font-family-m font-weight-light font-family-m mt-5 py-1 px-4 btn-lg' color='primary'>Register</Button>
                </Colxx>
                
                
            </Row>
          

        </>


    )
}
export default SuperEVP;