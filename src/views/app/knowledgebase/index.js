import React,{useState} from 'react';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { Card, Row, CardBody, CardHeader, Collapse } from 'reactstrap'

const Knowledgebase = () => {
    const [toggleQuestion, setToggequestion] = useState(1);

    return (
        <>
            <h2 className=''>Knowledgebase</h2>
            <Separator />
            <Row className='mt-5'>
            <Colxx xl='6'>
                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(1)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 1}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(2)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 2}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(3)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 3}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(4)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 4}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(5)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 5}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className='mb-3 shadow'>
                        <CardHeader className='py-3' onClick={() => setToggequestion(6)}>
                            <span className="font-weight-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</span>
                        </CardHeader>
                        <Collapse isOpen={toggleQuestion === 6}>
                            <CardBody className='shadow'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                            </CardBody>
                        </Collapse>
                    </Card>

                </Colxx>
            </Row>
        </>
    )

}
export default Knowledgebase