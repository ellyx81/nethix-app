import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const L6L = () => {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
            <View style={styles.containerTop}>
            <TouchableOpacity
                       onPress={() => {
                        navigation.goBack();
                    }}
                        style={styles.backbtn}
                    >
                            <MaterialCommunityIcons name="arrow-left-box" style={styles.icons}/>
                    </TouchableOpacity>

			<TouchableOpacity
                       onPress={() => {
                        navigation.navigate("T6");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
                <View>
                    <Text style={styles.titletxt}>Standards</Text>
                    <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                        <Text style={styles.paragraph}>
                        Software developers must convey to buyers’ satisfaction that their products are of high quality. The buyer, however, has little leverage in disputing the claims of the developer in these areas because there is no single universally acceptable and agreed upon measure of software standards.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <Text style={styles.paragraph}>
                        There is no one criterion that can be used to measure software standards but rather a collection of criteria such as development testing, verification and validation of software, and the programmer’s professional and ethical standards:
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •	Reliability
                            </Text>
                            <Text style={styles.bullet}>
                            •	Security
                            </Text>
                            <Text style={styles.bullet}>
                            •	Safety
                            </Text>
                            <Text style={styles.bullet}>
                            •	Quality
                            </Text>
                        </View>
                        
                    </View>
                    </View>

                <View>
                    <Text style={styles.titletxt}>Causes of Software Failures</Text>
                        <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Human Factors</Text>  
                            </View>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •   Memory lapses and attentional failures
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Rush to finish
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Overconfidence and use of nonstandard or untested algorithms
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Malice
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Complacency
                                    </Text>
                                </View>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Nature of Software: Complexity</Text>  
                            </View>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •   Complexity
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Difficult testing
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Ease of programming
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Misunderstanding of basic design specifications
                                    </Text>
                                </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.titletxt}>
                        Risk
                    </Text>
                        <Text style={styles.paragraph}>
                        Software risks, have causes and effects. Among the causes of software risks are poor software design, a mismatch of hardware–software interfaces, poor support, and maintenance. Others include:
                        </Text>
                            <View style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •   Personnel shortfalls
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Unrealistic schedules and budgets
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Developing the wrong functions and properties
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Developing the wrong user interface
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Continuing stream of requirement changes
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Shortfalls in externally furnished components
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Shortfalls in externally performed tasks
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Real-time performance shortfalls
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Straining computer science capabilities
                                    </Text>
                                </View>
                            </View>
                </View>

                <View>
                    <Text style={styles.titletxt}>
                    Risk Assessment and Management
                    </Text>

                    <View style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                        <Text style={styles.paragraph}>
                        Risk is an important aspect of the design process. Because it is so important, two constituent components must be included. These are assessment and control.
                        </Text>
                    </View>

                    <View style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <Text style={styles.paragraph}>
                        The assessment aspects in the documentation should involve a list of all the potential dangers that are likely to affect the project, the probability of occurrence and potential loss of each item, and how each item ranks among all the listed items.
                        </Text>
                    </View>

                    <View style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                        <Text style={styles.paragraph}>
                        The control component in the documentation should consist of:
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •   Techniques and strategies to mitigate the highest ordered risks
                            </Text>
                            <Text style={styles.bullet}>
                            •   Implementation of the strategies to resolve the high-order risks factors
                            </Text>
                            <Text style={styles.bullet}>
                            •   Monitoring the effectiveness of the strategies and the changing levels of risk throughout the design process
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <Text style={styles.paragraph}>
                        After the design process, when software is in use, risk management then involves the following phases: 
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                           1.   Assessment
                            </Text>
                            <Text style={styles.bullet}>
                            2.  Planning
                            </Text>
                            <Text style={styles.bullet}>
                            3.  Implementation
                            </Text>
                            <Text style={styles.bullet}>
                            4.  Monitoring
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.titletxt}>
                        Consumer Protection
                    </Text>
                    <View style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                        <View style = {styles.subtitlecon}>
                            <Text style = {styles.subtitle}>
                            1.  Buyer and Provider Rights
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        A service-level agreement (SLA) is an official commitment that prevails between a service provider and a client. Particular aspects of the service— quality, availability, and responsibilities—are agreed between the service provider and the service user.
                        </Text>
                    </View>
                    <View style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style = {styles.subtitlecon}>
                            <Text style = {styles.subtitle}>
                            2.  A Service Provider-User Contract
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        Lawyers define a contract as a binding relationship between two or more parties. Mutual consent is a meeting of the minds on issues such as the price bargained or agreed upon, the amount paid or promised to be paid, and any agreement enforceable by law. In contract laws, a service provider/developer can be sued for breach of contract. 
                        </Text>

                        <Text style={styles.paragraph}>
                        Warranties are guarantees that the product or service will live up to its reasonable expectations. Some warranties are not specifically written down but are implied, whereas others are merely expressed either orally or in some other form.
                        </Text>
                    </View>
                    <View style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                        <View style = {styles.subtitlecon}>
                            <Text style = {styles.subtitle}>
                            3.  The Tort Option 
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        If a buyer cannot seek benefits from the producer through contracts laws, another avenue of legal action is through tort. A tort is a wrong committed upon a person or property in the absence of a contract. A tort may include:
                        </Text>

                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                           1.   Negligence 
                            </Text>
                            <Text style={styles.bullet}>
                            2.  Malpractice
                            </Text>
                            <Text style={styles.bullet}>
                            3.  Strict Liability
                            </Text>
                            <Text style={styles.bullet}>
                            4.  Misrepresentation
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        The problem of software quality cannot be solved by courts alone. Software producers must themselves do more to ensure software quality and hence safety.
                        </Text>
                    </View>

                    <View style={[styles.box, {backgroundColor:"#ededed", marginBottom:50}]}>
                        <View style = {styles.subtitlecon}>
                            <Text style = {styles.subtitle}>
                            4.	Techniques for Improving Software Quality 
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        Reputable software standards, reliability of software, and software safety depend greatly on the quality of the software. Software quality can be improved through these innovative new review techniques:
                        </Text>

                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                           1.   Formal Review 
                            </Text>
                            <Text style={styles.bullet}>
                            2.  Inspection
                            </Text>
                            <Text style={styles.bullet}>
                            3.  Walk-through
                            </Text>
                            <Text style={styles.bullet}>
                            4.  Phased Inspection
                            </Text>
                        </View>
                    </View>
                </View>


            
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:20,
        
    },
    containerTop: {
        flexDirection:"row",
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:20,
    },
    
    backbtn: {
        //paddingHorizontal:10,
    //  paddingVertical:13,
        borderRadius:10,
        marginTop:20,
    // backgroundColor:"white",
        width: 50,
    },
    bookbtn: {
    // paddingHorizontal:10,
    //    paddingVertical:13,
        borderRadius:10,
        marginTop:20,
        backgroundColor:"white",        
        marginLeft:230
    },
    icons: {
        color: "#323657",
        fontSize: 50
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
        fontSize:30,
        width:350,
        paddingTop: 20,
        alignSelf:"center",
        textAlign:"center"
    },
    box: {
       marginTop:15,
        marginHorizontal:10,
        borderRadius:20,
        paddingVertical:15,
      //  backgroundColor:"#f1e8fa"
        
    },
    subtitlecon: {
       
        //alignItems:"center",
        alignSelf:"center",
       //width:265,
       //  paddingVertical:10,
      //  borderRadius:14,
        paddingHorizontal:10,
        marginTop: -10
    },
    subtitle: {
        color:"#345c74",
        fontFamily:"Bold",
        fontSize:18,
        textAlign: "left",
        margin: 13,
        
    },
    paragraph: {
        color:"#345c74",
        paddingTop: 5,
        fontFamily:"Medium",
        textAlign:"justify",
        paddingHorizontal: 15,

    },
    bullet: {
        color:"#345c74",
        marginLeft: 10,
        paddingTop: 5,
        fontFamily:"Medium",
        textAlign:"justify",
        paddingHorizontal: 15,

    },
    bulletbox: {
        marginTop: 10
    }
    
})

export default L6L;