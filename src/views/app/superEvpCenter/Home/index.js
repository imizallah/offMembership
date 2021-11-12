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
// import { getCurrentUser } from 'helpers/Utils';
import { connect } from 'react-redux';
import { Colxx } from 'components/common/CustomBootstrap';
import { getMembership, getUserProfile } from 'redux/actions';


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

// const currentUser = getCurrentUser();

const EVPDashboard = (
    { history,
        getUserProfileAction,
        getMembershipAction,
        membershipDetails,
        userProfile
    }
) => {
    // const { messages } = intl;
    const [activeTab, setActiveTab] = useState('Advertiser');

    useEffect(() => {
        getMembershipAction()
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        getUserProfileAction()
        // eslint-disable-next-line
    }, [])


    return (

        <>
            <Row>
                <Colxx lg="12" xl="12" md='12' className='mb-4'>
                    {userProfile&&<IconCardsCarousel
                        history={history}
                        user={userProfile}
                    />}
                </Colxx>
            </Row>

            <Row className='mt-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>
                <Colxx xl='4'>
                    <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                        <div className=" d-flex flex-grow-1 min-width-zero">
                            <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">

                                    <CardSubtitle className="truncate mt-3  font-weight-bold">
                                        Register EmAds
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

                </Colxx>
                <Colxx xl='4'>
                    <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                        <div className=" d-flex flex-grow-1 min-width-zero">
                            <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">

                                    <CardSubtitle className="truncate mt-3 font-weight-bold">
                                        Register EmHire
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


                </Colxx>
                <Colxx xl='4'>
                    <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                        <div className=" d-flex flex-grow-1 min-width-zero">
                            <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">

                                    <CardSubtitle className="truncate mt-3  font-weight-bold">
                                        Register EmJobs
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

                </Colxx>




                {/* <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate  font-weight-bold">
                                    EVP
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('EVP')}
                                id="EVP"
                            />
                        </CardBody>
                    </div>
                </Card> */}





                {/* <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                        <CardBody className=" pl-0 align-self-center  d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">

                                <CardSubtitle className="truncate  font-weight-bold">
                                   Register Vendor
                                </CardSubtitle>

                            </div>
                            <CustomInput
                                type="checkbox"
                                name='membership'
                                onClick={() => setActiveTab('Vendor')}
                                id="vendor"
                            />
                        </CardBody>
                    </div>
                </Card> */}




            </Row>

            {
                membershipDetails && <TabContent activeTab={activeTab}>
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
                                />
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Customer">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <Customer
                                        membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'customer')}

                                    // data={item}
                                    // key={`qa_${item.key}`}
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
                                        membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'vendor')}

                                    // data={item}
                                    // key={`qa_${item.key}`}
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

const mapStateToProps = ({ membership, user }) => {
    const { membershipDetails } = membership;
    const { userProfile } = user;

    return { membershipDetails, userProfile };
};
export default connect(mapStateToProps, { getUserProfileAction: getUserProfile, getMembershipAction: getMembership })(EVPDashboard);
