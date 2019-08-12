import {AppRegistry} from 'react-native';
import App from './App';
import base_navigation from './src/base/base_navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => base_navigation);