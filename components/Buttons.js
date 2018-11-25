import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Buttons = ({onPress30, onPress50, onPress100, num1, num2, num3}) => {
	const { buttonStyle, textStyle, containerBtn } = styles;
	return (
        <View style={containerBtn}>
		<TouchableOpacity onPress={onPress30} style={buttonStyle}>
		<Text style={textStyle}>{num1}</Text>
		</TouchableOpacity>

        <TouchableOpacity onPress={onPress50} style={buttonStyle}>
        <Text style={textStyle}>{num2}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress100} style={buttonStyle}>
		<Text style={textStyle}>{num3}</Text>
		</TouchableOpacity>
        </View>
		);
    };
    
    const styles = {
        containerBtn: {
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'center',
            
        },
        textStyle: {
            color: "white",
            fontSize: 20,
            textAlign: "center"
        },
        buttonStyle: {
            width: '20%',
            backgroundColor: "#841584",
            borderColor: "white",
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
            
        }
    }

export { Buttons };