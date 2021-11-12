import React, { useEffect,useState } from 'react';
import { Card, CardBody, Row, Button, 
    // CardSubtitle 
} from 'reactstrap'
import { connect } from 'react-redux';
import { getSingleSEVP } from 'redux/actions';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { BsArrowLeft } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
// import ThumbnailLetters from 'components/cards/ThumbnailLetters'
import Table from './ReactTableCards'


const EVPDetails = ({ history, getSingleSEVPRequest, singleSEVP, loading, match: { params: { userId } } }) => {
    console.log(userId);
    const [subEvp, updateSubEvp]=useState({})
    useEffect(() => {
        getSingleSEVPRequest(userId)
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
if(singleSEVP!==null){
    updateSubEvp(singleSEVP)
}
        // eslint-disable-next-line

    },[singleSEVP])
    console.log(singleSEVP);
    const {fullName, phoneNumber, address, photo,credit}=subEvp;

    return (
        <>
            <div className='d-flex mb-3 align-items-center justify-content-between'>
                <h2 className='mb-0'>
                    <BsArrowLeft onClick={() => { history.goBack() }} style={{ cursor: 'pointer' }} /> Sub EVP Info
                </h2>
                <Button color='primary' className='mx-2 mb-3' onClick={() => { history.push('/app/dashboards/add-new-evp') }}>Add New</Button>
            </div>
            <Separator />
            {loading ? <div className='loading' /> :


                <div className='mt-4'>

                    <Row>
                        <Colxx xl='12'>
                            <Card>
                                <CardBody>
                                    <div className='d-flex mb-4'>
                                        <img src={photo} width='70px' height='70px' style={{ borderRadius: "20px" }} alt='evp-img' />
                                        <div className='ml-2'>
                                            <h3 className='mb-0 mt-2 font-weight-bold'>{fullName}</h3>
                                            <p className='font-family-m'>Your Taskr information</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div xl='3' md='6'>
                                            <div className='d-flex'>
                                                <div className='text-center mt-2 pt-2' style={{
                                                    border: 'solid 0.7px #FFD5F7', width: '40px',
                                                    height: '40px', borderRadius: '40%'
                                                }}>
                                                    <FaPhoneAlt size='20px' color='#922C88' />
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='mb-0 mt-2'>Telephone</p>
                                                    <p className='font-family-m font-weight-bold'>{phoneNumber}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div xl='3' md='6'>
                                            <div className='d-flex'>
                                                <div className='text-center mt-2 pt-2' style={{
                                                    border: 'solid 0.7px #FFD5F7', width: '40px',
                                                    height: '40px', borderRadius: '40%'
                                                }}>
                                                    <BiMessageSquareDetail size='20px' className='' color='#922C88' />

                                                </div>
                                                <div className='ml-2'>
                                                    <p className='mb-0 mt-2'>Balance</p>
                                                    <p className='font-family-m font-weight-bold'>{credit}</p>
                                                </div>
                                            </div>

                                        </div> <div xl='2' md='6'>
                                            <div className='d-flex'>
                                                <div className='text-center mt-2 pt-2' style={{
                                                    border: 'solid 0.7px #FFD5F7', width: '40px',
                                                    height: '40px', borderRadius: '40%'
                                                }}>
                                                    <FaMapMarkerAlt size='20px' className='' color='#922C88' />
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='mb-0 mt-2'>Location</p>
                                                    <p className='font-family-m font-weight-bold'>{address}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div xl='4' md='6'>
                                            <div className='d-flex pr-0'>

                                                {' '}
                                                {/* <div>
                                                    <Button className='mx-2' color='primary'>Fund
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button className='mx-2' color='primary'>Withdraw
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button className='mx-2' color='primary'>Delete
                                                    </Button>
                                                </div> */}

                                            </div>

                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Colxx>
                    </Row>
                    {/* <Row>
                        <Colxx xl='12'>
                            <div className='mt-4 d-flex justify-content-between align-items-center flex-wrap flex-row'>

                                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '270px', height: '70px' }}>

                                    <div className=" d-flex flex-grow-1 min-width-zero">
                                        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row align-items-center justify-content-between min-width-zero">

                                            <div>
                                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                                    Total Registrations
                                                </CardSubtitle>
                                            </div>
                                            <div>
                                                <ThumbnailLetters
                                                    style={{ width: '36px', height: '36px' }}
                                                    rounded
                                                    small

                                                    className=" my-1 p-0 text-primary bg-white border border-primary"
                                                    text='6' />

                                            </div>


                                        </CardBody>
                                    </div>
                                </Card>


                                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '270px', height: '70px' }}>


                                    <div className=" d-flex flex-grow-1 min-width-zero">
                                        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">

                                            <div>
                                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                                    Advertisers
                                                </CardSubtitle>
                                            </div>
                                            <div>
                                                <ThumbnailLetters
                                                    style={{ width: '35px', height: '35px' }}
                                                    rounded
                                                    small
                                                    text="456"
                                                    className=" my-1 p-0 text-primary bg-white border border-primary"
                                                />

                                            </div>



                                        </CardBody>
                                    </div>
                                </Card>


                                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '270px', height: '70px' }}>


                                    <div className=" d-flex flex-grow-1 min-width-zero">
                                        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">

                                            <div>
                                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                                    Vendors
                                                </CardSubtitle>
                                            </div>
                                            <div>
                                                <ThumbnailLetters
                                                    style={{ width: '35px', height: '35px' }}
                                                    rounded
                                                    small
                                                    text="211"
                                                    className=" my-1 p-0 text-primary bg-white border border-primary"
                                                />
                                            </div>


                                        </CardBody>
                                    </div>
                                </Card>


                                <Card className="py-0 d-flex flex-row mb-4 pl-3" style={{ minWidth: '270px', height: '70px' }}>


                                    <div className=" d-flex flex-grow-1 min-width-zero">
                                        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-center">

                                            <div>
                                                <CardSubtitle className="truncate mt-3 font-weight-bold">
                                                    Customers
                                                </CardSubtitle>
                                            </div>
                                            <div>
                                                <ThumbnailLetters
                                                    style={{ width: '35px', height: '35px' }}
                                                    rounded
                                                    small
                                                    text="2"
                                                    className=" my-1 p-0 text-primary bg-white border border-primary"
                                                />
                                            </div>





                                        </CardBody>
                                    </div>
                                </Card>

                            </div>
                        </Colxx>
                    </Row> */}
                    <div className='mt-5'>
                        {
                            singleSEVP ?  <Table 
                            user={singleSEVP}
                                />:null
                        }
                      
                    </div>
                </div>

            }

        </>
    )
}
const mapStateToProps = ({ subEVP }) => {
    const { loading, getSEVPLoading, SEVPError, message, singleSEVP } = subEVP;
    return { getSEVPLoading, SEVPError, loading, message, singleSEVP };
};
export default (connect(mapStateToProps, { getSingleSEVPRequest: getSingleSEVP }))(EVPDetails)
