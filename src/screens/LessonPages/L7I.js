import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L7I = () => {   
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
                                    source={require('../../images/intropics/08scc.png')}
                                    style={{height:"30%",
                                            width:"100%",
                                            }}
                                />
                        <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>

                        <Text style={style.paragraph}>
                        The computer started as a utilitarian tool but has now also been embraced as a social tool. Probably due to the popularity of the Internet, both young and old have found solace in computing devices everywhere. Playing this double role as a utility and an entertainment tool, the computer has become an integral part of our social fabric.
                        </Text>
                        <Text style={style.paragraph}>
                        Our focus in this lesson is on both the social and ethical effects of computer technology on people, whether we are at home, school, or work. We will focus on the social and economic dimensions of computing as a result of the “digital divide,” the workplace, workplace monitoring of employees, and the well-being of employees. 
                        </Text>
                        <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("L7L");
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
export default L7I;