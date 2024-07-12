// src/Login.tsx
import React, { useEffect } from 'react';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { isPlatform } from '@ionic/react';

const Login: React.FC = () => {
  useEffect(() => {
    if (isPlatform('mobileweb')) {
      window.google.accounts.id.initialize({
        client_id: '353578457984-ibpej93bjmanogrk13ll3jru411o1qg4.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' } // customization attributes
      );
    }
  }, []);

  const handleCredentialResponse = async (response: any) => {
    try {
      const credential = GoogleAuthProvider.credential(response.credential);
      const userCredential = await signInWithCredential(auth, credential);
      console.log('User Info: ', userCredential.user);
    } catch (error) {
      console.error('Error during sign in: ', error);
    }
  };

  return (
    <div>
      <div id="google-signin-button"></div>
    </div>
  );
};

export default Login;
