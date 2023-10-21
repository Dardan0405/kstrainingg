import React, { useState } from 'react';
import axios from 'axios'
import {CgMail} from "react-icons/cg"
import Cookies from 'js-cookie'; // Importing js-cookie package for cookie management
import { FormattedMessage } from 'react-intl';
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
 
  const handleform = (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleform}>
      <div className='Icon-Newsletter'>
        <CgMail/>
      </div>
      <FormattedMessage id='Enter your Email'>
        {(msg)=>(
          <input 
          type='email'
          value={email}
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder={msg}
          />
        )}
      </FormattedMessage>
      <button type="submit">Subscribe</button>
      
    </form>
  );
};
export default NewsletterForm;