import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { icons, images, COLORS, FONTS, SIZES } from '../constants'

function Home(props) {

    function renderHeader() {
        return (
            <View 
            style={styles.header}
            >
                <TouchableOpacity
                    style={{
                        width: 30,
                        flex : 1,
                        justifyContent : 'center',
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    >

                    </Image>
                </TouchableOpacity>

                <View style={{flex:1, alignItems: "center", justifyContent: 'center'}}>
                    <View style={{
                        backgroundColor : COLORS.lightGray3, 
                        borderRadius: SIZES.radius,
                        justifyContent : 'center',
                        alignItems: 'center',
                        width: '70%',
                        height: '100%'
                        }}> 
                  <Text style={{...FONTS.h3}}>
                      Location
                  </Text>
                    </View>
                </View>

                <TouchableOpacity
                style={{
                    width: 30,
                    flex : 1,
                    justifyContent : 'center',
                    alignItems: "center"
                }}
                >
                <Image
                source={icons.basket}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30
                }}
                />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    header: {
        height : 50,
        flexDirection : 'row'
    }
})

export default Home;