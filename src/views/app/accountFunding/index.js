import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NotificationManager } from 'components/common/react-notifications';
import { verifyFunding } from 'redux/actions'


const Transaction = ({ 
    verifyFundingAction,
loading, error, message, }) => {


    useEffect(() => {
        // let data = {}
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString)
        const status = urlParams.get('status');
        /* eslint camelcase:0 */
        const txRef = urlParams.get('tx_ref');
        const id = urlParams.get('transaction_id');

        const data = {
            // membershipId,
            status,
            txRef,
            id
        }
        console.log(data);
        verifyFundingAction(data)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (error) {
            NotificationManager.warning(error, '', 3000, null, null, '');
        } else if (message) {
            NotificationManager.success(message, ' ', 3000, null, null, '');
        }
    }, [error, message]);

    return (
        <div>
            {loading ?
                <>
                    <div className='loading' />
                    <h4>Verifying Transaction</h4>

                </> : null
            }
        </div>
    )
}
const mapStateToProps = ({ payment }) => {
    const { loading, error, message, verified } = payment;
    return { loading, error, message, verified };
};

export default connect(mapStateToProps, { verifyFundingAction: verifyFunding })(Transaction);
