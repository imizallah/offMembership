import React, { useState } from 'react';
import { Card, Row, FormGroup, Label, CardBody, CardHeader, Collapse, Button } from 'reactstrap'
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';


const Knowledgebase = () => {
    const [toggleQuestion, setToggequestion] = useState(1);
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
            <h2 className=''>Knowledge Base</h2>
            <Separator />
            <Row className='mt-5'>
                <Colxx xl='6'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>New Information</h1>
                            <Separator />
                        </div>
                        <CardBody className='pt-0'>
                            <Formik initialValues={initialValues} onSubmit={(e) => { console.log(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'> Question</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        component='textarea'
                                                        style={{ resize: 'none' }}
                                                        cols='30'
                                                        row='30'
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
                                                <Label className='mb-0 text-muted'>Answer</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        component='textarea'
                                                        style={{ resize: 'none' }}


                                                        type='textarea'
                                                        cols='12'
                                                        rows='12'
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
                    <Button style={{ fontSize: '12px' }} className='font-family-m mt-5 px-5 py-1  btn-lg' color='primary'>Add</Button>
                </Colxx>
                <Colxx xl='6'>
                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(1)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 1}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(2)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 2}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(3)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 3}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(4)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 4}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(5)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 5}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(6)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 6}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                </Colxx>
            </Row>
        </>
    )

}
export default Knowledgebase