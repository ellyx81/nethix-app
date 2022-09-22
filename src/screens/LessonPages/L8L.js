import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L8L = () => {
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
                        navigation.navigate("T8");
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
                        <Text style={styles.titletxt}>Cyberstalking</Text>
                        
                        <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <Text style={styles.paragraph}>
                            Cyberstalking, a cousin of cyberbullying then, is digital stalking, usually using online media. Cyberstalking comes in many versions including but not limited to sending threatening messages to the victim, monitoring the victim, extortion, false accusations, altering a victim’s information, identity theft, and the list goes on. The actions of a cyber stalker are usually repeated, persistent, and often illegal.
                            </Text>
                        </View>

                        <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <Text style={styles.paragraph}>
                            As Mariam Merritt notes in her “Straight Talk About Stalking” essay, what is interesting and of course disturbing is that it is often perpetrated not by strangers, but by someone known by the victim.
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.titletxt]}>Cyber Harrassment</Text>
                        <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <Text style={styles.paragraph}>
                            According to Merriam-Webster’s dictionary, to harass is to continuously and persistently annoy someone: to create an unpleasant or hostile environment for an individual, especially by uninvited and unwelcome verbal or physical conduct and also to make repeated attacks against a victim. When these acts are done by someone or a group of people using online digital technology, then we have cyber harassment.
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.titletxt}>
                    Types of Cyberbullying
                    </Text>
                    <Text style={styles.paragraph}>
                    Because of the flexibility, ease of use, anonymity, and telepresence of virtual online technologies and environments, the online environment offers many different ways harassment can be perpetuated online.
                    </Text>
                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Harassment 
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            is the act of knowingly, purposely, and repeatedly annoy; create an unpleasant or hostile environment, especially by uninvited and unwelcome verbal or physical conduct; and make repeated attacks against a victim.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Flaming  
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            is “burning fiercely inside and emitting frames” by someone as a way to express annoyance. In online networks and in social media, this may involve an exchanged emails, instant messaging, or chat rooms among the parties involved. 
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Exclusion harassment  
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            it involves an intentional exclusion of an individual or a group by an individual or a group from an online space for the purpose of using the space to harass the victim(s).
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Outing  
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            is unwanted and uncalled for online display in public commons of a victim’s information and other attributes for no other purposes than harassment.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Masquerading   
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            Because the digital online environment supports anonymity and telepresence both of which can enable an individual or a group to hide their true identity, acquire false identities, and masquerade online with the intention of harassing others, online environments support masquerading as a form of cyberbullying. 
                            </Text>
                    </View>
                    
                </View>

                <View>
                    <Text style={[styles.titletxt, {fontSize:33}]}>
                    Areas of Society Most Affected by Cyberbullying
                    </Text>
                    <Text style={styles.paragraph}>
                    User preferences of these technologies are stratified by a number of factors including age groups, income levels, and geographical locations. Because of this, user activities are following these divisions. Divisions like these have seen vises like cyberbullying taking root in specific divisions of society.
                    </Text>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Schools
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            The rapid growth of technologies, the increasing ubiquitous use of technologies, lack of counseling, and the ever-present curiosity of youth are all driving an increasing number of young people to try out these new technologies in online social media. This is resulting in an increase in cyberbullying in schools.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Workplace 
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                            Bullying in the workplace is not new. Technology then, through its attributes like anonymity, scope, ease of use, and others, helps them in achieving whatever desired action they want accomplished. The increasing use of workplace “bring your own devices” (BYOD) and take home work-related digital devices along with increasing use of online social media have all increased the channels of harassment.
                            </Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.titletxt, {fontSize:33}]}>
                    Effects of Cyberbullying
                    </Text>
                    
                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Kids who are bullied are more likely to experience:
                                </Text>
                                <View style={styles.bulletbox}>
                                    
                                    <Text style={styles.bullet}>
                                    •   Depression and anxiety, increased feelings of sadness and loneliness, changes in sleep and eating patterns, and loss of interest in activities they used to enjoy. These issues may persist into adulthood.
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Health complaints
                                    </Text>
                                    <Text style={styles.bullet}>
                                    •   Decreased academic achievement—GPA and standardized test scores—and school participation. They are more likely to miss, skip, or drop out of school.
                                    </Text>
                                </View>
                            </View>
                            
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Kids who bully are more likely to: 
                                </Text>
                            </View>
                            
                            <View style={styles.bulletbox}>
                        
                                <Text style={styles.bullet}>
                                •   Abuse alcohol and other drugs in adolescence and as adults
                                </Text>
                                <Text style={styles.bullet}>
                                •   Get into fights, vandalize property, and drop out of school
                                </Text>
                                <Text style={styles.bullet}>
                                •   Engage in early sexual activity
                                </Text>
                                <Text style={styles.bullet}>
                                •   Have criminal convictions and traffic citations as adults
                                </Text>
                                <Text style={styles.bullet}>
                                •   Be abusive toward their romantic partners, spouses, or children as adults.
                                </Text>
                            </View>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Kids who witness bullying are more likely to: 
                                </Text>
                            </View>
                            
                            <View style={styles.bulletbox}>
                        
                                <Text style={styles.bullet}>
                                •   Have increased use of tobacco, alcohol, or other drugs 
                                </Text>
                                <Text style={styles.bullet}>
                                •   Have increased mental health problems, including depression and anxiety 
                                </Text>
                                <Text style={styles.bullet}>
                                •   Miss or skip school
                                </Text>
                                
                            </View>
                    </View>

                </View>

                <View>
                    <Text style={styles.titletxt}>Dealing with Cyberbullying</Text>
                    <View  style={[styles.box, {backgroundColor:"#e8f1fd"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Awareness  
                                </Text>
                            </View>
                            
                            <Text style={styles.paragraph}>
                            Find ways of developing massive education campaigns about what cyberbullying is, who it affects and its consequences which may include death. Broad mass and targeted education campaigns are essential. This mass awareness education campaigns are meant to focus on targeted audiences.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Legislations   
                                </Text>
                            </View>
                            
                            <Text style={styles.paragraph}>
                            Legislation at either state or federal levels is necessary at least for schools. In businesses, the best approach is for the companies to draw up operating policies that involve guidelines of behavior of all workers. Such company policies must be enforced to be effective.
                            </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#e8f1fd",marginBottom:50}]}>
                            <View style={styles.subtitlecon}>
                                <Text style={styles.subtitle}>
                                Community    
                                </Text>
                            </View>
                            
                            <Text style={styles.paragraph}>
                            Communities should also get involved in cyberbullying reduction and prevention. Cyberbullying public awareness activities must be included in community public activities, especially those directed to youth in the community.
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

export default L8L;