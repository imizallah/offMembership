import React, { useEffect, useState } from 'react';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Card, Row, FormGroup, Label, CardBody, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { getSettings, getMembership, saveEVPSettings, saveSEVPSettings, saveVendorSettings, saveCustomerSettings, saveAdvertiserSettings, saveAdvertsSettings } from 'redux/actions';



const Settings = ({
    getSettingsAction,
    saveEVPSettingsAction,
    saveSEVPSettingsAction,
    saveVendorSettingsAction,
    saveCustomerSettingsAction,
    saveAdvertiserSettingsAction,
    saveAdvertsSettingsAction,
    getMembershipAction,
    membershipDetails,
    loading,
    settings,
    createLoading,
}) => {


    useEffect(() => {
        getMembershipAction()
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        getSettingsAction()
        // eslint-disable-next-line
    }, [])


    console.log(membershipDetails);
    console.log(settings);
    const initialEVPValues = {
        level1: "",
        level2: "",
        level3: "",
        profit1: "",
        profit2: "",
        profit3: "",

    }
    const [level1Amount, updatelevel1Amount] = useState(settings.evp[0].amount)
    const [level1PercentageProfit, updatelevel1PercentageProfit] = useState(settings.evp[0].percentageProfit)
    const [level2Amount, updatelevel2Amount] = useState(settings.evp[1].amount)
    const [level2PercentageProfit, updatelevel2PercentageProfit] = useState(settings.evp[1].percentageProfit)
    const [level3Amount, updatelevel3Amount] = useState(settings.evp[2].amount)
    const [level3PercentageProfit, updatelevel3PercentageProfit] = useState(settings.evp[2].percentageProfit)
    const [superEVPAmount, updateSuperEVPAmount] = useState(settings.superevp.amount)
    const [superEVPProfit, updateSuperEVPProfit] = useState(settings.superevp.percentageProfit)
    const [vendorAmount, updateVendorAmount] = useState(settings.vendor.amount)
    const [vendorDuration, updateVendorDuration] = useState(settings.vendor.duration)
    const [customerAmount, updateCustomerAmount] = useState(settings.customer.amount)
    const [customerDuration, updateCustomerDuration] = useState(settings.customer.duration)
    const [advertiserAmount, updateAdvertiserAmount] = useState(settings.advertiser.amount)
    const [advertiserDuration, updateAdvertiserDuration] = useState(settings.advertiser.duration)
    const [advertsAmount, updateAdvertAmount] = useState(settings.advertAmount)



    const initialSEVPValues = {
        superEVPAmount: settings.superevp.startingCredit,
        superEVPProfit: settings.superevp.percentageProfit,
        // membershipId: memberRole.filter((el) => el.name.toLowerCase() === 'super evp')[0]._id,
    }

    const initialVendorValues = {
        vendorAmount: settings.vendor.amount,
        vendorDuration: settings.vendor.duration,
        /* eslint  no-underscore-dangle:0 */
        // membershipId: memberRole.filter((el) => el.name.toLowerCase() === 'vendor')[0]._id,
    }
    const initialCustomerValues = {
        customerAmount: settings.customer.amount,
        customerDuration: settings.customer.duration,
        /* eslint  no-underscore-dangle:0 */
        // membershipId: memberRole.filter((el) => el.name.toLowerCase() === 'customer')[0]._id,

    }

    const initialAdvertiserValues = {
        advertiserAmount: settings.advertiser.amount,
        advertiserDuration: settings.advertiser.duration,
        /* eslint  no-underscore-dangle:0 */
        // membershipId: memberRole.filter((el) => el.name.toLowerCase() === 'advertiser')[0]._id,
    }

    const initialAdvertsValues = {
        advertAmount: settings.advertAmount,
    }



    const validateName = (value) => {
        let err;
        if (!value) {
            err = 'Please enter value';
        }
        return err;
    };


    const handleEVPSettings = () => {
        /* eslint  no-underscore-dangle:0 */
        console.log(level1Amount)
        const membershipId = membershipDetails.filter((el) => el.name.toLowerCase() === 'evp')[0]._id
        saveEVPSettingsAction({
            membershipId,
            "categories": [
                { "name": "Level 1", "amount": level1Amount.length === 0 ? settings.evp[0].amount : level1Amount, "percentageProfit": level1PercentageProfit.length === 0 ? settings.evp[0].percentageProfit:level1PercentageProfit},
                { "name": "Level 2", "amount": level2Amount.length === 0 ? settings.evp[1].amount : level1Amount, "percentageProfit": level2PercentageProfit.length === 0 ? settings.evp[1].percentageProfit:level2PercentageProfit},
                { "name": "Level 3", "amount": level3Amount.length === 0 ? settings.evp[2].amount : level1Amount, "percentageProfit": level3PercentageProfit.length === 0 ? settings.evp[2].percentageProfit:level3PercentageProfit}
            ]
        })
    }

    const handleSEVPSettings = () => {
        /* eslint  no-underscore-dangle:0 */
        const membershipId = membershipDetails.filter((el) => el.name.toLowerCase() === 'super evp')[0]._id
        saveSEVPSettingsAction({ superEVPAmount, superEVPProfit, membershipId })
    }

    const handleVendorSettings = () => {
        const membershipId = membershipDetails.filter((el) => el.name.toLowerCase() === 'vendor')[0]._id
        saveVendorSettingsAction({ vendorAmount, vendorDuration, membershipId })

    }
    const handleCustomerSettings = () => {
        const membershipId = membershipDetails.filter((el) => el.name.toLowerCase() === 'customer')[0]._id
        saveCustomerSettingsAction({ customerAmount, customerDuration, membershipId })

    }
    const handleAdvertiserSettings = () => {
        const membershipId = membershipDetails.filter((el) => el.name.toLowerCase() === 'advertiser')[0]._id
        saveAdvertiserSettingsAction({ advertiserAmount, advertiserDuration, membershipId })

    }
    const handleAdvertSettings = () => {
        saveAdvertsSettingsAction(advertsAmount)
    }

    return (
        <>
            <h2 className=''>Settings</h2>
            <Separator />
            {loading || createLoading ? <div className='loading' /> :

                <Row className='mt-5'>
                    <Colxx xxs="6" md='6' sm='12'>
                        <Card style={{ borderRadius: '20px' }}>
                            <div className='my-3 '>
                                {' '}
                            </div>
                            <CardBody className='pt-0'>
                                <Formik initialValues={initialEVPValues} onSubmit={(e) => { handleEVPSettings(e) }}>
                                    {/* eslint no-unused-vars:0 */}
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">
                                            <Label className='font-weight-bold mb-0 '>EVP</Label>
                                            <p className='mb-0'>Level 1</p>
                                            <Row className='align-items-center' >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            defaultValue={settings.evp[0].amount}
                                                            onChange={(e) => { updatelevel1Amount(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="level1"
                                                            placeholder='Start up amount (level 1)'
                                                            required
                                                        />
                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            defaultValue={settings.evp[0].percentageProfit}
                                                            onChange={(e) => { updatelevel1PercentageProfit(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="profit1"
                                                            placeholder='Percentage profit'
                                                            required
                                                        />

                                                    </FormGroup>

                                                </Colxx>

                                            </Row>
                                            <p className='mb-0'>Level 2</p>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            defaultValue={settings.evp[1].amount}
                                                            onChange={(e) => { updatelevel2Amount(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="level2"
                                                            placeholder='Start up amount (level 2)'
                                                            required
                                                        />

                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            defaultValue={settings.evp[1].percentageProfit}
                                                            onChange={(e) => { updatelevel2PercentageProfit(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="profit2"
                                                            placeholder='Percentage profit'
                                                            required
                                                        />

                                                    </FormGroup>

                                                </Colxx>

                                            </Row>
                                            <p className='mb-0'>Level 3</p>
                                            <Row  >
                                                <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">

                                                        <Input
                                                            defaultValue={settings.evp[2].amount}
                                                            onChange={(e) => { updatelevel3Amount(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="level3"
                                                            placeholder='Start up amount (level 3)'
                                                            required
                                                        />

                                                    </FormGroup>

                                                </Colxx>
                                                <Colxx className='pl-1' xxs="6" md='6' sm='12'>

                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            defaultValue={settings.evp[2].percentageProfit}
                                                            onChange={(e) => { updatelevel3PercentageProfit(e.target.value) }}
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="profit3"
                                                            placeholder='Percentage profit'
                                                            required
                                                        />

                                                    </FormGroup>

                                                </Colxx>

                                            </Row>

                                            <div className='text-right'>
                                                <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >

                                <Formik initialValues={initialSEVPValues} onSubmit={(e) => { handleSEVPSettings(e) }}>
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">
                                            <div className='mt-2'>
                                                <Label className='font-weight-bold mb-0 '>Super EVP</Label>
                                                <Row  >
                                                    <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                        <FormGroup className="w-100 my-1">
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="superEVPAmount"
                                                                onChange={(e) => { updateSuperEVPAmount(e.target.value) }}
                                                                defaultValue={settings.superevp.startingCredit}
                                                                placeholder='Start up amount'

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
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                onChange={(e) => { updateSuperEVPProfit(e.target.value) }}
                                                                defaultValue={settings.superevp.percentageProfit}
                                                                name="superEVPProfit"
                                                                placeholder='Percentage profit'

                                                            />

                                                        </FormGroup>

                                                    </Colxx>

                                                </Row>
                                            </div>

                                            <div className='text-right'>
                                                <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >

                                <Formik initialValues={initialVendorValues} onSubmit={(e) => { handleVendorSettings(e) }}>
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">


                                            <div className='mt-2'>
                                                <Label className='font-weight-bold mb-0 '>EmJobs</Label>
                                                <Row  >
                                                    <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                        <FormGroup className="w-100 my-1">
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="vendorAmount"
                                                                onChange={(e) => { updateVendorAmount(e.target.value) }}

                                                                defaultValue={settings.vendor.amount}
                                                                placeholder='Start up amount '

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
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="vendorDuration"
                                                                onChange={(e) => { updateVendorDuration(e.target.value) }}

                                                                placeholder='Duration'
                                                                defaultValue={settings.vendor.duration}

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


                                            <div className='text-right'>
                                                <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >

                                <Formik initialValues={initialAdvertiserValues} onSubmit={(e) => { handleAdvertiserSettings(e) }}>
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">
                                            <div className='mt-2'>
                                                <Label className='font-weight-bold mb-0 '>EmAds</Label>
                                                <Row  >
                                                    <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                        <FormGroup className="w-100 my-1">
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="advertiserAmount"
                                                                onChange={(e) => { updateAdvertiserAmount(e.target.value) }}

                                                                placeholder='Start up amount '
                                                                defaultValue={settings.advertiser.amount}

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
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="advertiserDuration"
                                                                onChange={(e) => { updateAdvertiserDuration(e.target.value) }}

                                                                placeholder='Duration'
                                                                defaultValue={settings.advertiser.duration}

                                                            />
                                                            {errors.name && touched.name && (
                                                                <div className="invalid-feedback d-block">
                                                                    {errors.name}
                                                                </div>
                                                            )}
                                                        </FormGroup>

                                                    </Colxx>

                                                </Row>
                                                <div className='text-right'  >
                                                    <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                                </div>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >

                                <Formik initialValues={initialCustomerValues} onSubmit={(e) => { handleCustomerSettings(e) }}>
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">


                                            <div className='mt-2'>
                                                <Label className='font-weight-bold mb-0 '>EmHire</Label>
                                                <Row  >
                                                    <Colxx className='pr-1' xxs="6" md='6' sm='12'>

                                                        <FormGroup className="w-100 my-1">
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="customerAmount"
                                                                placeholder='Start up amount'
                                                                onChange={(e) => { updateCustomerAmount(e.target.value) }}

                                                                defaultValue={settings.customer.amount}


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
                                                            <Input
                                                                className="pl-1 py-3 w-100 border-muted custom-input"
                                                                name="customerDuration"
                                                                placeholder='Duration'
                                                                onChange={(e) => { updateCustomerDuration(e.target.value) }}
                                                                defaultValue={settings.customer.duration}


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



                                            <div className='text-right'>
                                                <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >

                                <Formik initialValues={initialAdvertsValues} onSubmit={(e) => { handleAdvertSettings(e) }}>
                                    {({ errors, touched }) => (
                                        <Form encType="multipart/form-data" method="post" action="#">

                                            <Row  >
                                                <Colxx className='mt-3' xxs="12" md='12' sm='12'>
                                                    <Label className='font-weight-bold mb-0 '>Adverts</Label>
                                                    <FormGroup className="w-100 my-1">
                                                        <Input
                                                            className="pl-1 py-3 w-100 border-muted custom-input"
                                                            name="advertAmount"
                                                            onChange={(e) => { updateAdvertAmount(e.target.value) }}

                                                            placeholder='Amount per advert'
                                                            required
                                                            defaultValue={settings.advertAmount}

                                                        />

                                                    </FormGroup>

                                                </Colxx>

                                            </Row>

                                            <div className='text-right'>
                                                <Button type='submit' className='mt-3 btn-lg py-1 px-4 font-family-m font-weight-light' color='primary'>SAVE</Button>
                                            </div>
                                        </Form>)
                                    }
                                </Formik >


                            </CardBody>

                        </Card>

                    </Colxx>

                </Row>
            }

        </>
    )

}

const mapStateToProps = ({ user, membership }) => {
    const { userProfile, createLoading, settings } = user;
    const { membershipDetails, loading } = membership
    return { userProfile, createLoading, settings, loading, membershipDetails };
};
export default connect(mapStateToProps, {
    getSettingsAction: getSettings,
    getMembershipAction: getMembership,
    saveEVPSettingsAction: saveEVPSettings,
    saveSEVPSettingsAction: saveSEVPSettings,
    saveVendorSettingsAction: saveVendorSettings,
    saveCustomerSettingsAction: saveCustomerSettings,
    saveAdvertiserSettingsAction: saveAdvertiserSettings,
    saveAdvertsSettingsAction: saveAdvertsSettings,
})(Settings)