
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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
import Advertiser from './Advertiser'
import Customer from './Customer'
import Vendor from './Vendor'
import SuperEVP from './SuperEVP'
import EVP from './EVP'



const Membership = () => {
  const [activeTab, setActiveTab] = useState('Advertiser');

  return (
    <>
      <h2 className=''>Register Membership</h2>
      <Separator />
      <div className='mt-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>

        <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '220px', height: '60px' }}>


          <div className=" d-flex flex-grow-1 min-width-zero">
            <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
              <div className="min-width-zero">

                <CardSubtitle className="truncate mb-1 font-weight-bold">
                  Advertiser
                </CardSubtitle>

              </div>
              <CustomInput
                type="checkbox"
                name='membership'
                onClick={() => setActiveTab('Advertiser')}
                id="advertiser"

              />
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
              <CustomInput
                type="checkbox"
                name='membership'
                onClick={() => setActiveTab('EVP')}
                id="EVP"
              />
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
              <CustomInput
                type="checkbox"
                name='membership'
                onClick={() => setActiveTab('Customer')}
                id="customer"
              />
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
              <CustomInput
                type="checkbox"
                name='membership'
                onClick={() => setActiveTab('Vendor')}
                id="vendor"
              />
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
              <CustomInput
                type="checkbox"
                name='membership'
                onClick={() => setActiveTab('superEVP')}
                id="superEVP"
              />
            </CardBody>
          </div>
        </Card>

      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="Advertiser">
          <Row>
            <Colxx sm="12">
              <Advertiser
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

    </>
  )
}

export default Membership;
