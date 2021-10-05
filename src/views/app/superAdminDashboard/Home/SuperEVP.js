import React, { useState, useRef } from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import DropzoneExample from 'containers/forms/DropzoneExample'
import classNames from 'classnames';


const SuperEVP = () => {
    const [error, setError] = useState('');

    const dropzone = useRef();
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
        <>
            <Row className='mt-1'>
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
                                                <Label className='mb-0 text-muted'>Organization Name</Label>
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
                        </CardBody>

                    </Card>

                </Colxx>
                <Colxx xxs="6" md='6' sm='12'>
                    <Card style={{ borderRadius: '20px' }}>
                        <CardBody>
                            <Formik initialValues={initialValues} onSubmit={(e) => { console.log(e) }}>
                                {({ errors, touched }) => (
                                    <Form encType="multipart/form-data" method="post" action="#">
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Registration Document</Label>
                                                    <DropzoneExample ref={dropzone} />
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
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Director 1 ID card</Label>
                                                    <DropzoneExample ref={dropzone} />
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
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Director 2 ID card</Label>
                                                    <DropzoneExample ref={dropzone} />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>

                                        <Row className='mt-3'>
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
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{fontSize:"12px"}}>Logo</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{color:"#205072"}}>Your Logo</Label>
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
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{fontSize:"12px"}}>Passport</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{color:"#205072"}}>Director 1</Label>
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
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{fontSize:"12px"}}>Passport</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{color:"#205072"}}>Director 2</Label>
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
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        

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
export default SuperEVP;