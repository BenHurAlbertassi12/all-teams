import React from 'react';
import '../../css/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='box-login'>
      <h2>Login Page</h2>
      <form className='form-key'>
        <label className='label-box'>
          API Key:
          <input className='input-key' type='text' />
        </label>
        <button className='login-button' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
