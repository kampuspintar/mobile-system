import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        marginTop:20,
    },

    image_carousel : {
        flex:1, 
        height: null, 
        width: null,
    },

    carousel_text :{
        marginTop:30,
        position:'relative',
        fontSize:13,
        color:'#4A148C',
        textAlign:'center'
    }
});

export default styles;