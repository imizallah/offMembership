import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import {
  Row, Card, CardBody, CardSubtitle,
  CustomInput
} from 'reactstrap';
import { connect } from 'react-redux';
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { createAdvert, getAdvert, getUserProfile, getUserTransaction } from 'redux/actions';
import { Colxx } from 'components/common/CustomBootstrap';
import AdvertFeed from './AdvertFeed';
import PostAdvert from './PostAdvert';
// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';
// import RecentOrders from 'containers/dashboards/RecentOrders';
// import ReactQuill from 'react-quill';
import Table from './ReactTableCards'
import IconCardsCarousel from './IconCardsCarousel';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import FundAccount from './fundAccount';

const DefaultDashboard = ({ history,
  createAdvertRequest,
  createAdvertLoading,
  getAdvertRequest,
  adverts,
  transactions,
  getUserTransactionAction,
  getUserProfileAction,
  userProfile,
  paymentURL,
  loading }
) => {

  useEffect(() => {
    console.log(paymentURL)
    if (paymentURL) {
        window.location.href = paymentURL
    }
    // eslint-disable-next-line
}, [paymentURL])

  useEffect(() => {
    getAdvertRequest()
    console.log(adverts);

    // eslint-disable-next-line
  }, [])
  // const { messages } = intl;
  const [advertFeed, updateAdvertFeed] = useState([]);

  const postAdvert = (message) => {
    console.log(message);
    const data = { message }
    createAdvertRequest(data);
  }

  useEffect(() => {
    updateAdvertFeed(adverts);
    // console.log(advertFeed)
    // eslint-disable-next-line
  }, [adverts])

  useEffect(() => {
    getUserTransactionAction()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getUserProfileAction()
    // eslint-disable-next-line
  }, [adverts])


  const [modal, setModal] = useState(false);


  return (
    loading ? <div className='loading' /> :
      <>
        {
          userProfile &&
          <>

            <Row>
              <Colxx lg="7" xl="7" md='6' className='mb-4'>
                <IconCardsCarousel
                  history={history}
                  userDetails={userProfile}
                  setModal={setModal}
                  modal={modal}
                />
                <Row className="mt-4">
                  <Colxx md="12" className="mb-4">
                    <PostAdvert
                      createAdvertLoading={createAdvertLoading}
                      postAdvert={postAdvert}
                    />
                  </Colxx>
                </Row>
              </Colxx>
              <Colxx lg="5" xl="5" md='6' className="mb-4">
                {loading ? <div className='loading' /> :
                  <>
                    {adverts && <AdvertFeed adverts={advertFeed.reverse()} />}
                  </>
                }

              </Colxx>
            </Row>
            <Row>
              <Colxx md='12'>
                <div className='mt-3 mb-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>

                  <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '200px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                      <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div className="min-width-zero">

                          <CardSubtitle className="truncate mb-1 font-weight-bold">
                            EmAds
                          </CardSubtitle>

                        </div>
                        {/* <NavLink to='/membership-registration'> */}
                        {userProfile.role === 'advertiser' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                          :
                          <CustomInput
                            type="checkbox"
                            onClick={() => { history.push('membership/Advertiser') }}
                            name='membership'
                            // onClick={() => setActiveTab('Advertiser')}
                            id="advertiser"

                          />
                        }

                        {/* </NavLink> */}
                      </CardBody>
                    </div>
                  </Card>





                  <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                      <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div className="min-width-zero">

                          <CardSubtitle className="truncate mb-1 font-weight-bold">
                            EmHire
                          </CardSubtitle>

                        </div>
                        {/* <NavLink to='/membership-registration'> */}
                        {userProfile.role === 'customer' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                          :
                          <CustomInput
                            type="checkbox"
                            onClick={() => { history.push('membership/Customer') }}
                            name='membership'
                            // onClick={() => setActiveTab('Customer')}
                            id="customer"
                          />}
                        {/* </NavLink> */}
                      </CardBody>
                    </div>
                  </Card>


                  <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                      <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div className="min-width-zero">

                          <CardSubtitle className="truncate mb-1 font-weight-bold">
                            EmJobs
                          </CardSubtitle>

                        </div>
                        {/* <NavLink to='/membership-registration'> */}
                        {userProfile.role === 'vendor' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                          :
                          <CustomInput
                            type="checkbox"
                            onClick={() => { history.push('membership/Vendor') }}
                            name='membership'
                            // onClick={() => setActiveTab('Vendor')}
                            id="vendor"
                          />}
                        {/* </NavLink> */}
                      </CardBody>
                    </div>
                  </Card>

                  <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>

                    <div className=" d-flex flex-grow-1 min-width-zero">
                      <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div className="min-width-zero">

                          <CardSubtitle className="truncate mb-1 font-weight-bold">
                            EVP
                          </CardSubtitle>

                        </div>
                        {/* <NavLink to='/membership-registration'> */}
                        {userProfile.role === 'evp' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                          :
                          <CustomInput
                            type="checkbox"
                            onClick={() => { history.push('membership/EVP') }}
                            name='membership'
                            // onClick={() => setActiveTab('EVP')}
                            id="EVP"
                          />}
                        {/* </NavLink> */}
                      </CardBody>
                    </div>
                  </Card>


                  <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


                    <div className=" d-flex flex-grow-1 min-width-zero">
                      <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div className="min-width-zero">

                          <CardSubtitle className="truncate mb-1 font-weight-bold">
                            Super EVP
                          </CardSubtitle>

                        </div>
                        {/* <NavLink to='/membership-registration'> */}
                        {userProfile.role === 'superevp' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                          :
                          <CustomInput
                            type="checkbox"
                            onClick={() => { history.push('membership/superEVP') }}
                            name='membership'
                            // onClick={() => setActiveTab('superEVP')}
                            id="superEVP"
                          />}
                        {/* </NavLink> */}
                      </CardBody>
                    </div>
                  </Card>

                </div>
              </Colxx>
            </Row>
            <Row>
              <Colxx md='12'>

                <Table
                  data={transactions}
                />
              </Colxx>
            </Row>


            <FundAccount
              setModal={setModal}
              modal={modal}
            />
          </>
        }
      </>
  );
};
const mapStateToProps = ({ advert, payment, user }) => {
  const { createAdvertLoading, error, message, adverts } = advert;
  const { transactions, paymentURL} = payment;
  const { userProfile, loading } = user;
  return { createAdvertLoading,paymentURL, error, loading, message, adverts, transactions, userProfile };
};
export default injectIntl(connect(mapStateToProps, { getUserProfileAction: getUserProfile, getUserTransactionAction: getUserTransaction, createAdvertRequest: createAdvert, getAdvertRequest: getAdvert })(DefaultDashboard))