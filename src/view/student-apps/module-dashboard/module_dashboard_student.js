import React, { Component } from 'react';
import {View, Text, YellowBox} from 'react-native';
import { Button } from 'native-base';

import styles from './module_dashboard_student_style';

import { icon_sample, icon_reg, icon_libs, icon_schedule, icon_transkrip, icon_bill, icon_journal, icon_campus, icon_krs} from '../../../base/base_property';

// internal component
import Component_Button_Image_Text from '../../../component/component_button_image_text/component_button_image_text';

// import ext library 
import TimeLog from 'react-native-time-log';

const data = [
    {
        time: '12:00 - 14:00',
        title: 'Matematika Diskrit',
        description: 'John Doe, MT. \nGedung Teknik\nRoom 303',
    },
  ];

  const flatListProps = {
    marginTop:-160
  }
  
  const customStyleProps = {
    title:{
        fontSize:11
    },
    date:{
        fontSize:9,
    },
    card:{
        marginLeft:0,
        marginTop:-20
    },
  }



export default class Dashboard_Student extends Component{

    constructor(props){
        super(props);

        YellowBox.ignoreWarnings = ([
            'Encountered an error loading page', 
            'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            'Task orphaned for request ',
            'Remote debugger is in a background tab which may cause apps to perform slowly',
            "Warning: Failed child context type: Invalid child context",
          ]);
    }

    gotoOnWorking = () => {
        this.props.navigation.navigate('Working');
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.greeting_place}>
                    <Text style={styles.greeting_text}>
                        Selamat pagi, Ramlan
                    </Text>
                </View>
                <View style={styles.small_info_account_place}>
                    <Text style={styles.small_info_nim}>
                        Nomor Pokok Mahasiswa - 0819083
                    </Text>
                    <Text style={styles.small_info_latest}>
                        Login terakhir 12 Agustus 2019 08:00
                    </Text>
                </View>
                <View style={styles.schedulle_text_place}>
                    <View style={{flex:1, flexDirection:"column", justifyContent:'center', alignItems:'flex-start'}}>
                        <Text style={{fontSize:12, alignSelf:'flex-start'}}>Jadwal selanjutnya</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"column", justifyContent:'center', alignItems:'flex-end'}}>
                        <Text style={{fontSize:9, alignSelf:'flex-end', color:'#FFB300'}}>Selengkapnya</Text>
                    </View>
                    
                </View>
                <View style={styles.schedule_place}>
                    <TimeLog data={data} flatList={flatListProps} style={customStyleProps}/>
                </View>

                <View style={{flex:0.4, flexDirection:'column', marginTop:30}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Component_Button_Image_Text sourceImage={icon_reg} buttonName="Registrasi" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_journal} buttonName="Journal" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_bill} buttonName="Tagihan" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_krs} buttonName="KRS" onPress={this.gotoOnWorking}/>
                    </View>

                    <View style={{flex:1, flexDirection:'row',  marginTop:30}}>
                        <Component_Button_Image_Text sourceImage={icon_libs} buttonName="Perpus" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_transkrip} buttonName="Transkrip" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_schedule} buttonName="Jadwal" onPress={this.gotoOnWorking}/>
                        <Component_Button_Image_Text sourceImage={icon_campus} buttonName="My Campus" onPress={this.gotoOnWorking}/>
                    </View>
                </View>
               
            </View>
        );
    }
}