import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const T1 = () => {
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
                    <Text style={styles.letter}>A</Text>
                </View>

                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Accountability - the obligation to answer for the execution of one’s assigned responsibilities.
                            </Text>
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>C</Text>
                </View>
               
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Commitment - a promise or firm decision to do something. 
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Community code - A community standard code developed over a period of time based on either the religion or culture of the indigenous people in the area. It may be imposed by law or the culture of the community in which the professional works.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>D</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Dilemma - a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Discrimination - is a process of making decisions that negatively affect an individual, such as denial of a service, based wholly, or partly, upon the real or perceived facts of one’s race, religion, sex, sexual orientation, national origin, age, disability, political affiliation, marital status, or physical appearance.
                            </Text>
                            
                        </View>
                
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>H</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Harassment - to verbally or physically create an environment that is hostile, intimidating, offensive, severe, pervasive, or abusive.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Institutional code - A code imposed by the institution for which the professional is working. This code is meant to build and maintain the public’s confidence in the institution and its employees.
                            </Text>
                            
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Integrity - a state of undivided loyalty to self-belief.
                            </Text>
                            
                        </View>

                
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>P</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Personal code - A set of individual moral guidelines on which professionals operate. In many ways, these guidelines are acquired by professionals from the cultural environment in which they grow up or live in and the religious beliefs they may practice.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Profession - It is a trade, a business, or an occupation of which one professes to have extensive knowledge acquired through long years of experience and formal education.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Professional code - A set of guidelines provided to the professional by the profession spelling out what a professional ought to do and not do. A professional code protects both the image of the profession and that of the individual members.
                            </Text>
                            
                        </View>

                        
                 <View style={styles.letterbox}>
                    <Text style={styles.letter}>R</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Responsibility - deals with roles, tasks, and actions and their ensuing consequences do.
                            </Text>
                            
                        </View>
                
                
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>R</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa", marginBottom: 50}]}>
                            <Text style={styles.paragraph}>
                            Whistleblowing - occurs when an individual reports wrongdoing in an organisation, such as financial misconduct or discrimination.
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

export default T1;