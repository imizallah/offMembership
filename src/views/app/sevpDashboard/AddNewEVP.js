import React,{useState} from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import { BsArrowLeft } from 'react-icons/bs'
import classNames from 'classnames';


const NewEVP = ({ history }) => {
    const [error, setError] = useState('');
    const initialValues = {
        name: ""
    }
    const [file, setFile] = useState('');
    const [isValid, updateIsValid] = useState(false);
    const [isInvalid, updateIsInvalid] = useState(false);
    const [fileName, updatefileName] = useState('');

    console.log(file)
    const validateUpload = (e) => {
        const res = e.target.value;
        const arr = res.split("\\");
        const filename = arr.slice(-1)[0];
        const filextension = filename.split(".");
        const filext = `.${filextension.slice(-1)[0]}`;
        const valid = [".jpg", ".png", ".jpeg", ".bmp"];
        if (valid.indexOf(filext.toLowerCase()) === -1) {
            updateIsInvalid(true);
            updateIsValid(false);
            setError('Invalid file uploaded')
        }
        else {
            setFile(e.target.files[0]);
            updateIsInvalid(false);
            updateIsValid(true);
            updatefileName(filename);
        }
    }



    const validateName = (value) => {
        let err;
        if (!value) {
            err = 'Please enter name';
        }
        return err;
    };
    return (
        <div >
            <div className='d-flex align-items-center justify-content-between'>
                <h2 className='mb-0'>
                    <BsArrowLeft onClick={() => { history.goBack() }} style={{ cursor: 'pointer' }} /> New EVP
                </h2>
                <Button color='primary' className='mx-2 mb-3' onClick={() => { history.push('/app/dashboards/add-new-evp') }}>Add New</Button>
            </div>
            <Separator />
            <Row className='mt-4 className= mt-5'>
                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <div className='my-3 '>
                            <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>New Sub EVP</h1>
                            <Separator className=''/>
                        </div>
                        <CardBody className='pt-0'>
                            <Formik initialValues={initialValues} onSubmit={(e) => { console.log(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Fullname</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="Fullname"
                                                 
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
                                                <Label className='mb-0 text-muted'>Phone Number</Label>
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
                                        <Row className='mb-3'>
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Start up fund</Label>
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
                                        <Row >
                                            <Colxx xl='4' sm='12'>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        render={() => (
                                                            <Row  >
                                                                <Colxx className="center">
                                                                    <div className="custom-btn-container text-center">
                                                                        <p className={`my-0 py-1 imgupload ok d-none ${classNames({
                                                                            'd-block': isValid
                                                                        })}`}>{fileName}</p>
                                                                        <p className={`my-0 py-1 imgupload stop d-none ${classNames({
                                                                            'd-block': isInvalid
                                                                        })}`}>{error}</p>
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{ fontSize: "12px" }}>Passport</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{ color: "#205072" }}>Photo</Label>
                                                                    </div>
                                                                </Colxx>
                                                            </Row>
                                                        )}

                                                        className="form-control border-0 border-0 w-100"
                                                        name="file"

                                                    // validate={validateMeetingtables}
                                                    />
                                                    {errors.file && touched.file && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.file}
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Colxx>
                                        </Row>

                                    </Form>)
                                }
                            </Formik >
                        </CardBody>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        

                    </Card>

                </Colxx>

            </Row>
            <Button color='primary' className='btn-lg font-family-m mx-2 mt-5 mb-3' >SUBMIT</Button>
        </div>
    )
}

export default NewEVP
