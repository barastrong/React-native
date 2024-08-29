import React from 'react';
import { View, Text, Image } from 'react-native';

const ThirdScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'mistyrose', flexDirection: 'colum-reverse' }}>  
           <View style={{ backgroundColor: 'red' }}>
	       <Text style={{ color: 'white' }}>
           <Image
    style={{ width: 100, height: 100 }}
    source={{ uri: 'https://i.ibb.co/d0rysBc/pikachu.png' }}/>
                Pikachu
              </Text>
           </View>
           <View style={{flex:1,}}>
	       <Text style={{backgroundColor:'orange', color: 'Red'}}>
                Flareon
              </Text>
           </View>
           <View style={{flex:1,}}>
	       <Text style={{backgroundColor:'yellow', color: 'white'}}>
                Rapidash
              </Text>
           </View>
        </View>
    )
};

export default ThirdScreen;