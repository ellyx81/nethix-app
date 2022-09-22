import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import Chapters from '../../screens/Chapters';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("window");


const L2I = () => {   
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
                                source={require('../../images/intropics/02eiwiu.png')}
                                style={{height:"30%",
                                        width:"100%",
                                        }}
                            />
                    <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>

                    <Text style={style.paragraph}>
                    IT workers typically become involved in many different work relationships, including those with employers, clients, suppliers, other professionals, IT users, and society at large. In each relationship, an ethical IT worker act honestly and appropriately. This section also discusses some of the most common ethical issues that IT users face, as well as ways that organizations can encourage the ethical use of IT by their employees.
                            
                        
                    </Text>
                    <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("L2L");
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
export default L2I;