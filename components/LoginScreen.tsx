import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomInput from './CustomInput'; 

const LoginScreen = () => {
    // 7. Adım: State'leri tanımla
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 7. Adım: Butona basılınca çalışacak işlev
    const handleLogin = () => {
        // Bu loglar, Metro Bundler'ın çalıştığı terminalde görünecektir.
        console.log('--- GİRİŞ BAŞARILI KANIT ---');
        console.log('E-posta:', email);
        console.log('Şifre:', password);
        console.log('-----------------------------');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>

            {/* E-posta - CustomInput Kullanımı */}
            <CustomInput
                placeholder="E-posta Adresi"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            {/* Şifre - CustomInput Kullanımı */}
            <CustomInput
                placeholder="Şifre"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            {/* Giriş Yap Butonu (TouchableOpacity ile tıklama garantisi) */}
            <TouchableOpacity
                style={styles.loginButton} 
                onPress={handleLogin} // Tıklama işlevi burada
            >
                <Text style={styles.buttonText}>GİRİŞ YAP</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#34495e',
    },
    // Yeni buton stilleri
    loginButton: {
        width: '100%',
        backgroundColor: '#1e90ff', // Mavi renk
        padding: 15,
        borderRadius: 8,
        alignItems: 'center', // Yazıyı ortala
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default LoginScreen;