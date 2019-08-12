import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../view/module-login/login';

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

        Student_Dashboard : {
            screen : Student_Dashboard,
            navigationOptions : {
                header : null
            }
        }
    },
    {
        initialRouteName    : 'Student_Dashboard',
        headerMode          : 'screen'
    }
);

export default createAppContainer(AppNavigator);