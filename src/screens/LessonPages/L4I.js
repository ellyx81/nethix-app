import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L4I = () => {   
    const navigation = useNavigation();
        return(
            <View>
             <View style={style.containerTop}>
                 <TouchableOpacity
                         onPress={() => {
                         navigation.goBack();
                     }}
                         style={style.backbtn}
                     >
                             <MaterialCommunityIcons name="arrow-left-box" style={style.icons}/>
                     </TouchableOpacity>
             </View>
             <View>
                 <ScrollView>
                        <Image
                            source={require('../../images/intropics/04aas.png')}
                            style={{height:"30%",
                                    width:"100%",
                                    }}
                        />
                        <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>
                        
                            <Text style={style.paragraph}>
                                        Social, economic, and technological advances have dramatically increased the amount of information any individual possesses. Increasing demand for information and easier access to it have also created challenges. We have come to learn that information is a treasure in itself: The more you have, the better. 
                                        </Text>

                                        <Text style={style.paragraph}>
                                        Even though information is a treasure, it can also be a liability. We want to make sure that what is seen and heard privately does not become public without our consent. In our technologically advanced society, a number of factors have contributed to the high demand for information and the subsequent need for anonymity, security, privacy, and the safeguard of our civil liberties.
                            </Text>

                        <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("L4L");
                                }}
                                    style={style.readmorebtn}
                                >
                        
                            <Text style={style.readmoreTxt}>
                                Proceed to Lesson
                            </Text>
                            <Image source={require('../../images/a3.png')}/>
                        
                        </TouchableOpacity>
                    </ScrollView>
                </View>
           </View>
        )
    }
const style = StyleSheet.create({
    containerTop: {
        flexDirection:"row",
        width:"100%",
        paddingHorizontal:20,
        
    },
    backbtn: {
      marginLeft:-10, 
        borderRadius:10,
        marginTop:20,
        width: 50,
    },
    icons: {
        color: "#323657",
        fontSize: 50,
    },
    
    readmorebtn: {
        flexDirection:"row",
        paddingVertical:5,
        backgroundColor:"#323657",
        marginHorizontal:40,
        paddingVertical:15,
        alignItems:"center",
        borderRadius:10,
        justifyContent:"center",
        marginTop:20,
        marginBottom:400,
        
    },
    paragraph: {
        fontFamily:"Medium",
        textAlign:"justify",
        color:"#345c74",
        paddingLeft:42,
        paddingRight:35,
    },
    readmoreTxt: {
        color:"#FFF",
        fontFamily:"Bold",
        fontSize:15,
        marginRight:50,
    }
})
export default L4I;