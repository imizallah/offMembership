
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
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
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { getCurrentUser } from 'helpers/Utils';
import { getMembership } from 'redux/actions';
import Advertiser from './Advertiser'
import Customer from './Customer'
import Vendor from './Vendor'
import SuperEVP from './SuperEVP'
import EVP from './EVP'



const Membership = ({ match: { params: { role } }, getMembershipAction, membershipDetails, loading,paymentURL }) => {
  const [activeTab, setActiveTab] = useState(role);
  const currentUser = getCurrentUser();

  useEffect(() => {
    console.log(paymentURL)
    if (paymentURL) {
        window.location.href = paymentURL
    }
    // eslint-disable-next-line
}, [paymentURL])
  useEffect(() => {
    getMembershipAction()
    // eslint-disable-next-line
  }, [])
  return (

    loading ?
      <div className='loading' />
      :
      
        membershipDetails && <>
        <h2 className=''>Register Membership</h2>
        <Separator />
        <div className='mt-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>

          <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '210px', height: '60px' }}>


            <div className=" d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">

                  <CardSubtitle className="truncate mb-1 font-weight-bold">
                    EmAds
                  </CardSubtitle>

                </div>
                {currentUser.role === 'advertiser' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' /> :

                  <CustomInput
                    type="checkbox"
                    name='membership'
                    onClick={() => setActiveTab('Advertiser')}
                    checked={activeTab === 'Advertiser'}
                    id="advertiser"
                    disabled={currentUser.role === 'advertiser'}

                  />}
              </CardBody>
            </div>
          </Card>


          <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '210px', height: '60px' }}>


            <div className=" d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">

                  <CardSubtitle className="truncate mb-1 font-weight-bold">
                    EVP
                  </CardSubtitle>

                </div>
                {currentUser.role === 'evp' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                  :
                  <CustomInput
                    type="checkbox"
                    name='membership'
                    onClick={() => setActiveTab('EVP')}
                    checked={activeTab === 'EVP'}
                    disabled={currentUser.role === 'evp'}

                    id="EVP"
                  />}
              </CardBody>
            </div>
          </Card>


          <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '210px', height: '60px' }}>


            <div className=" d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">

                  <CardSubtitle className="truncate mb-1 font-weight-bold">
                    EmHire
                  </CardSubtitle>

                </div>
                {currentUser.role === 'customer' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                  :
                  <CustomInput
                    type="checkbox"
                    name='membership'
                    onClick={() => setActiveTab('Customer')}
                    checked={activeTab === 'Customer'}
                    disabled={currentUser.role === 'customer'}

                    id="customer"
                  />}
              </CardBody>
            </div>
          </Card>


          <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '210px', height: '60px' }}>


            <div className=" d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">

                  <CardSubtitle className="truncate mb-1 font-weight-bold">
                    EmJobs
                  </CardSubtitle>

                </div>
                {currentUser.role === 'vendor' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                  :
                  <CustomInput
                    type="checkbox"
                    name='membership'
                    onClick={() => setActiveTab('Vendor')}
                    checked={activeTab === 'Vendor'}
                    disabled={currentUser.role === 'vendor'}


                  />}
              </CardBody>
            </div>
          </Card>


          <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '210px', height: '60px' }}>


            <div className=" d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">

                  <CardSubtitle className="truncate mb-1 font-weight-bold">
                    Super EVP
                  </CardSubtitle>

                </div>
                {currentUser.role === 'superevp' ? <IoMdCheckmarkCircle size='21px' color='#0DAD57' />
                  :
                  <CustomInput
                    type="checkbox"
                    name='membership'
                    disabled={currentUser.role === 'superevp'}
                    onClick={() => setActiveTab('superEVP')}
                    checked={activeTab === 'superEVP'}

                    id="superEVP"
                  />}
              </CardBody>
            </div>
          </Card>

        </div>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="Advertiser">
            <Row>
              <Colxx sm="12">
                <Advertiser
                  membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'advertiser')}
                  user={currentUser}
                // event={singleEvent} 
                />
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="EVP">
            <Row>
              <Colxx sm="12">
                <EVP
                  user={currentUser}
                  membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'evp')}

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
                    user={currentUser}
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
                    user={currentUser}
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
                    user={currentUser}
                    membership={membershipDetails.filter((el) => el.name.toLowerCase() === 'super evp')}

                  // data={item}
                  // key={`qa_${item.key}`}
                  />

                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </>
  )
}

const mapStateToProps = ({ membership,payment }) => {
  const { loading, error, membershipDetails } = membership;
  const {paymentURL}=payment
  return { loading, error, membershipDetails ,paymentURL};
};
export default connect(mapStateToProps, { getMembershipAction: getMembership })(Membership);
