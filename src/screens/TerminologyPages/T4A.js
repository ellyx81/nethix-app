import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const T4A = () => {
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
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Information Matching - Linking individual records from different databases including driver’s records, vital statistics, Social Security administration, medical records, schools, work, and public local, county, state, and federal databases.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Informational Privacy - includes personal information, financial information, medical information, and internet.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Institutional Privacy -includes research data, the sales and product data, the marketing strategies, and the activities of the organization.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Interception of information - is unauthorized access to private information via eavesdropping, which occurs when a third party gains unauthorized access to a private communication between two or more parties.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Intrusion - is an invasion of privacy by wrongful entry, seizing, or acquiring possession of the property of others.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>M</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Misuse of Information – Businesses and governments collect information from us in exchange for services. This information is digital gold to companies. They mine the gold from us and sell it to the highest bidder.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>P</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Personal Privacy - include all types of intrusions including physical searches, video recording, and surveillance of any type.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed", marginBottom:50}]}>
                            <Text style={styles.paragraph}>
                            Privacy is a human attribute consisting of four elements of solitude, anonymity, intimacy, and reserve.
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

export default T4A;