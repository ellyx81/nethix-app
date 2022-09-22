import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L4LA = () => {
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
                        navigation.navigate("T4A");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>


                </View>
            <ScrollView>
        
            <View>



                <View>
                    <Text style={[styles.titletxt, {fontSize: 30}]}>Privacy</Text>
                        <Text style={styles.paragraph}>
                            Privacy is a human attribute consisting of four elements of solitude, anonymity, intimacy, and reserve. Each one of us possesses these elements as rights. We put these rights into two categories:
                        </Text>
                    
                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> 1.	Control of external influences </Text>
                            </View>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •	Solitude: The right to be alone without disturbances
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Anonymity: The right to have no public personal identity
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Intimacy: The right not to be monitored
                                    </Text>
                                </View>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> 2.	Control of Personal Information </Text>
                            </View>
                            
                            <View style={styles.bulletbox}>
                                <Text style={styles.bullet}>
                                •	Reserve - The right to control one’s personal information including the methods of dissemination of that information. 
                                </Text>
                               
                            </View>
                        </View>
                </View>

                <View>
                    <Text style={[styles.titletxt, {fontSize: 30}]}>Types of Privacy</Text>
                        
                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                    
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •	Personal Privacy 
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Informational Privacy 
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Institutional Privacy 
                                    </Text>
                                </View>
                        </View>
                </View>




                <View>
                    <Text style={[styles.titletxt, {fontSize: 30}]}>Value of Privacy </Text>
                
                    <Text style={[styles.paragraph, {marginTop:16}]}>
                         Privacy has traditionally been perceived as valuable and has even gained more importance in the information age because it guards an individual’s personal identity, preserves individual autonomy, and makes social relationships possible.
                    </Text>


                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Personal Identity </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            Personal identity is valuable because it enshrines personal privacy. Unfortunately, with rapid advances in technology, especially computer technology, it has become increasingly difficult to protect personal identity.
                            </Text>
                            
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> Autonomy </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            The less personal information people have about an individual, the more autonomous that individual can be, especially in decision making. However, other people will challenge one’s autonomy depending on the quantity, quality, and value of information they have about that individual.
                            </Text>
                            
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>Social Relationships </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            In societies where there are no arranged marriages, the parties involved usually spend a period of time dating. The dating time is spent collecting as much information as possible about each other. The couple then uses this information to make a decision about marrying. 
                            </Text>
                            
                        </View>

                    <Text style={[styles.paragraph, {marginTop: 15}]}>
                    However in these days in the information age, the value of privacy has been eroded. We can no longer guarantee our privacy. It has left many wondering whether there is such a thing as privacy any more.
                    </Text>

                </View>


                
                <View>
                    <Text style={[styles.titletxt, {fontSize: 34}]}>Privacy Implications of Database Systems </Text>
                        
                    <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                        <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>Information Gathering  </Text>
                        </View>
                        <Text style={styles.paragraph}>
                        Have you paid enough attention to the number of junk mail, telephone calls during dinner, and junk emails you have been getting? If so, you may have thought about who has your name on a list and what they’re doing with it. Many companies you have done business with may have sold or shared your personal information to other companies, and tracing the source may be difficult. 
                        </Text>
                        
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                           <Text style={styles.paragraph}>
                                In many cases, we do not preserve our privacy. We have helped information seekers like companies in gathering and databasing information from us. We do this every time we apply for discount cards from grocery stores, gas stations, and merchandise stores; every time we fill out information on little cards to enter contests; and every time we give out our Social Security number and telephone numbers to store clerks in department stores. 
                           </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                           <Text style={styles.paragraph}>
                           The information they collect from us is put into databases and is later sold to the highest bidder, usually a marketer.
                           </Text>
                    </View>
                    
                </View>




                <View>
                    <Text style={[styles.titletxt, {fontSize: 30}]}>Privacy Violations and Legal Implication</Text>
                        <Text style={styles.paragraph}>
                        Privacy, as we have defined it, is a basic human value that is at the core of human dignity and autonomy. However, this fundamental right is violated every day in many ways. While individual privacy rights have been violated for years, the advent of the Internet has accelerated the rate and scale of violations. 
                        </Text>
                    
                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                            <Text style={styles.paragraph}>
                          There are numerous contributing factors or causes of violations. Let us look at some here:
                            </Text>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    1.  Consumers willingly give up information about themselves when they register at Web sites, shopping malls in order to win prizes, and in mailing solicitations.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    2.  Consumers lack the knowledge of how what they consider a little bit of information can turn into a big invasion of privacy.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    3.	Inadequate privacy policies.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    4.	Failure of companies and institutions to follow their own privacy policies.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    5.	Internet temptation that enables businesses to reach individuals in a very short time in the privacy of their homes and offices.
                                    </Text>
                                </View>
                        </View>


                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            Other privacy violations include:
                            </Text>
                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                    •	Intrusion
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Misuse of information
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Interception of information 
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •	Information matching.
                                    </Text>
                                    
                                </View>
                        </View>

                        
                </View>





                <View>
                    <Text style={[styles.titletxt, {fontSize: 36}]}>Privacy Protection and Civil Liberties </Text>
                        <Text style={styles.paragraph}>
                        Personal privacy is a basic civil liberty that must be protected like any other civil liberty such as the right to free speech. 
                        </Text>

                        <Text style={styles.paragraph}>
                        In many countries, there are guidelines and structures that safeguarded and protected privacy rights. These structures and guidelines, on the average, fall under the following categories:
                        </Text>


                        <View  style={[styles.box, {backgroundColor:"#ffece5"}]}>
                        
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> 1. Technical</Text>  
                            </View>
                                <Text style={styles.paragraph}>
                                Through the use of software and other technically based safeguards and also by education of users and consumers to carry out self-regulation.
                                </Text> 

                                <View style={styles.bulletbox}>
                                    <Text style={styles.bullet}>
                                        a.	Do not reveal personal information inadvertently.
                                    </Text>
                                    <Text style={styles.bullet}>
                                        b.	Turn on cookie notices in your Web browser, and/or use cookie management software or infomediaries.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    c.	Keep a “clean” email address.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    d.	Don’t reveal personal details to strangers or just-met “friends.”
                                    </Text>
                                    <Text style={styles.bullet}>
                                    e.	Realize you may be monitored at work. Avoid sending highly personal emails to mailing lists, and keep sensitive files on your home computer.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    f.	Beware of sites that offer some sort of reward or prize in exchange for your contact or other information.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    g.	Do not reply to spammers, for any reason.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    h.	Be conscious of Web security.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    i.	Be conscious of home computer security.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    j.	Examine privacy policies and seals.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    k.	Remember that you alone decide what information about yourself to reveal—when, why, and to whom.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    l.	Use encryption!
                                    </Text>

                                </View>
                                
                        </View>



                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> 2.	Contractual</Text>  
                            </View>
                                <Text style={styles.paragraph}>
                                Through determination of which information such as electronic publication, and how such information is disseminated, is given contractual and technological protection against unauthorized reproduction or distribution. Contractual protection of information, mostly special information like publications, is good only if actions are taken to assure contract enforceability.
                                </Text> 
                                
                        </View>



                        <View  style={[styles.box, {backgroundColor:"#ffece5",marginBottom: 50}]}>
                        
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}> 3.	Legal</Text>  
                            </View>
                                <Text style={styles.paragraph}>
                                Through the enactment of laws by national legislatures and enforcement of such laws by the law enforcement agencies.
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
        marginTop:15,
        marginHorizontal:10,
        borderRadius:20,
        paddingVertical:15,
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
        textAlign: "center",
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

export default L4LA;