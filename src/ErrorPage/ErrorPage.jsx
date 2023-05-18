import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
       <div>
       
         <div className="flex flex-col items-center justify-center  h-screen">  
     
            <img className='h-[400px]' src=" https://i.ibb.co/XXkHXH7/404-error.jpg" alt="" /> 
           <Link to="/">
                <button className='btn btn-primary'>Back to home </button>
           </Link>
      </div>
        
       </div>
    );
};

export default ErrorPage;