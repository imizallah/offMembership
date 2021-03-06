import React, { useState, useEffect } from 'react';
// import { injectIntl } from 'react-intl';
import {
    Card,
    CardBody,
    CardSubtitle,
    CustomInput,
    TabContent,
    TabPane,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { getActivities, getAdvert, getMembership } from 'redux/actions';
import { Colxx } from 'components/common/CustomBootstrap';


// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';

import IconCardsCarousel from './IconCardsCarousel';
import Advertiser from './Advertiser'
import Customer from './Customer'
import Vendor from './Vendor'
import SuperEVP from './SuperEVP'
import EVP from './EVP'
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

const EVPDashboard = (
    {
        getAnalytics,
        getMembershipAction,
        adverts,
        getAdvertRequest,
        membershipDetails,
        activities
    }
    // {history}
) => {
    useEffect(() => {
        getAdvertRequest()
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        getAnalytics()
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        getMembershipAction()
        // eslint-disable-next-line
    }, [])
    // const { messages } = intl;
    const [activeTab, setActiveTab] = useState('Advertiser');


    return (

        <>
            <Row>
                <Colxx lg="12" xl="12" md='12' className='mb-4'>
                    {activities ? <IconCardsCarousel activities={activities} advertsCount={adverts.length} /> : null}

                </Colxx>
            </Row>

            <div className='mt-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>

                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '216px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate mt-3  font-weight-bold">
                                    Add EmAds
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                className='mt-3'
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('Advertiser')}
                                checked={activeTab === 'Advertiser'}
                                id="advertiser"

                            />
                        </CardBody>
                    </div>
                </Card>


                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '216px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                    Add EmHire
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                className='mt-3'
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('Customer')}
                                checked={activeTab === 'Customer'}

                                id="customer"
                            />
                        </CardBody>
                    </div>
                </Card>



                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '216px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate mt-3  font-weight-bold">
                                    Add EmJobs
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                className='mt-3'
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('Vendor')}
                                checked={activeTab === 'Vendor'}

                                id="vendor"
                            />
                        </CardBody>
                    </div>
                </Card>


                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '216px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                    Add EVP
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                className='mt-3'
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('EVP')}
                                checked={activeTab === 'EVP'}

                                id="EVP"
                            />
                        </CardBody>
                    </div>
                </Card>





                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '216px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                    Add Super EVP
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                className='mt-3'
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('superEVP')}
                                checked={activeTab === 'superEVP'}
                                id="superEVP"
                            />
                        </CardBody>
                    </div>
                </Card>
            </div>

            {
                membershipDetails &&
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="Advertiser">
                        <Row>
                            <Colxx sm="12">
                                <Advertiser
                                    membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'advertiser')}

                                // event={singleEvent} 
                                />
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="EVP">
                        <Row>
                            <Colxx sm="12">
                                <EVP
                                // id={eventId}
                                // event={singleEvent}
                                // addParticipants={addParticipantAction}
                                membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'evp')}

                                />
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Customer">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <Customer
                                    // data={item}
                                    // key={`qa_${item.key}`}
                                    membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'customer')}
                                    />

                                </CardBody>
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Vendor">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <Vendor
                                    // data={item}
                                    // key={`qa_${item.key}`}
                                    membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'vendor')}

                                    />

                                </CardBody>
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="superEVP">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <SuperEVP
                                    // data={item}
                                    // key={`qa_${item.key}`}
                                    membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'super evp')}
                                    />

                                </CardBody>
                            </Colxx>
                        </Row>
                    </TabPane>
                </TabContent>
            }
        </>
    );
};
const mapStateToProps = ({ analytics, advert, membership }) => {
    const { loading, error, message, activities } = analytics;
    const { membershipDetails } = membership;
    const { adverts } = advert;
    return { membershipDetails, error, loading, message, activities, adverts };
};
export default connect(mapStateToProps, { getMembershipAction: getMembership, getAnalytics: getActivities, getAdvertRequest: getAdvert })(EVPDashboard);
