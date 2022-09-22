import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const T2 = () => {
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
                            Acceptable Use Policy - is a document that stipulates restrictions and practices that a user must agree to in order to use organizational computing and network resources.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>B</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Breach of Contract - occurs when one party fails to meet the terms of a contract.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Breach of the Duty of Care - is the failure to act as a reasonable person would act. A breach of duty might consist of an action, such as throwing a lit cigarette into a fireworks factory and causing an explosion, or a failure to act when there is a duty to do so—for example, a police officer not protecting a citizen from an attacker.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Bribery - is the act of providing money, property, or favors to someone in business or government in order to obtain a business advantage.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>C</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Client - is someone for whom a professional person or organization is providing a service or doing some work.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Code of Conduct - the most common policy within an organization. This policy lays out the company's principles, standards, and the moral and ethical expectations that employees and third parties are held to as they interact with the organization.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Compliance - means to be in accordance with established policies, guidelines, specifications, or legislation.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Confidential Information - describes a company and its operations, including sales and promotion plans, staffing projections, manufacturing processes, product formulas, tactical and strategic plans, and research and development.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>E</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Ethical - being in accordance with the rules or standards for right conduct or practice, especially the standards of a profession.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>F</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Firewall - is hardware or software (or a combination of both) that serves as the first line of defense between an organization’s network and the Internet; a firewall also limits access to the company’s network based on the organization’s Internet-usage policy.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Fraud - is the crime of obtaining goods, services, or property through deception or trickery. Fraudulent misrepresentation occurs when a person consciously decides to induce another person to rely and act on a misrepresentation
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>G</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Government License - is government-issued permission to engage in an activity or to operate a business. Most license activities that could result in damage to public health, safety, or welfare—if practiced by an individual who has not demonstrated minimal competence.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Internal Control - is the process established by an organization’s board of directors, managers, and IT systems people to provide reasonable assurance for the effectiveness and efficiency of operations, the reliability of financial reporting, and compliance with applicable laws and regulations.
                            </Text>
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            IT Worker - one who works for a company in their Information Technology department. 
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>L</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Law - the principles and regulations established in a community by some authority and applicable to its people, whether in the form of legislation or of custom and policies recognized and enforced by judicial decision. 
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>M</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Misrepresentation - is the misstatement or incomplete statement of a material fact. If the misrepresentation causes the other party to enter into a contract, that party may have the legal right to cancel the contract or seek reimbursement for damages.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>N</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Negligence - is defined as not doing something that a reasonable person would do or doing something that a reasonable person would not do.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>P</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Private data describe individual employees—for example, their salary information, attendance data, health records, and performance ratings. Private data also include information about customers—credit card information, telephone number, home address, and so on.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Professional - A professional is one who possesses the skill, good judgment, and work habits expected from a person who has the training and experience to do a job well.
                            </Text>
                            
                        </View>
                <View style={styles.letterbox}>
                    <Text style={styles.letter}>R</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Résumé Inflation - to include false or misleading information on one's resume to make oneself a more attractive candidate for a job. For example, claiming competence in an IT skill that is in high demand.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>S</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Software Piracy - is the illegal copy and use of software in a way other than that is officially documented by exclusive rights of the developer in the form of an individual or organization as described in the relevant sale agreement (license).
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Supplier - a person or organization that provides something needed such as a product or service.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>T</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Trade Secret - A trade secret is information, generally unknown to the public, that a company has taken strong measures to keep confidential. It represents something of economic value that has required effort or cost to develop and that has some degree of uniqueness or novelty.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>V</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Vendor - is the last entity in the chain that brands a product and sells it directly to end users or through a channel. 
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>W</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa", marginBottom: 50}]}>
                            <Text style={styles.paragraph}>
                            Whistleblowing - is an effort by an employee to attract attention to a negligent, illegal, unethical, abusive, or dangerous act by a company that threatens the public interest.
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

export default T2;