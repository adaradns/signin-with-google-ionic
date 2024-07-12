import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'auth-google',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '353578457984-ibpej93bjmanogrk13ll3jru411o1qg4.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
