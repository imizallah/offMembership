import React, { useState, useRef } from 'react';
import { Card, Row, FormGroup, Label, CardBody, Button } from 'reactstrap'
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import DropzoneExample from 'containers/forms/DropzoneExample'
import classNames from 'classnames';
import { connect } from 'react-redux';
import { updateSEVP } from 'redux/actions';





const SuperEVP = ({
    loading ,
    updateSEVPRequest,
    user,
    membership,
    settings
 }) => {

    console.log(user);
    
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');


    const dropzoneRegDoc = useRef();
    const dropzoneDir1Passport = useRef();
    const dropzoneDir2Passport = useRef();

    const initialValues = {
        nin: "",
        bvn: "",
        country: "",
        state: "",
        address: "",
        email: "",
        organization: "",
        contactNumber: "",
        organizationType: "",
        regNum: "",
         /* eslint  no-underscore-dangle:0 */
         membershipId: membership._id
    }


    const validateBVN = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your BVN';
        }
        return err;

    };

    const validateNIN = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your NIN';
        }
        return err;
    };

    const validateCountry = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Country';
        }
        return err;
    };

    const validateState = (value) => {
        let err;
        if (!value) {
            err = 'Please enter State';
        }
        return err;
    };
    const validateLocation = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your current location';
        }
        return err;
    };

    const validateOrganization = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your Organiation';
        }
        return err;
    };


    const validateOrganizationType = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your Organiation Type';
        }
        return err;
    };

    const validateContactNumber = (value) => {
        let err;
        if (!value) {
            err = 'Please enter Contact Number';
        }
        return err;
    };

    const validateEmail = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your Email';
        }
        return err;
    };


    const validateRegNum = (value) => {
        let err;
        if (!value) {
            err = 'Please enter your Registration Number';
        }
        return err;
    };



    const [logo, setlogo] = useState('');
    const [isValid, updateIsValid] = useState(false);
    const [isInvalid, updateIsInvalid] = useState(false);
    const [logoName, updateLogoName] = useState('');


    const [passport1, setPassport1] = useState('');
    const [isPassport1Valid, updateIsPassport1Valid] = useState(false);
    const [isPassport1Invalid, updateIsPassport1Invalid] = useState(false);
    const [passport1Name, updatePassport1Name] = useState('');


    const [passport2, setPassport2] = useState('');
    const [isPassport2Valid, updateIsPassport2Valid] = useState(false);
    const [isPassport2Invalid, updateIsPassport2Invalid] = useState(false);
    const [passport2Name, updatePassport2Name] = useState('');



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
            setlogo(e.target.files[0]);
            updateIsInvalid(false);
            updateIsValid(true);
            updateLogoName(filename);
        }
    }

    const validateUpload1 = (e) => {
        const res = e.target.value;
        const arr = res.split("\\");
        const filename = arr.slice(-1)[0];
        const filextension = filename.split(".");
        const filext = `.${filextension.slice(-1)[0]}`;
        const valid = [".jpg", ".png", ".jpeg", ".bmp"];
        if (valid.indexOf(filext.toLowerCase()) === -1) {
            updateIsPassport1Invalid(true);
            updateIsPassport1Valid(false);
            setError1('Invalid file uploaded')
        }
        else {
            setPassport1(e.target.files[0]);
            updateIsPassport1Invalid(false);
            updateIsPassport1Valid(true);
            updatePassport1Name(filename);
        }
    }



    const validateUpload2 = (e) => {
        const res = e.target.value;
        const arr = res.split("\\");
        const filename = arr.slice(-1)[0];
        const filextension = filename.split(".");
        const filext = `.${filextension.slice(-1)[0]}`;
        const valid = [".jpg", ".png", ".jpeg", ".bmp"];
        if (valid.indexOf(filext.toLowerCase()) === -1) {
            updateIsPassport2Invalid(true);
            updateIsPassport2Valid(false);
            setError2('Invalid file uploaded')
        }
        else {
            setPassport2(e.target.files[0]);
            updateIsPassport2Invalid(false);
            updateIsPassport2Valid(true);
            updatePassport2Name(filename);
        }
    }


    const cloudinaryUpload = async (file) => {
        const fd1 = new FormData()
        fd1.append("file", file)
        fd1.append("upload_preset", "fadeniyi")
        const response = await Axios.post("https://api.cloudinary.com/v1_1/fadeniyi/image/upload", fd1);
        console.log(response.data.url);
        return response.data.url;
    }

    const handleSEVP = async (values) => {
        const regDocUrl = await cloudinaryUpload(dropzoneRegDoc.current.myDropzone.files[0]);
        const logoUrl = await cloudinaryUpload(logo);
        const dirId1Url = await cloudinaryUpload(dropzoneDir1Passport.current.myDropzone.files[0]);
        const dirId2Url = await cloudinaryUpload(dropzoneDir2Passport.current.myDropzone.files[0]);
        const passport1Url = await cloudinaryUpload(passport1);
        const passportUrl2 = await cloudinaryUpload(passport2);

        console.log(values)
        const data = {
            ...values,
            regDoc: regDocUrl,
            dir1Id: dirId1Url,
            dir2Id: dirId2Url,
            logo: logoUrl,
            dir1Passport: passport1Url,
            dir2Passport: passportUrl2
        }
       updateSEVPRequest(data);
    }

    return (
        <>
            <div>
                <h3 className='font-weight-bold w-75' style={{ fontSize: '16px' }}>You have selected the Super EVP. Your required start up capital is N{settings.superevp.startingCredit} </h3>
                <h3 className='font-weight-bold w-50' style={{ fontSize: '16px' }}>You will enjoy a profit Margin of {settings.superevp.percentageProfit}%.</h3>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSEVP}>
                {({ errors, touched }) => (
                    <Form encType="multipart/form-data" method="post" action="#">
                        <Row className='mt-5'>
                            <Colxx xxs="12" md='6' sm='12'>
                                <Card style={{ borderRadius: '20px' }}>
                                    <div className='my-3 '>
                                        <h1 className='mb-0 pl-4 pb-0 font-family-m font-weight-bold' style={{ fontSize: '20px' }}>Membership Requirements</h1>
                                        <Separator />
                                    </div>
                                    <CardBody className='pt-0'>

                                        <Row  >
                                            <Colxx className='' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>BVN</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="bvn"

                                                        validate={validateBVN}
                                                    />
                                                    {errors.bvn && touched.bvn && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.bvn}
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
                                                        name="nin"

                                                        validate={validateNIN}
                                                    />
                                                    {errors.nin && touched.nin && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.nin}
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
                                                        name="country"

                                                        validate={validateCountry}
                                                    />
                                                    {errors.country && touched.country && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.country}
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
                                                        name="state"

                                                        validate={validateState}
                                                    />
                                                    {errors.state && touched.state && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.state}
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
                                                        name="address"

                                                        validate={validateLocation}
                                                    />
                                                    {errors.address && touched.address && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.address}
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
                                                        name="organization"

                                                        validate={validateOrganization}
                                                    />
                                                    {errors.organization && touched.organization && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.organization}
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
                                                        name="contactNumber"

                                                        validate={validateContactNumber}
                                                    />
                                                    {errors.contactNumber && touched.contactNumber && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.contactNumber}
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
                                                        type='email'
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="email"

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
                                                <Label className='mb-0 text-muted'>Organizational Type</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="organizationType"

                                                        validate={validateOrganizationType}
                                                    />
                                                    {errors.organizationType && touched.organizationType && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.organizationType}
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
                                                        name="regNum"

                                                        validate={validateRegNum}
                                                    />
                                                    {errors.regNum && touched.regNum && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.regNum}
                                                        </div>
                                                    )}
                                                </FormGroup>

                                            </Colxx>

                                        </Row>

                                    </CardBody>

                                </Card>

                            </Colxx>
                            <Colxx xxs="6" md='6' sm='12'>
                                <Card style={{ borderRadius: '20px' }}>
                                    <CardBody>

                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Registration Document</Label>
                                                    <DropzoneExample ref={dropzoneRegDoc} />

                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Director 1 ID card</Label>
                                                    <DropzoneExample ref={dropzoneDir1Passport} />

                                                </FormGroup>

                                            </Colxx>

                                        </Row>
                                        <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <FormGroup className="w-100 my-1">
                                                    <Label className='mb-0 text-muted'>Director 2 ID card</Label>
                                                    <DropzoneExample ref={dropzoneDir2Passport} />

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
                                                                        })}`}>{logoName}</p>
                                                                        <p className={`my-0 py-1 imgupload stop d-none ${classNames({
                                                                            'd-block': isInvalid
                                                                        })}`}>{error}</p>
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{ fontSize: "12px" }}>Logo</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{ color: "#205072" }}>Your Logo</Label>
                                                                    </div>
                                                                </Colxx>
                                                            </Row>
                                                        )}

                                                        className="form-control border-0 border-0 w-100"
                                                        name="file"

                                                    // validate={validateMeetingtables}
                                                    />

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
                                                                            'd-block': isPassport1Valid
                                                                        })}`}>{passport1Name}</p>
                                                                        <p className={`my-0 py-1 imgupload stop d-none ${classNames({
                                                                            'd-block': isPassport1Invalid
                                                                        })}`}>{error1}</p>
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{ fontSize: "12px" }}>Passport</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload1(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{ color: "#205072" }}>Director 1</Label>
                                                                    </div>
                                                                </Colxx>
                                                            </Row>
                                                        )}

                                                        className="form-control border-0 border-0 w-100"
                                                        name="file"

                                                    // validate={validateMeetingtables}
                                                    />

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
                                                                            'd-block': isPassport2Valid
                                                                        })}`}>{passport2Name}</p>
                                                                        <p className={`my-0 py-1 imgupload stop d-none ${classNames({
                                                                            'd-block': isPassport2Invalid
                                                                        })}`}>{error2}</p>
                                                                        <Button type="button" id="btnup" className="btn custom-btn-primary font-family-m btn-lg" style={{ fontSize: "12px" }}>Passport</Button>
                                                                        <input type="file" name="file" id="fileup" onChange={(e) => { validateUpload2(e) }} />
                                                                        <Label className='ml-2 mt-2 text-center' style={{ color: "#205072" }}>Director 2</Label>
                                                                    </div>
                                                                </Colxx>
                                                            </Row>
                                                        )}

                                                        className="form-control border-0 border-0 w-100"
                                                        name="file"

                                                    // validate={validateMeetingtables}
                                                    />

                                                </FormGroup>
                                            </Colxx>
                                            <Row  >
                                            <Colxx className='mt-2' xxs="12" md='12' sm='12'>
                                                <Label className='mb-0 text-muted'>Email</Label>
                                                <FormGroup className="w-100 my-1">
                                                    <Field
                                                        className="py-2 w-100 border-muted custom-input"
                                                        name="email"
                                                       placeholder='Email addres to recieve receipt'
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
                                        </Row>
                                        <br />
                                        <br />
                                        
                                    </CardBody>
                                </Card>
                                <Button
                                    color='primary'
                                  
                                    disabled={logo===''||passport1===''||passport2===''||dropzoneRegDoc.current.myDropzone.files.length===0||dropzoneDir1Passport.current.myDropzone.files.length===0||dropzoneDir2Passport.current.myDropzone.files.length===0}
                                    className={`mt-4 mx-4 btn-lg font-weight-light py-1 font-weight-light  my-3 btn-multiple-state  ${loading ? 'show-spinner' : ''
                                }`}
                                    type='submit'
                                >
                                    <span className="spinner d-inline-block">
                                        <span className="bounce1" />
                                        <span className="bounce2" />
                                        <span className="bounce3" />
                                    </span>
                                    <span className="label">
                                        Pay N{settings.superevp.startingCredit}
                                    </span>
                                </Button>
                            </Colxx>
                        </Row>
                    </Form>)
                }
            </Formik >

        </>


    )
}
const mapStateToProps = ({ membership }) => {
    const { loading, message, error } = membership;
    return { loading, message, error };
};
export default connect(mapStateToProps, { updateSEVPRequest: updateSEVP })(SuperEVP);