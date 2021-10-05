import React, { useState, useEffect } from 'react';
import { Card, Row, FormGroup, Label, CardBody, CardHeader, Collapse, Button } from 'reactstrap'
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createFAQ, getFAQ, deleteFAQ } from 'redux/actions';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import EditFAQ from './EditKnowledgeBase';

const Knowledgebase = ({ createFAQRequest, getFAQRequest, createFAQLoading, faqs, deleteFAQRequest }) => {
    console.log(createFAQLoading)
    const [toggleQuestion, setToggequestion] = useState(0);
    const [knowledge, updateKnowledge] = useState([]);
    const [editing, updateEditing] = useState(false);
    const [editFAQ, setEditFAQ] = useState('');
    // const [question, updateQuestion]=useState('')
    // const [answer, updateAnswer]=useState('')
    const initialValues = {
        question: "",
        answer: ""
    }


    const handleEditing = (faq) => {
        /* eslint no-unused-vars :0 */
        if (editing) {
            console.log(editing)
            updateEditing(false)
            setEditFAQ(faq)
            // updateEditing(true)

        }
        if (!editing) {
            updateEditing(true)
            setEditFAQ(faq)

        }
        // setEditFAQ(faq)
        // updateEditing(true)

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

    useEffect(() => {
        getFAQRequest()
    }, [])

    useEffect(() => {
        updateKnowledge(faqs.reverse())
    }, [faqs])

    return (
        <>
            <h2 className=''>Knowledge Base</h2>
            <Separator />
            <Row className='mt-5'>
                <Colxx xl='6'>
                    {editing ? <EditFAQ
                        faq={editFAQ}
                    /> :

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
                                        className={` font-family-m font-weight-light my-5 px-5 py-1  btn-lg btn-multiple-state ${createFAQLoading ? 'show-spinner' : ''}`}
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
                    }

                </Colxx>
                <Colxx xl='6'>

                    {knowledge.map((el, i) =>
                        /* eslint no-underscore-dangle: 0 */
                        <Card className='mb-3 shadow' key={el._id}>
                            <CardHeader className='py-3' onClick={() => setToggequestion(i)}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span className="font-weight-bold">{el.question}</span>
                                    </div>
                                    <div className='text-right d-flex top-right'>
                                        <BiEdit size='16px' color='' className='mr-1' style={{ cursor: 'pointer' }}
                                            onClick={() => { handleEditing(el) }}
                                        />
                                        {/* eslint no-underscore-dangle: 0 */}
                                        <MdDelete size='16px' color='#dc3545' style={{ cursor: 'pointer' }} onClick={() => { deleteFAQRequest(el._id) }} />
                                    </div>
                                </div>

                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === i}>
                                <CardBody className='shadow'>
                                    {el.answer}
                                </CardBody>
                            </Collapse>
                        </Card>

                    )}



                </Colxx>
            </Row>
        </>
    )

}

const mapStateToProps = ({ FAQ }) => {
    const { loading, createFAQLoading, error, message, faqs } = FAQ;
    return { createFAQLoading, error, loading, message, faqs };
};
export default connect(mapStateToProps, { createFAQRequest: createFAQ, deleteFAQRequest: deleteFAQ, getFAQRequest: getFAQ, })(Knowledgebase)
