import React, { useState, useEffect } from 'react';
import { Card, Row, CardBody, CardHeader, Collapse } from 'reactstrap'
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import { connect } from 'react-redux';
import { createFAQ, getFAQ } from 'redux/actions';

const Knowledgebase = ({  getFAQRequest,faqs }) => {
    
    const [toggleQuestion, setToggequestion] = useState(0);
    const [knowledge, updateKnowledge] = useState([]);
    // const [question, updateQuestion]=useState('')
  


    useEffect(() => {
        getFAQRequest()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        updateKnowledge(faqs.reverse())
        // eslint-disable-next-line
    }, [faqs])

    return (
        <>
            <h2 className=''>Knowledge Base</h2>
            <Separator />
            <Row className='mt-5'>
                <Colxx xl='6'>
                    {knowledge.map((el, i) =>
                   /* eslint no-underscore-dangle: 0 */
                        <Card className='mb-3 shadow' key={el._id}>
                            <CardHeader className='py-3'  onClick={() => setToggequestion(i)}>
                                <span className="font-weight-bold">{el.question}</span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === i}>
                                <CardBody className='shadow'>
                                    {el.answer}
                                </CardBody>
                            </Collapse>
                        </Card>

                    )}

                

                </Colxx>
            </Row>
        </>
    )

}

const mapStateToProps = ({ FAQ }) => {
    const { loading, createFAQLoading, error, message, faqs } = FAQ;
    return { createFAQLoading, error, loading, message, faqs };
};
export default connect(mapStateToProps, { createFAQRequest: createFAQ, getFAQRequest: getFAQ, })(Knowledgebase)
