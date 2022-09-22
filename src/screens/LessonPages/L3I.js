import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import Chapters from '../../screens/Chapters';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L3I = () => {   
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
                                source={require('../../images/intropics/03cac.png')}
                                style={{height:"30%",
                                        width:"100%",
                                        }}
                            />
                    <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>

                    <Text style={style.paragraph}>
                        The number of cybercrimes being committed against individuals, organizations, and governments continues to grow, and the destructive impact of these crimes is also intensifying. The brands, reputation, and earnings of many organizations around the world have been negatively impacted by such crimes. This lesson will explain why are computer incidents so prevalent and what are their effects, the things that can be done to implement a strong security program to prevent cyberattacks and detect basic logical fallacies in an argument and explain the actions to be taken in the event of a successful security intrusion. 
                            
                        
                    </Text>
                    <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("L3L");
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
export default L3I;