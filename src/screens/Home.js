import React from 'react'
import {View,Text,StyleSheet,StatusBar, ImageBackground,TouchableOpacity,Image} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import CourseList from '../screens/CourseList';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {   
    const navigation = useNavigation();
        return(
            <ImageBackground
            source={require('../images/Home-01.png')}
            style={{width:"100%",height:"100%"}}
           >
               <StatusBar backgroundColor="#323657"/>
              
                 
                <View>
                    <Image
                        source={require('../images/welcome-01.png')}
                        style={{
                            alignSelf:"center",
                            width:"100%",
                            height:220,
                            marginTop:20,
                            marginBottom:-20,
                            }}
                    />
                </View>
 
                

                <ScrollView>
                   <View style={{marginTop:-10, marginBottom:20}}>
                            <CourseList
                                onPress={() => {
                                    navigation.navigate("L1");
                                }}
                                img={require('../images/EAP.png')}
                                title="Ethics and Profession"
                                bg="white"
                                
                                
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L2");
                                }}
                                img={require('../images/EIWU.png')}
                                title="Ethics for IT Workers and Users"
                                bg="white"
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L3");
                                }}
                                img={require('../images/CAC.png')}
                                title="Cyberattacks and Cybersecurity"
                                bg="white"
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L4");
                                }}
                                img={require('../images/AP.png')}
                                title="Anonymity and Security"
                                bg="white"
                            />
                            <CourseList  
                                onPress={() => {
                                    navigation.navigate("L4A");
                                }}
                                img={require('../images/AAP.png')}
                                title="Privacy and Civil Liberties"
                                bg="white"
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L5");
                                }}
                                img={require('../images/IP.png')}
                                title="Intellectual Properties"
                                bg="white"
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L6");
                                }}
                                img={require('../images/SIAR.png')}
                                title="Software Issues, Risks and Liabilities"
                                bg="white"
                            />
                             <CourseList
                                onPress={() => {
                                    navigation.navigate("L7");
                                }}
                                img={require('../images/SCC.png')}
                                title="Social Context of Computing"
                                bg="white"
                            />
                            <CourseList
                                onPress={() => {
                                    navigation.navigate("L8");
                                }}
                                img={require('../images/CB.png')}
                                title="Cyberbullying"
                                bg="white"
                            />
                    </View>

               </ScrollView>
           </ImageBackground>
        )
    
}
const styles = StyleSheet.create({
    
    
});
export default Home;
