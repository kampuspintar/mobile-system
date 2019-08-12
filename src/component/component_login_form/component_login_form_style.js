import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container :{
        flex : 1,
        flexDirection : "column"
    },

    login_title :{
        fontSize:21,
        fontWeight:'600'
    },

    sub_title :{
        fontSize:11,
        fontWeight:'600',
        color:'#757575',
        marginBottom:10
    },

    input_form : {
        borderRadius: 4, 
        borderWidth: 0.5,
        borderColor : "#BA68C8",
        marginTop:10,
        minHeight:45,
        fontSize:14
    },

    button_sign_in :{
        marginTop : 20,
        backgroundColor:"#6A1B9A",
        elevation:0,
        borderRadius: 4, 
        borderWidth: 0.5,
        borderColor : "transparent"
    },

    button_sign_in_text : {
        color:"#ECEFF1",
        textAlign:"center",
        flex:1,
        fontSize:14,
    },

    button_forgot_password:{
        marginTop:8,
        backgroundColor:"transparent",
        elevation:0,
        borderRadius: 4, 
        borderWidth: 0.5,
        borderColor : "transparent"
    },

    button_forgot_password_text : {
        color:"#6A1B9A",
        textAlign:"center",
        flex:1,
        fontSize:14,
    }

    
});

export default styles;