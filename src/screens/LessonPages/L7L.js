import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L7L = () => {
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
                        navigation.navigate("T7");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
            <View>
                <Text style={styles.titletxt}>The Digital Divide</Text>
                
                    <Text style={[styles.paragraph, {marginTop:15}]}> The technological inequalities among people in one country and between countries, commonly known as the digital divide. The study of the digital divide involves the study of the impact of the digital divide indicators. </Text>  
                
                
                <View  style={[styles.box, {backgroundColor:"#e5ffef", marginTop:-5}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}>
                        Access 
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    Access involves obstacles that exist even if all the other remaining indicators are in place. Such obstacles may include, but are not limited to, costs involved in acquiring the technologies, availability of free or low-cost facilities in the neighborhood, the ability to travel to places where there are low-cost access points such as libraries and community centers, and having the capacity needed to utilize the technologies. These obstacles can broadly be grouped into five categories:
                    </Text>
                    <View style={styles.bulletbox}>
                        <Text style={styles.bullet}>
                        •   Geography
                        </Text>
                        <Text style={styles.bullet}>
                        •   Income
                        </Text>
                        <Text style={styles.bullet}>
                        •   Ethnicity
                        </Text>
                        <Text style={styles.bullet}>
                        •   Age
                        </Text>
                        <Text style={styles.bullet}>
                        •   Education
                        </Text>
                    </View>
                    
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}>
                        Technology 
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    The acquisition of technological skills and therefore the development of a good technological base depend a great deal on relevant inputs that include investment capital, infrastructure, and humanware (human capacity). However, the situation with the technology inputs and outputs is no better either. New technological innovations require huge amounts of money to be invested in research and development. The capital investment in technology is usually in the form:

                    </Text>
                    <View style={styles.bulletbox}>
                        <Text style={styles.bullet}>
                        •   Hardware
                        </Text>
                        <Text style={styles.bullet}>
                        •   Software 
                        </Text>
                    </View>
                    
                </View>

                <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}>
                        Humanware (Humanware Capacity) 
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    Even if we were to provide everyone on the globe with first-class ICT equipment, the reality would remain that only a few would be able to maintain and gainfully use the provided technologies. The first problem is the lack of humanware in developing counties to maintain the equipment. There is a shortage of teachers, technicians, and institutes to train them. The next challenge is to ensure that people can gainfully use ICT to add value to local inputs. People will take ICT seriously when it meets and serves their own local needs.

                    </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}>
                       Infrastructure 
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    In those countries with good fixed communication structures like electricity, telephones, good roads, and airports, ICT development is a lot faster. Lack of such resources hinders the development of ICT.

                    </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}>
                        Enabling Environments 
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                    There are many countries with similar levels of per capita incomes and economic structures exhibiting widely varying ICT performances. There are no good explanations for this except for the existence, or lack thereof, of enabling environments. An ICT-enabling environment is an environment in which ICT can thrive.
                    </Text>
                    <View style={styles.bulletbox}>
                        
                        <Text style={styles.bullet}>
                        •   Politics
                        </Text>
                        <Text style={styles.bullet}>
                        •   Public Policy
                        </Text>
                        <Text style={styles.bullet}>
                        •   Management Styles
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={[styles.titletxt]}>Obstacles to Overcoming the Digital Divide</Text>
                <Text style={styles.paragraph}>
                Minimizing the digital divide requires considerable efforts and a plan in addressing the following types of access:
                </Text>
                
                <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={[styles.subtitle,{marginTop:15}]}> 1.	Physical access</Text>  
                    </View>
                    <Text style={styles.paragraph}>
                    Which involves individuals being able to obtain access to computers, landlines, and networks in order to access the Internet
                    </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={[styles.subtitle,{marginTop:15}]}> 2.	Financial access</Text>  
                    </View>
                    <Text style={styles.paragraph}>
                    Having the means to meet the costs of ICT devices, traffic, applications, technician and educator training, software, maintenance, and infrastructures.
                    </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={[styles.subtitle,{marginTop:15}]}> 3.	Political access</Text>  
                    </View>
                    <Text style={styles.paragraph}>
                    Creating the political environment that enables a faster growth of the Internet and other digital inclusion technologies.
                    </Text>
                </View>

                <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={[styles.subtitle,{marginTop:15}]}> 4.	Cultural access</Text>  
                    </View>
                    <Text style={styles.paragraph}>
                    Availability of images and language to carry over the digital inclusion across different cultural lines.
                    </Text>
                </View>
            </View>



            <View>
                <Text style={[styles.titletxt]}>ICT in the Workplace</Text>
                    
                        <Text style={styles.paragraph}>
                        Despite the original fear that workplace automation would mean the end to human work, except in a few areas, workplace automation has proceeded hand in hand with increases in employment numbers. The introduction of computers into offices did not bring about any significant dismissal of personnel, nor did it result in a decline in the general level of employers. 
                        </Text>
                   

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={[styles.subtitle,{marginTop:15}]}> The Electronic Office</Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        We can define an electronic office as a technology-augmented office with knowledgeable employees. The technology in the environment may include computers and computer-driven devices that help in interpersonal oral and electronic communication; distribution and receipt of correspondence; telecommunication devices with text-processing and storage capabilities to enable the office staff to design, develop, edit, and store material electronically; and other office support equipment to streamline decision-making tasks.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={[styles.subtitle,{marginTop:15}]}> Office on Wheels and Wings</Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        As electronic gadgetry has been invading the office and the overall workplace, workers have been leaving the office in droves, a few of them replaced by the new technology, others transplanted by it, but many for the experience of working outside their original office confines. The advent of laptop computers, tablets, cellular phones, and personal digital assistants (PDAs) have accelerated the mobility of the office.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e5ffef"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={[styles.subtitle,{marginTop:15}]}> The Virtual Workplace</Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        With the latest developments in telecommunication and computer technology, the virtual workplace is home to increasing type of employees who work very briefly in their corporate workplaces, are mostly on the road, and often telecommute using personal or company-provided equipment.
                        </Text>
                    </View>
            </View>

            <View>
                <Text style={styles.titletxt}>Employee Social and Ethical Issues</Text>
                <Text style={styles.paragraph}>
                Within the context of office automation, the concept implies the idea of massive layoffs because offices with intelligent machines may require fewer people. Besides the fear of layoffs, workplace automation has also been plagued with the issue of deskilling.
                </Text>

                <View  style={[styles.box, {backgroundColor:"#e5ffef", marginBottom:50}]}>
                    <View style={styles.bulletbox}>
                        
                        <Text style={styles.bullet}>
                        •   Employee Monitoring
                        </Text>
                        <Text style={styles.bullet}>
                        •   Workplace Privacy and Surveillance
                        </Text>
                        <Text style={styles.bullet}>
                        •   Electronic Monitoring
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

export default L7L;