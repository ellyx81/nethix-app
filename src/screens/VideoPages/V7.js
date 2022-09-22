import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import { ScrollView } from 'react-native-gesture-handler';

const V7 = () => {
    
    // The video we will play on the player.
    const navigation = useNavigation();
    const video = require('../../videos/08.mp4');
    
    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#323657"/>
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
                    navigation.navigate("T6");
                }}
                    style={styles.bookbtn}
                >
                    <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                    
                </TouchableOpacity>
            </View>
          
            <View style={styles.videocon}>
                <Video
                    onEnd={onEnd}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    posterResizeMode={'cover'}
                    onProgress={onProgress}
                    paused={paused}
                    ref={(ref) => (videoPlayer.current = ref)}
                    resizeMode={'cover'}
                    source={video}
                    style={styles.backgroundVideo}
                />
                <MediaControls
                    isFullScreen={false}
                    duration={duration}
                    isLoading={isLoading}
                    progress={currentTime}
                    onPaused={onPaused}
                    onReplay={onReplay}
                    onSeek={onSeek}
                    onSeeking={onSeeking}
                    mainColor={"#323657"}
                    playerState={playerState}
                    sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
                />
            </View>
            <ScrollView>
                <Text style={styles.title}>What Could Go Wrong? Historic Examples of Software Risks</Text>
                
               
               <Text style={styles.paragraph}>
               In the maiden days of the “Wonder Machine,” risk and vulnerability of both the computer user and data were not a problem. Software was unknown, the way we know it today, because it was embedded. Also, the computing system consisted more of hardware than software, and projects were small.
               </Text>
               <Text style={styles.paragraph}>
               As systems became smaller and less dependent on hardware, software came out of the hardware, and projects became bigger, complex, and more dependent on software and humanware. Then, the problems of risk and vulnerabilities set in. Ever since then, major system mishaps in hardware, software, and humanware have been recorded that have given us a glimpse of the development of computer systems and the long road that system safety, vulnerability, and risk have taken.
               </Text>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        justifyContent:"center",
        //paddingBottom: "100%",
        width:"100%",
        height:"100%",
        paddingHorizontal:10,
    },
    containerTop: {
        flexDirection:"row",
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
       // marginTop: 50,
        paddingVertical:20,
        paddingHorizontal:20,
        
    },
    backbtn: {
        //paddingHorizontal:10,
      //  paddingVertical:13,
        borderRadius:10,
    //    marginTop:20,
       // backgroundColor:"white",
        width: 50,
    },
    bookbtn: {
        // paddingHorizontal:10,
     //    paddingVertical:13,
         borderRadius:10,
      //   marginTop:20,
         backgroundColor:"white",        
         marginLeft:230
     },
    icons: {
        color: "#323657",
        fontSize: 50
    },
    title: {
        fontSize:20, 
        textAlign:"center", 
       // marginTop:40, 
        marginVertical: 20, 
        color:"black"
    },
    videocon: {
        //marginTop: 20
    },
    backgroundVideo: {
        height: 200,
        width: '100%',
    },
    mediaControls: {
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
    paragraph: {
        marginBottom:10, 
        fontFamily:"Medium",
        textAlign:"justify",
        color:"#345c74",
        paddingLeft:30,
        paddingRight:30
    },
    
});

export default V7;