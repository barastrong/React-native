import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const SecondScreen = () => {
    const openAlert = (game) =>{
        if (game === 'mobilelegends'){
            Alert ('you choose mobile legends!');
        }else if (game === 'pubg'){
                Alert ('you choose PUBG');
            }
        }
    return (
        <View style={{ borderWidth: 5, borderColor: 'red', 
        borderStyle: 'dashed', borderRadius: 1 }}>
            <TouchableOpacity
        style={{
          backgroundColor: 'white',
          padding: 8,
          margin: 8,
          borderRadius: 50,
          borderWidth: 2,
        }}
        onPress={() => openAlert('mobileLegends')}>
            
        <Text style={{color: 'lightcoral'}}>
          Mobile Legends Button
        </Text>

      </TouchableOpacity>
            <View>
                <Text>
                    PUBG
                </Text>
            </View>
        </View>
    )
};

export default SecondScreen;