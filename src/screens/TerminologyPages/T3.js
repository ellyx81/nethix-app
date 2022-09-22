import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const T3 = () => {
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
                            Advanced persistent threat (APT) is a network attack in which an intruder gains access to a network and stays there—undetected—with the intention of stealing data over a long period of time (weeks or even months).
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Antivirus software - it scans a computer’s memory and disk drives regularly for viruses.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Authentication Methods - To maintain a secure network, an organization must authenticate users attempting to access the network by requiring them to enter a username and password; inserting a smart card and entering the associated PIN; or providing a fingerprint, voice pattern sample, or retina scan.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>B</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Black hat hacker - Someone who violates computer or Internet security maliciously or for illegal personal gain. 
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Blended threat - is a sophisticated threat that combines the features of a virus, worm, Trojan horse, and other malicious code into a single payload.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>C</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Cracker - An individual who causes problems, steals data and corrupts systems.
                            </Text>
                        </View>
                        
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Cybercriminal - Someone who attacks a computer system or network for financial gain. 
                            </Text>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Cyberespionage - involves the deployment of malware that secretly steals data in the computer systems of organizations, such as government agencies, military contractors, political organizations, and manufacturing firms.
                            </Text>
                        </View>
                        
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Cyberterrorist - Someone who attempts to destroy the infrastructure components of governments, financial institutions, and other corporations, utilities, and emergency response units.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>D</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Data Encryption - used within applications to ensure that these sensitive data are protected from unauthorized access.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Disaster Recovery - is a documented process for recovering an organization’s business information system assets—including hardware, software, data, networks, and facilities—in the event of a disaster.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Distributed denial-of-service (DDoS) attack is one in which a malicious hacker takes over computers via the Internet and causes them to flood a target site with demands for data and other small tasks. it keeps the target so busy responding to a stream of automated requests that legitimate users cannot get in.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>E</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Encryption - is the process of scrambling messages or data in such a way that only authorized parties can read it.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>F</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Firewall - is a system of software, hardware, or a combination of both that stands guard between an organization’s internal network and the Internet and limits network access based on the organization’s access policy.
                            </Text>
                        </View>
                

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>H</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Hacktivist - An individual who hacks computers or websites in an attempt to promote a political ideology.
                            </Text>
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>I</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Industrial spy - An individual who captures trade secrets and attempts to gain an unfair competitive advantage.
                            </Text>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Intrusion detection system (IDS) - is software and/or hardware that monitors system and network resources and activities and notifies network security personnel when it detects network traffic that attempts to circumvent the security measures of a networked computer environment.
                            </Text>
                            
                        </View>

                 <View style={styles.letterbox}>
                    <Text style={styles.letter}>M</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Malicious insider - An employee or contractor who attempts to gain financially and/or disrupt a company’s information systems and business operations.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>P</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Phishing - the act of fraudulently using email to try to get the recipient to reveal personal data.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Proxy server and Virtual Private Networks - serves as an intermediary between a web browser and another server on the Internet that makes requests to websites, servers, and services on the Internet for you.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>R</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Regulatory Standards Compliance - your organization’s security program must include a definition of what those standards are and how the organization will comply.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Risk assessment - is the process of assessing security-related risks to an organization’s computers and networks from both internal and external threats.
                            </Text>
                        </View>
                        
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Rootkit is a set of programs that enables its user to gain administrator-level access to a computer without the end user’s consent or knowledge.
                            </Text>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Router - is a networking device that connects multiple networks together and forwards data packets from one network to another.
                            </Text>
                        </View>
                        

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>S</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Security Dashboard - provides a comprehensive display of all key performance indicators related to an organization’s security defenses, including threats, exposures, policy compliance, and incident alerts.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Security audit - evaluates whether an organization has a well-considered security policy in place and if it is being followed.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Security policy - an organization’s security requirements, as well as the controls and sanctions needed to meet 
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Security strategy - a disaster recovery plan that ensures the availability of key data and information technology assets.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Smishing - is another variation of phishing that involves the use of texting. In a smishing scam, people receive a legitimate-looking text message telling them to call a specific phone number or log on to a website.
                            </Text>
                            
                        </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Spam - is the use of email systems to send unsolicited email to large numbers of people.
                            </Text>
                        </View>
                        
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Spear phishing - is a variation of phishing in which the phisher sends fraudulent emails to a certain organization’s employees.
                            </Text>
                        </View>


                <View style={styles.letterbox}>
                    <Text style={styles.letter}>T</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Trojan horse - is a seemingly harmless program in which malicious code is hidden.
                            </Text>
                        </View>
                        

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>U</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            User Roles and Accounts - once users are authenticated, they have the authority to perform their responsibilities and nothing more.
                            </Text>
                            
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>V</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Virus - is a piece of programming code, usually disguised as something else, that causes a computer to behave in an unexpected and usually undesirable manner.
                            </Text>
                        </View>
                        
                        <View  style={[styles.box, {backgroundColor:"#f1e8fa"}]}>
                            <Text style={styles.paragraph}>
                            Vishing - is similar to smishing except that the victims receive a voice-mail message telling them to call a phone number or access a website.
                            </Text>
                        </View>

                <View style={styles.letterbox}>
                    <Text style={styles.letter}>W</Text>
                </View>
                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            White hat hacker - someone who has been hired by an organization to test the security of its information systems.
                            </Text>
                        </View>
                        

                        <View  style={[styles.box, {backgroundColor:"#f1e8fa", marginBottom: 50}]}>
                            <Text style={styles.paragraph}>
                            Worm - is a harmful program that resides in the active memory of the computer and duplicates itself.
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

export default T3;