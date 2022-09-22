import React from 'react';
import {View,Text,Image,ImageBackground,StyleSheet, TouchableOpacity,} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Chapters from '../../screens/Chapters'; 
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L4 = () => {   
    const navigation = useNavigation(); 
        return(
          <ImageBackground
                source={require('../../images/TBG4-04.png')}
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
                    source={require('../../images/AP.png')}
                    style={styles.topicIcon}
                />
                <Text style={styles.titletxt}>Anonymity and Security</Text>



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
                                navigation.navigate("L4I");
                            }}
                            
                        />
                        <Chapters
                            num={2}
                            bg="#d7ebfa"
                            source={require('../../images/video-01.png')}
                            title="Anonymity: Advantages and Disadvantages - Video"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("V4");
                            }}
                        />
                         <Chapters
                            num={3}
                            bg="#eadbff"
                            source={require('../../images/view-info-01.png')}
                            title="Anonymity - Infographic"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("I8");
                            }}
                        />
                         <Chapters
                            num={4}
                            bg="#eadbff"
                            source={require('../../images/view-info-01.png')}
                            title="Security - Infographic"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("I9");
                            }}
                        />
                         <Chapters
                            num={5}
                            bg="#fae9dc"
                            source={require('../../images/termi-01.png')}
                            title="WHAT IS...?"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("T4");
                            }}
                        />
                         <Chapters
                            num={6}
                            bg="#dcfadf"
                            source={require('../../images/Quiz-02.png')}
                            title="MINI-QUIZ"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("Q4");
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
            width:100,
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

    export default L4;