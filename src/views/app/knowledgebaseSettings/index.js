import React, { useState } from 'react';
import { Card, Row, FormGroup, Label, CardBody, CardHeader, Collapse, Button } from 'reactstrap'
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createFAQ } from 'redux/actions';

const Knowledgebase = ({ createFAQRequest, createFAQloading }) => {
    const [toggleQuestion, setToggequestion] = useState(1);
    // const [question, updateQuestion]=useState('')
    // const [answer, updateAnswer]=useState('')
    const initialValues = {
        question: "",
        answer: ""
    }


    const validateQuestion = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Questioin';
        }
        return err;
    };


    const validateAnswer = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Answer';
        }
        return err;
    };

    const createFAQs = (values) => {
        createFAQRequest(values)
    }

    return (
        <>
            <h2 className=''>Knowledge Base</h2>
            <Separator />
            <Row className='mt-5'>
                <Colxx xl='6'>
                    <Formik initialValues={initialValues} onSubmit={createFAQs} >
                        {({ errors, touched }) => (
                            <Form encType="multipart/form-data" method="post" action="#">

                                <Card style={{ borderRadius: '20px' }}>
                                    <div className='my-3 '>
                                        <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>New Information</h1>
                                        <Separator />
                                    </div>
                                    <CardBody className='pt-0'>

                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'> Question</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        component='textarea'
                                                        required
                                                        style={{ resize: 'none' }}
                                                        cols='30'
                                                        row='30'
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="question"
                                                        // onChange={(e)=>updateQuestion(e)}
                                                        validate={validateQuestion}
                                                    />
                                                    {errors.question && touched.question && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.question}
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
                                                        required
                                                        style={{ resize: 'none' }}
                                                        // onChange={(e)=>updateAnswer(e)}
                                                        type='textarea'
                                                        cols='12'
                                                        rows='12'
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="answer"

                                                        validate={validateAnswer}
                                                    />
                                                    {errors.answer && touched.answer && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.answer}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>



                                    </CardBody>

                                </Card>
                                <Button
                                    type='submit'
                                    style={{ fontSize: '12px' }}
                                    className={` font-family-m font-weight-light my-5 px-5 py-1  btn-lgbtn-multiple-state ${createFAQloading ? 'show-spinner' : ''}`}
                                    color='primary' >
                                    <span className="spinner d-inline-block">
                                        <span className="bounce1" />
                                        <span className="bounce2" />
                                        <span className="bounce3" />
                                    </span>
                                    <span className="label">
                                        Add
                                    </span>
                                </Button>
                            </Form>

                        )
                        }
                    </Formik >
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

const mapStateToProps = ({ FAQ }) => {
    const { loading, createFAQloading, error, message } = FAQ;
    return { createFAQloading, error, loading, message };
};
export default connect(mapStateToProps, { createFAQRequest: createFAQ })(Knowledgebase)
