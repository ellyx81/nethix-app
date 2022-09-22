import React from 'react';
import {Text,TouchableOpacity, StyleSheet, View,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CourseList extends React.Component{
    render(){
        const {img,title, bg, onPress} = this.props
    return(
        <View
            style={[styles.topictitlepic,{backgroundColor:bg}]}
        >
            
        <View>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                onPress={onPress}
                style={styles.startbox}
                >
                    <Text style={styles.starttxt}>View Lesson</Text>  
                    <MaterialCommunityIcons name="arrow-right-thick" style={styles.icons}/>
            </TouchableOpacity>
            
        </View>
        <Image
            source={img}
            style={styles.choosetopic}
        />  

        </View>
    )
    }
}
const styles = StyleSheet.create({
    topictitlepic:{
                    
        flexDirection:"row",
        backgroundColor:"white",
        elevation: 5,
        marginTop:15,
        marginHorizontal:20,
        borderRadius:20,
        paddingTop:30,
        paddingVertical:15,
        paddingLeft:30
        
    },
    title:{
        color:"#345c74",
        fontSize:18,
        fontFamily:"Bold",
        width:250,
        paddingRight:100 
    },
    
    startbox: {
        //alignSelf:"center",
        flexDirection:"row",
        backgroundColor:"#46338C",
        alignItems:"center",
        marginTop:20,
        marginVertical:10,
        width:160,
        //paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:14,
        paddingHorizontal:10
        
    },
    choosetopic:{
        marginLeft:-55,marginTop:8,width:70,height:70
    },
    starttxt: {
        paddingLeft:10,
        color:"#FFF",
        fontFamily:"Bold",
        fontSize:14
    },
    icons: {
        
        paddingLeft:38,
        color: "white",
        fontSize: 20,
        opacity: 0.8
    },
})