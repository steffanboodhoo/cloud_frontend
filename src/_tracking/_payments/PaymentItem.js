import React from 'react';
const PaymentItem = ({payment}) => {
    console.log(payment)
    return (
        <div className='row'>
            <div className='col s3'>
                {payment.machine_id}
            </div>
            <div className='col s3'>
                {payment.status}
            </div>
            <div className='col s3'>
                {payment.amount}
            </div>
            <div className='col s3'>
                {payment.date}
            </div>
        </div>
    )
}
export default PaymentItem;