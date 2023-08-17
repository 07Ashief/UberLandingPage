import React from 'react';
import './App.css';
import LoginPage from './login_page';
import FormPage from './login_form';
import LineComponent from './LineComponent';
import ButtonComponent from './ButtonComponent';
import googleLogo from './images/google.png';
import appleLogo from './images/apple.png';
import facebookLogo from './images/facebook.png';
import ParagraphComponent from './ParagraphComponent';
import HeadingComponent from './HeadingComponent';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <LoginPage />
      <div style={{ width: '320px', height: '600px', margin: '70px auto' }}>
        <HeadingComponent text="What's your phone number or email?" />
        <FormPage />
        <LineComponent />
        <ButtonComponent label="Continue with Google" logo={googleLogo} link="https://www.google.com" />
        <ButtonComponent label="Continue with Apple" logo={appleLogo} link="https://www.apple.com/" />
        <ButtonComponent label="Continue with Facebook" logo={facebookLogo} link="https://www.facebook.com/" />
        <ParagraphComponent />
      </div>
    </div>
  );
}

export default App;
