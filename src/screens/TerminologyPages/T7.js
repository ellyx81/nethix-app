import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const T7 = () => {
    const navigation = useNavigation();
    return(
        
        <View style={styles.containerTop}>
            
            <TouchableOpacity
                       onPress={() => {
                        navigation.goBack();
                    }}
                        style={styles.backbtn}
                    >
                            <MaterialCommunityIcons name="arrow-left-box" style={styles.icons}/>
            </TouchableOpacity>

            <ScrollView>
        
            <View>
            
                <Text style={styles.titletxt}>WHAT IS...?</Text>
                
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>D</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Digital Divide - The technological inequalities among people in one country and between countries.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Deskilling - stripping an employee of job skills as a result of changes either in job content or procedures.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>E</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Electronic Office - a technology-augmented office with knowledgeable employees.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>H</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Humanware - as hardware or software that is built around user capabilities and user needs.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa", marginBottom:300}]}>
                            <Text style={styles.paragraph}>
                            ICT- or information and communications technology (or technologies), is the infrastructure and components that enable modern computing.
                            </Text>
                            
                        </View>
                


            </View>

            
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTop:{
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:13,
        
        
    },
    backbtn: {
        //paddingHorizontal:10,
      //  paddingVertical:13,
        borderRadius:10,
        marginTop:20,
       // backgroundColor:"white",
        width: 50,
       // marginLeft:-10, 
    },
    icons: {
        color: "#323657",
        fontSize: 50,
      //  opacity: 0.8
    },
    letterbox: {
       // alignSelf: "center",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:10,
        marginTop:16,
        backgroundColor:"white",
        width: 60,
        marginLeft:10, 
        
    },
    letter: {
        color: "#323657",
        fontSize: 35,
        marginLeft:4, 
        //padding:5
    },
    titletxt1: {
        color:"#323657",
        fontFamily:"Bold",
        fontSize:30,
        width:350,
        alignSelf:"center",
        textAlign:"center",
        paddingTop: 30,
    },
    titletxt: {
        color:"#323657",
        fontFamily:"Bold",
        fontSize:25,
        width:350,
        paddingTop: 20,
        alignSelf:"center",
        textAlign:"center"
    },
    box: {
        marginTop:10,
       // marginBottom: 6,
        marginHorizontal:10,
        borderRadius:20,
        paddingVertical:15,
    },
    subtitlecon: {
       
        //alignItems:"center",
        alignSelf:"center",
       //width:265,
         paddingVertical:10,
      //  borderRadius:14,
        paddingHorizontal:10
    },
    subtitle: {
        color:"#345c74",
        fontFamily:"Bold",
        fontSize:18,
        textAlign: "left"
    },
    paragraph: {
        color:"#345c74",
        paddingTop: 5,
        fontFamily:"Medium",
        textAlign:"justify",
        paddingHorizontal: 15,

    },
    
})

export default T7;