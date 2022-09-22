import React from 'react';
import {View,Text,Image,ImageBackground,StyleSheet, TouchableOpacity,} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Chapters from '../../screens/Chapters'; 
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L8 = () => {   
    const navigation = useNavigation(); 
        return(
          <ImageBackground
                source={require('../../images/TBG8-04.png')}
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
                    source={require('../../images/CB.png')}
                    style={styles.topicIcon}
                />
                <Text style={styles.titletxt}>Cyberbullying</Text>



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
                    alwaysOpen={450}
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
                                navigation.navigate("L8I");
                            }}
                            
                        />
                        <Chapters
                            num={2}
                            bg="#d7ebfa"
                            source={require('../../images/video-01.png')}
                            title="The Impacts of Your Click: Effects of Cyberbullying - Video"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("V8");
                            }}
                        />
                         
                         <Chapters
                            num={3}
                            bg="#fae9dc"
                            source={require('../../images/termi-01.png')}
                            title="WHAT IS...?"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("T8");
                            }}
                        />
                         <Chapters
                            num={4}
                            bg="#dcfadf"
                            source={require('../../images/Quiz-02.png')}
                            title="MINI-QUIZ"
                            color="#a9aedb"
                            onPress={() => {
                                navigation.navigate("Q8");
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
            height:90,
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

    export default L8;