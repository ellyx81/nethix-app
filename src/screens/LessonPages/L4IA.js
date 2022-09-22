import React from 'react';
import {View,StyleSheet,Image,StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");


const L4IA = () => {   
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
                                source={require('../../images/intropics/05pcl.png')}
                                style={{height:"30%",
                                        width:"100%",
                                        }}
                            />
                    <Text style={{fontSize:20, textAlign:"center", marginTop:40, marginVertical: 20, color:"black"}}>Introduction</Text>
                    
                        <Text style={style.paragraph}>
                        Privacy is a human attribute consisting of four elements of solitude, anonymity, intimacy, and reserve. Each one of us possesses these elements as rights. 
                                    </Text>

                                    <Text style={style.paragraph}>
                                    Privacy, as we have defined it, is a basic human value that is at the core of human dignity and autonomy. However, this fundamental right is violated every day in many ways. While individual privacy rights have been violated for years, the advent 
        of the Internet has accelerated the rate and scale of violations.
                        </Text>

                    <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("L4LA");
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
export default L4IA;