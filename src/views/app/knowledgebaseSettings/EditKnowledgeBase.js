import React from 'react';
import { Card, Row, FormGroup, Label, CardBody,  Button } from 'reactstrap'
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Formik, Form,Field} from 'formik';
import { connect } from 'react-redux';
import { updateFAQ } from 'redux/actions';


const Knowledgebase = ({ faq, updateFAQRequest, editFAQLoading }) => {
const {question,answer}=faq
// const [editFAQ,setEditFAQ]=useState(faq)
 /* eslint prefer-const: 0 */
    let initialValues = {
        question,
        answer
    }
   console.log(initialValues)


    const validateQuestion = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Question';
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

    const handleUpdateFAQ = (values) => {
         /* eslint no-underscore-dangle: 0 */
        updateFAQRequest(values, faq._id)
    }



    return (
        <>

            <Formik initialValues={initialValues} onSubmit={handleUpdateFAQ} >
                {({ errors, touched }) => (
                    <Form encType="multipart/form-data" method="post" action="#">

                        <Card style={{ borderRadius: '20px' }}>
                            <div className='my-3 '>
                                <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>Edit Information</h1>
                                <Separator />
                            </div>
                            <CardBody className='pt-0'>

                                <Row  >
                                    <Colxx className='' xxs="12" md='12' sm='12'>
                                        <Label className='mb-0 text-muted'> Question</Label>
                                        <FormGroup className="w-100 my-1">
                                            <Field
                                                type='textarea'
                                                // defaultValue={faq.question}
                                                
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
                                                // defaultValue={faq.answer}
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
                            className={` font-family-m font-weight-light my-5 px-5 py-1  btn-lg btn-multiple-state ${editFAQLoading ? 'show-spinner' : ''}`}
                            color='primary' >
                            <span className="spinner d-inline-block">
                                <span className="bounce1" />
                                <span className="bounce2" />
                                <span className="bounce3" />
                            </span>
                            <span className="label">
                                Save
                            </span>
                        </Button>
                    </Form>

                )
                }
            </Formik >
        </>
    )

}

const mapStateToProps = ({ FAQ }) => {
    const { loading, editFAQLoading, error, message, faqs } = FAQ;
    return { editFAQLoading, error, loading, message, faqs };
};

export default connect(mapStateToProps, { updateFAQRequest: updateFAQ })(Knowledgebase)
