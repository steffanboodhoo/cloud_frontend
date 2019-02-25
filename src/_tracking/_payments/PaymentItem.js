import React from 'react';
const PaymentItem = ({payment}) => {
    return (
        <div className='row'>
            <div className='col s4'>
                {payment.order_number}
            </div>
            <div className='col ss'>
                {payment.status}
            </div>
            <div className='col s2'>
                {payment.amount}
            </div>
            <div className='col s2'>
                {payment.machine_name}
            </div>
            <div className='col s2'>
                {payment.date}
            </div>
        </div>
    )
}
export default PaymentItem;