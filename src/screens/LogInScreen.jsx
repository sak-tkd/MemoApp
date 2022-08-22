import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../components/Button';

export default function LogInScreen(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput value='Email Address' style={styles.input} />
                <TextInput value='Password' style={styles.input} />
                <Button 
                    label="Submit"
                    onPress={ () => {navigation.reset({
                        // stackの０に対してMemoListを配置＝スタック履歴リセットして１つだけ配置されてる状態
                        index: 0,
                        routes: [{name: 'MemoList'}],
                    });
                }}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <TouchableOpacity
                            onPress={ () => {navigation.reset({
                                index: 0,
                                routes: [{name: 'SignUp'}]
                            });
                        }}
                    >
                        <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        // backgroundColor: '#000000',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
    footer: {
        flexDirection: 'row',
    }
});
