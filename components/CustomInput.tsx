import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = (props: any) => {
    return (
        <TextInput
            style={styles.input}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    }
});

export default CustomInput;