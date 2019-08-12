import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../view/module-login/login';

const AppNavigator = createStackNavigator(
    {
        Login : {
            screen : Login,
            navigationOptions : {
                header : null
            }
        }
    },
    {
        initialRouteName    : 'Login',
        headerMode          : 'screen'
    }
);

export default createAppContainer(AppNavigator);