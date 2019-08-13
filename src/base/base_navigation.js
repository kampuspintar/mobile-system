import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../view/module-login/login';
import Working from '../view/module-ondevelopment/module_ondevelopment';

// student
import Student_Dashboard from '../view/student-apps/module-dashboard/module_dashboard_student';

const AppNavigator = createStackNavigator(
    {
        Login : {
            screen : Login,
            navigationOptions : {
                header : null
            }
        },

        Working : {
            screen : Working,
            navigationOptions : {
                title: 'Universitas KampusPintar',
                //headerTitle: (<Image source={require('../assets/logo/logo_white.png')} style={{ width: 40, height: null, resizeMode: 'contain', aspectRatio: 1, marginLeft: 15 }} />),
                // headerLeft: <Icon name={'arrow-left'} />,
                // headerRight: <Icon name={'cog'} />,
                headerStyle: {
                    backgroundColor: "#6A1B9A",
                },
                headerTitleStyle: {
                    color: "#FFFFFF",
                    flex: 1,
                    fontSize: 13
                },
                headerTintColor: "#FFFFFF",
            }
        },

        Student_Dashboard : {
            screen : Student_Dashboard,
            navigationOptions: {
                title: 'Universitas KampusPintar',
                //headerTitle: (<Image source={require('../assets/logo/logo_white.png')} style={{ width: 40, height: null, resizeMode: 'contain', aspectRatio: 1, marginLeft: 15 }} />),
                // headerLeft: <Icon name={'arrow-left'} />,
                // headerRight: <Icon name={'cog'} />,
                headerStyle: {
                    backgroundColor: "#6A1B9A",
                },
                headerTitleStyle: {
                    color: "#FFFFFF",
                    flex: 1,
                    fontSize: 13
                },
                headerTintColor: "#FFFFFF",
            },
        }
    },
    {
        initialRouteName    : 'Login',
        headerMode          : 'screen'
    }
);

export default createAppContainer(AppNavigator);