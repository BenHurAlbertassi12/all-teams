import React, { useState } from 'react';
import Alert from '../../component/Alert';
import '../../css/LoginPage.css';

const LoginPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setApiKey('');

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options);
      const result = await response.text();
      console.log(result);

      setLoginSuccess(response.ok);
    } catch (error) {
      console.error(error);
    }

    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className='box-login'>
    <div className='box-box'>
        <h2>Login Page</h2>
        {showAlert && (
          <Alert
            message={
              loginSuccess
                ? 'Login bem-sucedido!'
                : 'Login incorreto. Verifique sua API Key.'
            }
            type={loginSuccess ? 'success' : 'error'}
            onClose={handleAlertClose}
          />
        )}
        <form className='form-key' onSubmit={handleSubmit}>
          <label className='label-box'>
            API Key:
            <input
              className='input-key'
              value={apiKey}
              onChange={handleInputChange}
              placeholder='API Key'
            />
          </label>
          <button className='login-button' type='submit'>
            Login
          </button>
        </form>
        <div>
          <p className='font-apikey'>API Key</p>
          <p className='font-para'>
            5b58e9bd6amshfda316de7324d01p176f9bjsn9d2e1f6e6a5e
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
