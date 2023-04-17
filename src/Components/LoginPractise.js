import React, {useState} from 'react';
import Modal from './Modal';
import ReactDOM from 'react-dom';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Sign In Page</h1>
      <p>This is where you sign in</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && ReactDOM.createPortal( <Modal setIsOpen={setIsOpen} />, 
      document.getElementById('modal-root-div') )}
    </>
  )
}

export default Login