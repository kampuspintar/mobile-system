import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './component_login_carousel_style';

// import assets
import {image_information, image_payment, image_foodcourt, image_journal} from '../../base/base_property';

// import library
import Carousel from 'react-native-carousel';

export default class Component_Login_Carousel extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Carousel 
                    width={375} 
                    delay={4000}
                    hideIndicators={true}>
                    <View style={styles.container}>
                        <Image source={image_information} 
                                style={styles.image_carousel}
                                resizeMode="contain" />
                        
                        <Text style={styles.carousel_text}>
                            Informasi kegiatan kampus, fasilitas, akreditasi hingga lowongan bisa kamu dapetin disini.
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={image_payment} 
                                style={styles.image_carousel}
                                resizeMode="contain" />
                        <Text style={styles.carousel_text}>
                            Mulai pembayaran SPP, kegiatan perkuliahan sudah ga perlu repot lagi. Lewat aplikasi bisa banget.
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={image_foodcourt} 
                                style={styles.image_carousel}
                                resizeMode="contain" />
                        <Text style={styles.carousel_text}>
                            Cashback foodcourt di kampus makin seru. Bikin kamu makin hemat.
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={image_journal} 
                                style={styles.image_carousel}
                                resizeMode="contain" />
                        <Text style={styles.carousel_text}>
                            Download journal lokal atau internasional, buat referensi penelitian sebebasnya.
                        </Text>
                    </View>
                </Carousel>
            </View>
        );
    }
}