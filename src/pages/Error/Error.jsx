import React from 'react';
import errorpage from "../../assets/ops.gif"
import { Link } from 'react-router-dom';

const Error = () => {
   
    return (
        <div className='text-center'>
            <img className='ml-[15%]' style={{width:'50%'}} src={errorpage} alt="" />
          
          <Link className='btn btn-primary' to="/">Back to Home</Link>
        </div>
    );
};

export default Error;