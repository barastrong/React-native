import React from 'react';
import { View, Text, Button } from 'react-native';
// Tambahkan kode dibawah ini
const FirstScreen = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }}>
            <Text style={{
                margin: 16
            }}>
                Hello
                <Text style={{ color: 'red' }}>World!</Text>
            </Text>
            <Button
                title="This is Button"
            />
        </View>
    )
};
//Tambahkan Kode dibawah ini
export default FirstScreen;
