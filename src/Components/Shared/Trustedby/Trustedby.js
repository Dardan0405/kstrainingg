import React from 'react'
import { FormattedMessage } from 'react-intl'


import './Trustedby.scss'
 const  Trustedby =() =>{
    return(
        <div className='Trusted-by-manycomapnies'>
            <div className='Line-row'>
            <h4 className='Trusted-title'><FormattedMessage id='Trusted' defaultMessage='Trusted by many comapnies'/>
            </h4>
            </div>
            <div className='Trusted-by-icon'>
                <div className='Logo-Container'>
                    
                <div className='Trusted-logo logo-row1'></div>
                <div className=' Trusted-logo logo-row2' ></div>
                <div className=' Trusted-logo logo-row3' ></div>
                <div className=' Trusted-logo logo-row4' ></div>
                <div className=' Trusted-logo logo-row5' ></div>
                </div>
                </div>
           
           </div>

        
    )
 }
 export default Trustedby