import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Image, View, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get("window");


const I6 = () => {   
    const navigation = useNavigation();
        return(
        <View style={{marginBottom:90, backgroundColor:"#323657"}}>
        <View style={styles.containerTop}>
            <TouchableOpacity
                    onPress={() => {
                    navigation.goBack();
                }}
                    style={styles.backbtn}
                >
                        <MaterialCommunityIcons name="arrow-left-box" style={styles.icons}/>
                </TouchableOpacity>
        </View>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    <Image
                        style={[styles.container]}
                        source={require('../../Infographics/06WCISP.png')}
                        resizeMode='stretch'
                    />
            </ScrollView>
        </View>
        )
    }
const styles = StyleSheet.create({
    containerTop: {
        flexDirection:"row",
        width:"100%",
        paddingHorizontal:20
    },
    backbtn: {
        //paddingHorizontal:10,
      //  paddingVertical:13,
      marginLeft:-10, 
        borderRadius:10,
        marginTop:20,
       // backgroundColor:"white",
        width: 50,
    },
    icons: {
        color: "white",
        fontSize: 50,
        opacity: 0.8
    },
    container: {
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
      },
      fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
     
})
export default I6;