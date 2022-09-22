import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L1L = () => {
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
                        navigation.navigate("T1");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>
                </View>
            <ScrollView>
        
            <View>
            <View>
                <Text style={styles.titletxt}>Requirements of a Professional</Text>
               
                
                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                <View style={styles.subtitlecon}>
                    <Text style={styles.subtitle}> 1. A set of highly developed skills and deep knowledge of the domain. </Text>  
                </View>
                    <Text style={styles.paragraph}>
                    Acquiring a sophisticated level of knowledge is 
                    crucial because skills based on shallow knowledge of the domain could be 
                    damaging to the profession in cases involving decisions that require 
                    understanding, analysis, and adoption of concepts to suit the environment or 
                    the problem.
                    </Text>
                    
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                <View style={styles.subtitlecon}>
                    <Text style={styles.subtitle}> 2. Autonomy </Text>  
                </View>
                    <Text style={styles.paragraph}>
                    Because professionals provide either products or services, there is
                    always a relationship between the provider of the service and the receiver of 
                    the service or the provider of the product and the receiver of the product. In this
                    relationship, we are concerned with the power balance. In the case of a 
                    professional, the power is in favor of the professional.
                    </Text> 
                </View>

                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> 3. Observance of a code of Conduct</Text>  
                    </View>
                        <Text style={styles.paragraph}>
                            A working professional usually observes these four types of codes:
                        </Text> 
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •       The Professional Code
                            </Text> 
                            <Text style={styles.bullet}>
                            •       A Personal Code
                            </Text> 
                            <Text style={styles.bullet}>
                            •       The Institutional Code
                            </Text> 
                            <Text style={styles.bullet}>
                            •       The Community Code
                            </Text> 
                        </View>
                   
                    
                </View>
            </View>
            

            
            <View>
                <Text style={styles.titletxt}>The Four Types of Codes</Text>
                        <Image
                                source={require('../../images/fourtypesofcodes-03.png')}
                                style={{alignSelf: "center",width:220,height:120}}
                        />

                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> The Professional Code</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        A set of guidelines provided to the professional by the profession spelling out what a professional ought to do and not do. A professional code protects both the image of the profession and that of the individual members
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> A Personal code</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        A set of individual moral guidelines on which professionals operate. In many ways, these guidelines are acquired by professionals from the cultural environment in which they grow up or live in and the religious beliefs they may practice.
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> The Institutional Code</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        A code imposed by the institution for which the professional is working. This code is meant to build and maintain the public’s confidence in the institution and its employees.
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> The Community Code</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        A community standard code developed over a period of time based on either the religion or culture of the indigenous people in the area. It may be imposed by law or the culture of the community in which the professional works.
                        </Text>
                </View>
                
            </View>

            
                       
            


            <View>
                <Text style={styles.titletxt}>Pillars of Professionalism</Text>
                        <Image
                                source={require('../../images/pillarsofprofessionalism-03.png')}
                                style={{alignSelf: "center",width:270,height:300}}
                        />


                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> Commitment</Text>  
                    </View>
                        <Text style={styles.paragraph}>
                        According to Humphreys, has these six characteristics:
                        </Text> 
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •       The person making the commitment must do so willingly without pressure.
                            </Text> 
                            <Text style={styles.bullet}>
                            •       The person responsible must try to meet the commitment, even if help is needed.
                            </Text> 
                            <Text style={styles.bullet}>
                            •       There must be agreement on what is to be done, by whom, and when.
                            </Text> 
                            <Text style={styles.bullet}>
                            •       The commitment must be openly and publicly stated.
                            </Text> 
                            <Text style={styles.bullet}>
                            •       The commitment must not be made easily.
                            </Text> 
                            <Text style={styles.bullet}>
                            •       Prior to the committed date, if it is clear, it cannot be met, advance notice must be given, 
                            </Text> 
                        </View>
                </View>


                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> Integrity</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        To stay undivided in one’s beliefs professionally requires three maxims of integrity, namely, vision, love of what one is doing, and commitment to what one has to do.
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> Responsibility</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        Responsibility depends on a person's value system, which is based on his or her environment and culture. There are various types of responsibilities, including personal, communal, parental, and professional, and these responsibilities vary depending on the age of the individual and his or her position in society.
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> Accountability</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                    Accountability is the obligation to answer for the execution of one’s assigned responsibilities. This process involves a cycle of setting measurableoutcomes and achievable goals, planning what needs to be done to meet those goals, reporting progress toward goals, evaluating the reports, and using that feedback to make improvements.
                        </Text>
                </View>
            </View>

            


            <View>
                <Text style={styles.titletxt}>Professional Dilemma in Decision Making</Text>
                <Text style={styles.paragraph}>
                Dilemmas in decision making are quite common in the everyday activities of professional. The process of decision making resembles a mapping with input parameters and an output decision
                </Text>


                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> Advances in Technology</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        Dilemmas in decision making may also be caused by advances in technology. Computer technology in particular has created more muddles in the decision-making process than any other technology.
                        </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={[styles.subtitle, {textAlign: "center"}]}> Incomplete or Misleading Information</Text>  
                    </View>

                        <Text style={styles.paragraph}>
                        There are similar situations in professional life when a decision has to be made without enough information available and within time constraints. In such a situation, the professional must take extra care to weigh all possibilities in the input set of premises and their corresponding values. 
                        </Text>
                </View>
                <Text style={[styles.paragraph, {marginTop: 15}]}>
                Although decisions are based on the outcome of an individual’s deliberations, considering all input parameters and attaching values to these premises calls for a thorough examination of each premise by the individual. This process is aided by the individual reflecting on these basic steps:
                </Text>
                <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            1. Examining the ethically relevant issues, principles, standards, and practices
                            </Text> 
                            <Text style={styles.bullet}>
                            2. Determining the different parties (and their special interests) who will be affected by the decision
                            </Text> 
                            <Text style={styles.bullet}>
                            3. Deciding on an alternative course of action if and when the outcome of the decision is not what is expected
                            </Text> 
                            <Text style={styles.bullet}>
                            4. Considering the probable consequences (short and long term) of each alternative on each of the different parties involved.
                            </Text> 
                            <Text style={styles.bullet}>
                            5. Thinking of consulting with a trusted colleague if the situation is complex, risky, or there is undue personal involvement.
                            </Text> 
                            <Text style={styles.bullet}>
                            6. Determining how personal values, biases, beliefs, or self-interests influenced the decision (either positively or negatively) and whether the consequences of the decision have been evaluated 
                            </Text> 
                            <Text style={styles.bullet}>
                            7. Being prepared to assume responsibility for the consequences of the action including correction of negative consequences.
                            </Text> 
                        </View>
                </View>
                
            </View>

            <View>
            <Text style={[styles.titletxt, {fontSize: 28}]}>Ethical Challenges of a Professional</Text>
               
                
                <View  style={[styles.box, {backgroundColor:"#ededed",marginBottom:65}]}>
                
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •       Whistleblowing
                            </Text> 
                            <Text style={styles.bullet}>
                            •       Harassment
                            </Text> 
                            <Text style={styles.bullet}>
                            •       Discrimination
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
        fontSize:25,
        width:350,
        paddingTop: 20,
        alignSelf:"center",
        textAlign:"center"
    },
    box: {
       
        marginHorizontal:10,
        borderRadius:20,
        paddingVertical:15,
        marginTop:16
        //marginHorizontal: 15
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

export default L1L;