import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L2L = () => {
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
                        navigation.navigate("T2");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
                <View>
                    <Text style={[styles.titletxt, {fontSize: 30}]}>IT Worker Relationships That Must Be Managed</Text>
                
                    
                    <View  style={[styles.box, {backgroundColor:"#e8f1fd",}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> 1. Relationships Between IT Workers and Employers</Text>  
                    </View>
                        <Text style={styles.paragraph}>
                        An IT worker and an employer typically agree on the fundamental aspects of this relationship before the worker accepts an employment offer. Other aspects of this relationship may be addressed in a company’s policy or in the company’s code of conduct.
                        </Text>
                        <View  style={[styles.box, {backgroundColor:"#e8f1fd",marginTop:-15}]}>
                            <Text style={styles.paragraph}>
                            These are some ethical challenges between IT workers and their employers:
                            </Text>
                            <Text style={styles.paragraph}>
                            1. Software Piracy
                            </Text>
                            <Text style={styles.paragraph}>
                            2. Trade Secrecy
                            </Text>
                            <Text style={styles.paragraph}>
                            3. Whistleblowing
                            </Text>
                        </View>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    <View style={styles.subtitlecon}>
                        <Text style={styles.subtitle}> 2. Relationships Between IT Workers and Clients </Text>  
                    </View>
                        <Text style={styles.paragraph}>
                        In relationships between IT workers and clients, each party agrees to provide something of value to the other. Finger-pointing and heated discussions about cost overruns, missed schedules, and technical incompetence can lead to charges of fraud, misrepresentation, and breach of contract.
                        </Text> 
                        
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> 3. Relationships Between IT Workers and Suppliers</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            IT workers can develop good relationships with suppliers by dealing fairly with them and not making unreasonable demands. Some examples of ethical challenges between IT workers and their employers include:
                            </Text> 
                            <View style={styles.bulletbox}>
                                <Text style={styles.bullet}>
                                •       Bribery
                                </Text> 
                                <Text style={styles.bullet}>
                                •       Internal Control
                                </Text> 
                            <Text style={styles.paragraph}>
                            IT workers should not accept a bribe from a vendor, and they must be careful when considering what is a bribe and what is a gift.
                            </Text>
                            </View>
                    
                        
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> 4. Relationships Between IT Workers and Other Professionals </Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Professionals have an interest in their profession as a whole, because how it is perceived affects how individual members are viewed and treated. One of the most common ethical problems can arise among members of the IT profession is résumé inflation. Professionals owe each other an adherence to the profession’s code of conduct.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> 5. Relationships Between IT Workers and IT Users </Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            IT users need the product to deliver organizational benefits or to increase their productivity. IT workers have a duty to understand a user’s needs and capabilities and to deliver products and services that best meet those needs—subject, of course, to budget and time constraints.
                            </Text> 
                            <Text style={styles.paragraph}>
                            IT workers also have a key responsibility to establish an environment that supports ethical behaviors by users.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> 6. Relationships Between IT Workers and Society </Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Laws establish safety standards for products and services to protect the public. Often, professionals can clearly see the effect their work will have and can take action to eliminate potential public risks. 
                            </Text> 
                            <Text style={styles.paragraph}>
                            Thus, society expects members of a profession to provide significant benefits and to not cause harm through their actions. One approach to meeting this expectation is to establish and maintain professional standards that protect the public.
                            </Text>
                    </View>
            </View>

            <View>
                    <Text style={[styles.titletxt, {fontSize: 32}]}>Encouraging the Professionalism of IT Workers </Text>
                
                    <Text style={styles.paragraph}>
                    Organizations — including many IT organizations—are desperately seeking workers who have the following characteristics of a professional:
                    </Text>


                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                    
                            <View style={styles.bulletbox}>
                                <Text style={styles.bullet}>
                                •	They are an expert in the tools and skills needed to do their job.
                                </Text>
                                <Text style={styles.bullet}>
                                •	They adhere to high ethical and moral standards.
                                </Text>
                                <Text style={styles.bullet}>
                                •	They produce high quality results
                                </Text>
                                <Text style={styles.bullet}>
                                •	They meet their commitments.
                                </Text>
                                <Text style={styles.bullet}>
                                •	They communicate effectively.
                                </Text>
                                <Text style={styles.bullet}>
                                •	They train and develop others who are less skilled or experienced.
                                </Text>
                            </View>
                        
                    </View>

                    <Text style={styles.paragraph}>
                        For an IT worker to become licensed raises some potential legal issues:
                    </Text>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>

                    
                            <View style={styles.bulletbox}>
                                <Text style={styles.bullet}>
                                •	Negligence
                                </Text>
                                <Text style={styles.bullet}>
                                •	Breach of Duty of Care
                                </Text>
                            </View>
                        
                    </View>

                    

                </View>


                
            <View>
                    <Text style={[styles.titletxt, {fontSize: 34}]}>Encouraging the Ethical Use of IT Resources Among Users </Text>
                
                    <Text style={styles.paragraph}>
                    These are some of the most common ethical issues that IT users face:
                    </Text>


                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                    
                            <View style={styles.bulletbox}>
                                <Text style={styles.bullet}>
                                •	Software Policy
                                </Text>
                                <Text style={styles.bullet}>
                                •	Inappropriate Use of Computing Resources
                                </Text>
                                <Text style={styles.bullet}>
                                •	Inappropriate Sharing of Information
                                </Text>
                            </View>
                        
                    </View>
                    
            </View>

            <View>
                    <Text style={[styles.titletxt, {fontSize: 34}]}>Supporting the Ethical Practices of IT Users </Text>
                

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Establishing Guidelines for Use of Company Hardware and Software</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Company IT managers must provide clear rules that govern the use of home computers and associated software. Some companies negotiate contracts with software manufacturers and provide PCs and software so that IT users can work at home.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Defining an Acceptable Use Policy</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            An acceptable use policy (AUP) is an essential information security policy. Members of the legal, human resources, and information security groups are involved in creating the AUP. It is the organization’s information security(infosec) group that is responsible for monitoring compliance to the AUP.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Structuring Information Systems to Protect Data and Information</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Organizations must implement systems and procedures that limit data access to just those employees who need it. Furthermore, they should be prohibited from accessing data about research and development results, product formulas, and staffing projections if they don’t need it to do their jobs.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>Installing and Maintaining a Corporate Firewall</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            A firewall can be configured to serve as an effective deterrent to unauthorized web surfing by blocking access to specific objectionable websites.
                            </Text> 
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd", marginBottom: 50}]}>
                    
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}>Compliance</Text>  
                        </View>
                            <Text style={styles.paragraph}>
                            Many organizations have implemented specialized software to track and record compliance actions, hired management consultants to provide advice and training on compliance issues, and even created a new position, the chief compliance officer (CCO), to deal with compliance-related issues.
                            </Text> 
                            
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
        marginTop:15
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

export default L2L;