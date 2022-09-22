import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L4L = () => {
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
                        navigation.navigate("T4");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
                <View>
                    <Text style={[styles.titletxt, {fontSize: 37}]}>Anonymity and the Internet </Text>

                    <Text style={[styles.paragraph, {marginTop: 16}]}>
                    The nature of the Internet, with its lack of political, cultural, religious, and judicial boundaries, has created a fertile ground for all faceless people to come out in the open. In particular, the Internet provides two channels through which anonymous acts can be carried out:
                    </Text>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>

                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Anonymous Servers</Text>  
                        </View>
                        <Text style={styles.paragraph}>
                            With advances in software and hardware, anonymity on the Internet has grown through anonymous servers. There are two types of anonymity servers: Full anonymity servers and pseudonym servers. Pseudonymous servers, which put pseudonym in forwarded packet headers, keeping the real identity behind a pseudonym, but being able to receive and forward all packets sent to the pseudonym to the real server.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>

                        <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Anonymous users </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        Another Internet channel to assure anonymity is for users to assume pseudonyms and use internet services such as bulletin boards, chat rooms, and social online networks anonymously. Sensitive and sometimes highly personal or classified information has been posted to popular user groups, news groups, online social networks, and chat rooms.
                        </Text>
                    </View>
                </View>



                <View>
                    <Text style={[styles.titletxt, {fontSize: 37}]}>Advantages of Anonymity </Text>

                   
                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>              
                        <Text style={styles.paragraph}>
                        Anonymity is good when a whistle-blower uses it to check unhealthy activities within the organization. Although whistle-blowers are controversial, they are good in a number of cases, especially when there is abuse of office and resources.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>              
                        <Text style={styles.paragraph}>
                        Anonymity is good in case of national security. So underground spies can gather information that is good for national defense.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>              
                        <Text style={styles.paragraph}>
                        Where there is intimidation and fear of reprisals, anonymity is good because useful information may be revealed.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>              
                        <Text style={styles.paragraph}>
                        Anonymity is good for some relationships and the security of some people. 
                        </Text>
                    </View>
                </View>


                <View>
                    <Text style={[styles.titletxt, {fontSize: 37}]}>Disadvantages of Anonymity </Text>

                   
                    <View  style={[styles.box, {backgroundColor:"#e5ffef", marginTop: 15}]}>              
                        <Text style={styles.paragraph}>
                        Criminals and embezzlers can use it to their advantage, especially in online social networks.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed", marginTop: 15}]}>              
                        <Text style={styles.paragraph}>
                        Lots of disputes could be solved if information from individuals party to these disputes can reveal the necessary information.
                        </Text>
                    </View>
                </View>

                
                <View>
                    <Text style={[styles.titletxt, {fontSize: 37}]}>Security </Text>

                    <Text style={[styles.paragraph, {marginBottom: 10}]}>
                    In general, security can be considered a means to prevent unauthorized access, use, alteration, and theft or physical damage to property. Security involves these three elements:
                    </Text>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>

                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Confidentiality </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        To prevent unauthorized disclosure of information to third parties. This is important in a number of areas including the disclosure of personal information such as medical, financial, academic, and criminal records.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed", marginTop:16}]}>

                        <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Integrity  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        To prevent unauthorized modification of files and maintain the status quo. It includes system, information, and personnel integrity. The alteration of information may be caused by a desire for personal gain or a need for revenge.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef", marginTop:16}]}>

                        <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Availability   </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        To prevent unauthorized withholding of information from those who need it when they need it.
                        </Text>
                    </View>
                </View>



                <View>
                    <Text style={[styles.titletxt, {fontSize: 33}]}>Types of Security </Text>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>
                            Physical Access Controls
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        To ensure physical security, a regime of access controls must be put in place. In physical access control, we create both physical barriers and electronic protocols that will authenticate the user of the resource whose security we are safeguarding.
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={[styles.bullet, {marginTop:-10}]}>
                            •   Physical Security Barriers
                            </Text>
                        </View>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>
                            Electronic Access Controls
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        With advances in technology, we are moving away, though not totally, from the physical barriers to more invasive electronic controls that include card access control systems and firewalls, and the third and probably the most important area, the inside, may be secured using electronic barriers such as:
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={[styles.bullet, {marginTop:-10}]}>
                            •   Passwords
                            </Text>
                            <Text style={[styles.bullet]}>
                            •   Bullets
                            </Text>
                        </View>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef", marginVertical:16, marginBottom:50}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>
                            Information Security Controls
                            </Text>
                        </View>

                        <Text style={styles.paragraph}>
                        Information security includes the integrity, confidentiality, and availability of information at the servers, including information in files and databases and in transition between servers and between clients and servers.
                        </Text>
                        <View style={styles.bulletbox}>
                            <Text style={[styles.bullet, {marginTop:-10}]}>
                            •   Encryption
                            </Text>
                            <Text style={[styles.bullet]}>
                            •   Authentication
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

export default L4L;