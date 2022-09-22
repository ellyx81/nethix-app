import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L8I = () => {   
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
                                    source={require('../../images/intropics/09cb.png')}
                                    style={{height:"30%",
                                            width:"100%",
                                            }}
                                />
                        <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>

                        <Text style={style.paragraph}>
                        Cyberbullying is defined in legal glossaries as: actions that use information and communication technologies to support deliberate, repeated, and hostile behavior by an individual or group that is intended to harm another or others; use of communication technologies for the intention of harming another person; and use of Internet service and mobile technologies such as Web pages and discussion groups as well as instant messaging or SMS text messaging with the intention of harming another person.
                        </Text>

                        <Text style={style.paragraph}>
                        Cyberbullying is bullying using a new Internet supported medium. Statistics from different countries are showing that the vice is growing, hampered only by massive awareness campaigns, hence affecting more and more people. 
                        </Text>
                        <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("L8L");
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
export default L8I;