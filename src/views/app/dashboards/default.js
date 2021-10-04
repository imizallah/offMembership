import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import {
  Row, Card, CardBody, CardSubtitle,
  CustomInput
} from 'reactstrap';
import { connect } from 'react-redux';
import { createAdvert, getAdvert } from 'redux/actions';
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

const DefaultDashboard = ({ history,
  createAdvertRequest,
  createAdvertLoading,
  getAdvertRequest,
  adverts,
  loading }
) => {


  useEffect(() => {
    getAdvertRequest()
    console.log(adverts);
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
    console.log(advertFeed)

  }, [adverts])


  return (

    <>

      <Row>
        <Colxx lg="7" xl="7" md='6' className='mb-4'>
          <IconCardsCarousel />
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
                      Advertiser
                    </CardSubtitle>

                  </div>
                  {/* <NavLink to='/membership-registration'> */}
                  <CustomInput
                    type="checkbox"
                    onClick={() => { history.push('membership') }}
                    name='membership'
                    // onClick={() => setActiveTab('Advertiser')}
                    id="advertiser"

                  />
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
                  <CustomInput
                    type="checkbox"
                    onClick={() => { history.push('/membership') }}
                    name='membership'
                    // onClick={() => setActiveTab('EVP')}
                    id="EVP"
                  />
                  {/* </NavLink> */}
                </CardBody>
              </div>
            </Card>


            <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">

                    <CardSubtitle className="truncate mb-1 font-weight-bold">
                      Customer
                    </CardSubtitle>

                  </div>
                  {/* <NavLink to='/membership-registration'> */}
                  <CustomInput
                    type="checkbox"
                    onClick={() => { history.push('/membership') }}
                    name='membership'
                    // onClick={() => setActiveTab('Customer')}
                    id="customer"
                  />
                  {/* </NavLink> */}
                </CardBody>
              </div>
            </Card>


            <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">

                    <CardSubtitle className="truncate mb-1 font-weight-bold">
                      Vendor
                    </CardSubtitle>

                  </div>
                  {/* <NavLink to='/membership-registration'> */}
                  <CustomInput
                    type="checkbox"
                    onClick={() => { history.push('/membership') }}
                    name='membership'
                    // onClick={() => setActiveTab('Vendor')}
                    id="vendor"
                  />
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
                  <CustomInput
                    type="checkbox"
                    onClick={() => { history.push('/membership') }}
                    name='membership'
                    // onClick={() => setActiveTab('superEVP')}
                    id="superEVP"
                  />
                  {/* </NavLink> */}
                </CardBody>
              </div>
            </Card>

          </div>
        </Colxx>
      </Row>
      <Row>
        <Colxx md='12'>
          <Table />
        </Colxx>
      </Row>
    </>
  );
};
const mapStateToProps = ({ advert }) => {
  const { loading, createAdvertLoading, error, message, adverts } = advert;
  return { createAdvertLoading, error, loading, message, adverts };
};
export default injectIntl(connect(mapStateToProps, { createAdvertRequest: createAdvert, getAdvertRequest: getAdvert })(DefaultDashboard))