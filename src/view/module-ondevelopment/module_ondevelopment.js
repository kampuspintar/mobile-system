import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { image_working } from '../../base/base_property';

export default class OnDev extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20, 
            alignItems: 'stretch',justifyContent: 'center',}}>
                <Image source={image_working} resizeMode="contain" style={{flex:1, 
                    flexGrow:1,
                    height:null,
                    width:null,
                    alignItems: 'center',
                    justifyContent:'center',marginTop:100}} />
                <Text style={{flex:1, textAlign:'center', fontSize:19}}>Segera release fitur terbaru</Text>
            </View>
        )
    }
}