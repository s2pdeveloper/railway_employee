import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ress.app',
  appName: 'RESS',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
