import React, { Component } from 'react';
import {View, Text} from 'react-native';

import {styles} from './login_style';

// import component
import Component_Login_Carousel from '../../component/component_login_carousel/component_login_carousel';
import Component_Login_Form from '../../component/component_login_form/component_login_form';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container_content_carousel}>
                    <Component_Login_Carousel />
                </View>

                <View style={styles.container_content_form}>
                    <Component_Login_Form />
                </View>
            </View>
        );
    }
}