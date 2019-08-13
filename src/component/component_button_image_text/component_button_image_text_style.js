import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	layoutButton: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 10,
		// marginBottom  : 20,
		justifyContent: 'center',
	},

	buttonStyle: {
		height: 70,
	},

	imageAndTextLayout: {
		flex: 1,
		flexDirection: 'column',
	},

	imageLayout: {
		width: 40,
		height: 40,
		alignSelf: 'center',
	},

	textLayout: {
		fontSize: 11,
		//color       : '#212121',
		color: '#212121',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 5,
	}
});


export default styles;