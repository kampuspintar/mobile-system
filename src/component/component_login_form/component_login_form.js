import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Label, Input, Button} from 'native-base';

import styles from './component_login_form_style';

export default class Component_Login_Form extends Component{
    render(){
        return(
            <View style={styles.container}> 
               <Form>
                   <Text style={styles.login_title}>
                       Hallo, Selamat kembali
                   </Text>
                   <Text style={styles.sub_title}>
                       silahkan login untuk memulai aktivitas
                   </Text>
                    <Input
                        placeholderTextColor="#CE93D8"
                        placeholder='nim/nip' style={styles.input_form}
                        keyboardType={'numeric'}/>

                    <Input 
                        placeholderTextColor="#CE93D8"
                        placeholder='password' style={styles.input_form}
                        secureTextEntry={true}/>
                   
                    <Button block style={styles.button_sign_in}>
                        <Text style={styles.button_sign_in_text}>Mulai</Text>
                    </Button>

                    <Button block style={styles.button_forgot_password}>
                        <Text style={styles.button_forgot_password_text}>saya tidak dapat memulai aplikasi</Text>
                    </Button>
                </Form>   
            </View>
        );
    }
}