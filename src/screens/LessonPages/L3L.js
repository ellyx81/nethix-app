import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L3L = () => {
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
                        navigation.navigate("T3");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
            <View>
                
                
            <View>
                    <Text style={[styles.titletxt, {fontSize: 34}]}>Why Computer Incidents are So Prevalent? </Text>
                

                    <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Increasing Complexity Increases Vulnerability</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Computing environments have become enormously complex. This environment continues to increase in complexity every day. The number of possible entry points to a network expands continually as more devices are added, increasing the possibility of security breaches.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Expanding and Changing Systems Introduce New Risk</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Information technology has become ubiquitous and is a necessary tool for organizations to achieve their goals. However, it is increasingly difficult for IT organizations to keep up with the pace of technological change, successfully perform an ongoing assessment of new security risks, and implement approaches for dealing with them. 
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Increasing Prevalence of Bring Your Own Device (BYOD) Policies</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Most companies have found they cannot entirely prevent employees from using their own devices to perform work functions. This practice raises many potential security issues as it is highly likely that such devices are also used for nonwork activity that exposes them to malware much more frequently than a device used strictly for business purposes.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>Growing Reliance on Commercial Software with Known Vulnerabilities</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            The NVD (National Vulnerability Database) holds 21, 957 vulnerabilities published in 2021. This is higher number than in previous years (18, 362 in 2020, 17,382 in 2019, and 17, 252 in 2018). 
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>Increasing Sophistication of Those Who Would Do Harm</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            The stereotype of a computer troublemaker was that of an introverted “geek” working on his or her own, but in reality, there were different types of perpetrators of computer crime: black hat hacker, cracker, malicious insider, industrial spy, cybercriminal, hacktivist and cyberterrorist.
                            </Text> 
                            
                    </View>
            </View>

        </View>


        <View>
            <Text style={[styles.titletxt, {fontSize: 32}]}>The CIA Security Triad </Text>
        
            <Text style={styles.paragraph}>
            The key to prevention of a computer security incident is to implement a layered security solution to make computer break-ins so difficult that an attacker eventually gives up or is detected before much harm is inflicted. 
            </Text>
            <Text style={styles.paragraph}>
            In a layered solution, if an attacker breaks through one layer of security, another layer must then be overcome.
            </Text>
            <Text style={styles.paragraph}>
            Confidentiality, integrity, and availability are referred to as the CIA security triad.
            </Text>

            <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>

                <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Implementing CIA at the Organizational Level</Text>  
                </View>
                        
                    <Text style={styles.paragraph}>
                    Implementing CIA begins at the organization level with the definition of: 
                    </Text>
                    <View style={styles.bulletbox}>
                        <Text style={styles.bullet}>
                        •   Software Piracy
                        </Text>
                        <Text style={styles.bullet}>
                        •   Risk Assessment
                        </Text>
                        <Text style={styles.bullet}>
                        •   Disaster Recovery
                        </Text>
                        <Text style={styles.bullet}>
                        •   Security Policies
                        </Text>
                        <Text style={styles.bullet}>
                        •   Security Audit
                        </Text>
                        <Text style={styles.bullet}>
                        •   Regulatory Standards Compliance
                        </Text>
                        <Text style={styles.bullet}>
                        •   Security Dashboard
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    Completion of these tasks at the organizational level will set a sound foundation and clear direction for future CIA-related actions.
                    </Text>
            </View>



            <View  style={[styles.box, {backgroundColor:"#ededed"}]}>

                <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Implementing CIA at the Network Level</Text>  
                </View>
                        
                    <Text style={styles.paragraph}>
                    Unauthorized network access by a hacker or resentful employee can result in compromised sensitive data and 
severely degrade services, with a resulting negative impact on productivity and operational capability. 

                    </Text>
                    <View style={styles.bulletbox}>
                        <Text style={styles.bullet}>
                        •   Authentication Methods
                        </Text>
                        <Text style={styles.bullet}>
                        •   Firewall
                        </Text>
                        <Text style={styles.bullet}>
                        •   Routers
                        </Text>
                        <Text style={styles.bullet}>
                        •   Encryption
                        </Text>
                        <Text style={styles.bullet}>
                        •   Proxy Servers and Virtual Private Networks
                        </Text>
                        <Text style={styles.bullet}>
                        •   Intrusion Detection System
                        </Text>
                    </View>
                    
            </View>



            <View  style={[styles.box, {backgroundColor:"#fde8f7"}]}>

                            <View style={styles.subtitlecon}>
                                        <Text style={styles.subtitle}> Implementing CIA at the Application Level</Text>  
                            </View>
                                    
                                <Text style={styles.paragraph}>
                                These elements must be in place to ensure that only authorized users have access to the organization’s applications and data and that their access is limited to actions that are consistent with their defined roles and responsibilities:

                                </Text>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •   Authentication Methods
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   User Roles and Accounts
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Data Encryption
                                    </Text>
                                </View>
                                
                        </View>


                    
        
            <View  style={[styles.box, {backgroundColor:"#ededed",marginBottom:50}]}>

                <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Implementing CIA at the End-User Level</Text>  
                </View>
                        
                    <Text style={styles.paragraph}>
                    These things must all be in place to protect what is often the weakest link in the organization’s security perimeter—the individual end-user.
                    </Text>
                    <View style={styles.bulletbox}>
                        <Text style={styles.bullet}>
                        •   Security Education
                        </Text>
                        <Text style={styles.bullet}>
                        •   Authentication Methods
                        </Text>
                        <Text style={styles.bullet}>
                        •   Antivirus Software
                        </Text>
                        <Text style={styles.bullet}>
                        •   Data Encryption
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
        marginTop: 15
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

export default L3L;