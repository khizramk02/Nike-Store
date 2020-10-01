import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.dark(
    'This site is build just for practice so the content is fake and mostly copied from the original site of NIKE.',
    {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    }
  );
};

const Toastify = () => {
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer className='toastify' />
    </div>
  );
};

export default Toastify;
