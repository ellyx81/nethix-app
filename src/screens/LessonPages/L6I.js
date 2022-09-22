import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L6I = () => {   
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
                                    source={require('../../images/intropics/07sir.png')}
                                    style={{height:"30%",
                                            width:"100%",
                                            }}
                                />
                        <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>

                        <Text style={style.paragraph}>
                        Software is a set of computer programs made up of a sequence of short commands called instructions that tell the computer what to do. A software producer, or developer, creates or develops a set of programs to meet the specifications of a user, if there is a contract, or of a specific problem if it is a general software.
            Software buyers, or customers, obtain the finished software from the developer to satisfy a need, basing their decision on developer claims. The buyer may be an individual or a company.
            
                                
                            
                        </Text>
                        <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("L6L");
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
export default L6I;