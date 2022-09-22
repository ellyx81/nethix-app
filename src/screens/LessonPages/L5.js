import React from 'react';
import {View,Text,Image,ImageBackground,StyleSheet, TouchableOpacity,} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Chapters from '../../screens/Chapters'; 
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L5 = () => {   
    const navigation = useNavigation(); 
        return(
          <ImageBackground
                source={require('../../images/TBG7-04.png')}
                style={{width:"100%",height:"100%"}}
          >
                <View style={styles.container}>
                <TouchableOpacity
                       onPress={() => {
                        navigation.goBack();
                    }}
                        style={styles.backbtn}
                    >
                            <MaterialCommunityIcons name="arrow-left-box" style={styles.icons}/>
                    </TouchableOpacity>
                </View>


                
                <Image
                    source={require('../../images/IP.png')}
                    style={styles.topicIcon}
                />
                <Text style={styles.titletxt}>Intellectual Properties</Text>



                <Modalize 
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={490}
                    scrollViewProps={{ showsVerticalScrollIndicator:false }}
                >
                    <View style={styles.container2}>
                        
                    </View>
                    <View>

                        <Chapters
                            num={1}
                            bg="#faf9dc"
                            source={require('../../images/learn-01.png')}
                            title="LESSON"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("L5I");
                            }}
                            
                        />
                        <Chapters
                            num={2}
                            bg="#d7ebfa"
                            source={require('../../images/video-01.png')}
                            title="Patent vs. Utility Model: What are the Difference Between the Two? - Video"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("V5");
                            }}
                        />
                         <Chapters
                            num={2}
                            bg="#eadbff"
                            source={require('../../images/view-info-01.png')}
                            title="Intellectual Property Code of the Philippines - Infographic"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("I11");
                            }}
                        />
                         <Chapters
                            num={3}
                            bg="#eadbff"
                            source={require('../../images/view-info-01.png')}
                            title="Types of Intellectual Properties - Infographic"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("I10");
                            }}
                        />
                         <Chapters
                            num={4}
                            bg="#fae9dc"
                            source={require('../../images/termi-01.png')}
                            title="WHAT IS...?"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("T5");
                            }}
                        />
                         <Chapters
                            num={5}
                            bg="#dcfadf"
                            source={require('../../images/Quiz-02.png')}
                            title="MINI-QUIZ"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("Q5");
                            }}
                        />
                    </View>

                   
                </Modalize>

          </ImageBackground>
        )
    }
    const styles = StyleSheet.create({
        container: {
            flexDirection:"row",
            width:"100%",
            paddingHorizontal:20
        },
        backbtn: {
            //paddingHorizontal:10,
          //  paddingVertical:13,
            borderRadius:10,
            marginTop:20,
           // backgroundColor:"white",
            width: 50,
	        marginLeft:-10, 
        },
        icons: {
            color: "white",
            fontSize: 50,
            opacity: 0.8
        },
        topicIcon: {
            height:85,
            width:65,
            alignSelf:"center",
            //marginTop:20
        },
        titletxt: {
            color:"white",
            fontFamily:"Bold",
            fontSize:30,
            width:350,
            alignSelf:"center",
            textAlign:"center"
        },
        container2: {
            flexDirection:"row",
            marginHorizontal:30,
            marginTop:40
        }

    })

    export default L5;