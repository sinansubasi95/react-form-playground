import React from 'react';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
// import YoutubeForm from './components/YoutubeForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      {/* <LoginForm /> */}
      {/* <FormikContainer /> */}
      {/* <YoutubeForm /> */}
    </div>
  );
}

export default App;
