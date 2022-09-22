import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';


export default class Chapters extends React.Component{
    render(){
        const {title,num, color, source, bg, onPress} = this.props
        return(
           <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor:bg,
                    flexDirection:"row",
                    marginVertical: 5,
                    padding:12,
                    elevation: 5,
                    marginHorizontal:20,
                    borderRadius:30,
                    alignItems:"center",
                }}
           >

                    <Image
                        source={source}
                        style={{
                            marginLeft:9,
                            width:42,
                            height:42,
                        }}
                    />

                    
                    <View>
                        <Text style={{
                            color:"#345c74",
                            fontFamily:"Bold",
                            fontSize:16,
                            paddingHorizontal:20,
                            width:240
                        }}>
                            {title}
                        </Text>
                        
                    </View>

               
               
           </TouchableOpacity>
        )
    }
}