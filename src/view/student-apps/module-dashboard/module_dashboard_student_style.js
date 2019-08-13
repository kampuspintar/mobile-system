import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor : '#fff',
        marginLeft:20,
        marginRight:20
    },

    greeting_place :{
        flex:0.1,
        flexDirection:'column',
        marginTop:20,
        justifyContent:'center',
    },

    greeting_text:{
        color:"#212121",
        fontSize : 21,
        fontWeight:'400',
        fontStyle :'normal',
        justifyContent:'center'
    },

    small_info_account_place:{
        marginTop:0
    },

    small_info_nim:{
        color:'#757575',
        fontSize:10,
    },

    small_info_latest:{
        color:'#757575',
        fontSize:9,
    },

    schedulle_text_place:{
        flex:0.2,
        flexDirection:'row'
    },

    schedule_place:{
        flex:0.22,
        marginTop:-30,
        flexDirection:'column',
        borderRadius : 10,
        backgroundColor:'#FFFFFF',
        borderWidth:2,
        borderColor:'#E0E0E0',
    }
});

export default styles;