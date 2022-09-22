import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const T6 = () => {
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
                    <Text style={styles.letter}>B</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Breach of Contract - A contract entered into between two or more parties and not performed as promised by either party can be considered breached by the party not in compliance.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>C</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Contract - a binding relationship between two or more parties.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>F</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Formal review - Presentation of the software product by a person more familiar with the product to others with competent knowledge of that product so they can critique the product and offer informed suggestions.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>H</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Hazard - is a state or set of conditions of a system or an object that, together with other conditions in the environment of the system, or object, will lead inevitably to an accident.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Inspection - Involves checking the known specific errors from past products and establishing additional facilities that may be missing in the product to bring the product up to acceptable standards.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>M</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Malpractice - is a type of negligence. It is applicable in cases involving services. Immoral, illegal; injurious or unprofessional; failure of a professional person. 
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Misrepresentation - may be intentionally done by the sales representative to induce the buyer to buy the product or it may be just a genuine mistake.
                            </Text>
                            
                        </View>
                        
                
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>N</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Negligence - can be used by the buyer to obtain benefits from the producer if there is provable evidence that the product lacked a certain degree of care, skill, and competence in the workmanship.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>P</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Phased inspection - It is an enhanced method combining formal review, inspection and walk-through methods by putting emphasis on the limitations of those methods.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>R</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Risk - is a hazard level together with the likelihood of an accident to occur and the severity of the potential consequences.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Risk management - is a process to estimate the impact of risk.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>S</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Service-level agreement (SLA) - is an official commitment that prevails between a service provider and a client.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Software - is a set of computer programs made up of a sequence of short commands called instructions that tell the computer what to do.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Software Buyers - or customers, obtain the finished software from the developer to satisfy a need, basing their decision on developer claims. The buyer may be an individual or a company.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Software Producer - or developer, creates or develops a set of programs to meet the specifications of a user, if there is a contract, or of a specific problem if it is a general software.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Strict Liability - the burden of proof of negligence is shifted to the producer, and the costs due to defects in the product are squarely in the hands of the producer.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>T</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Tort - is a wrong committed upon a person or property in the absence of a contract. A tort may include negligence, malpractice, strict liability, and misrepresentation.
                            </Text>
                            
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>W</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Walk-through - Requires code inspection line-by-line by a team of reviewers to detect potential errors. Each review session is followed by a discussion of the findings by the members of the review team, usually with the creators of the code present.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa", marginBottom:50}]}>
                            <Text style={styles.paragraph}>
                            Warranties are guarantees that the product or service will live up to its reasonable expectations.
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

export default T6;