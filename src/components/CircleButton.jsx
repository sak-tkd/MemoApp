import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
    const { children } = props;
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>

    );
}

CircleButton.prototype = {
    children: string.isRequired,
}

// 必須にしない場合は下記が必要?
// CircleButton.defaultProps = {
//     children: '',
// }


const styles = StyleSheet.create({
    circleButton: {
		backgroundColor: '#467FD3',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 40,
		bottom: 40,
		shadowColor: '#000000',		// shadow is iOS only
		shadowOffset: { width: 0, height:8 },  // shadow is iOS only
		shadowOpacity: 0.75,  // shadow is iOS only
		shadowRadius: 8,  // shadow is iOS only
		elevation: 8		// android only style
	},
	circleButtonLabel: {
		color: '#FFFFFF',
		fontSize: 40,
		lineHeight: 40
	}
})