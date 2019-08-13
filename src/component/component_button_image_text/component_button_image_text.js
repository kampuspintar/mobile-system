import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { Button } from "native-base";
import styles  from "./component_button_image_text_style";

export default class Component_Button_Image_Text extends Component {
	render() {
		return (<View style={styles.layoutButton}>
			<Button transparent style={styles.buttonStyle} onPress={this.props.onPress}>
				<View style={styles.imageAndTextLayout}>
					<Image source={this.props.sourceImage} style={styles.imageLayout} />
					<Text style={styles.textLayout}> {this.props.buttonName} </Text >
				</View >
			</Button >
		</View >);
	}
}