import { View, Text, Image, ScrollView  } from 'react-native';

const ImageScreen = () => {
    return (
        <View style={{alignItems : "center", flexDirection: 'row'}}>
            <View style={{ margin: 8, padding: 8 }}>
                <ScrollView horizontal={true}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={require('../../Assets/Gambar/pikachu.png')}
                />
                </ScrollView>
            </View>
            <View style={{ margin: 8, padding: 8 }}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={require('../../Assets/Gambar/pikachu.png')}
                />
                </View>
                <View style={{ margin: 8, padding: 8 }}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={require('../../Assets/Gambar/flareon.png')}
                />
                </View>
                <View style={{ margin: 8, padding: 8 }}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={require('../../Assets/Gambar/rapidash.png')}
                />
                </View>
                <View style={{ margin: 8, padding: 8 }}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={{uri:'https://i.ibb.co/bLz74hj/psyduck.png'}}
                />
                </View>
                <View style={{ margin: 8, padding: 8 }}>
                <Image
                    style={{ 
                        width: 150, 
                        height: 150, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: 'green', 
                        backgroundColor: 'aliceblue' 
                    }}
                    source={{uri:'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
                />
                </View>
        </View>
    )
};

export default ImageScreen;