import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native'
//import { TouchableOpacity } from "react-native-gesture-handler";
//import data from '../../screens/QuizData';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
//import Animated from "react-native-reanimated";

const data = [ 
    {
        question: "It is the right to be alone without disturbances.",
        options: ["Solitude", "Anonymity", "Intimacy", "Reserve"],
        correct_option: "Solitude"
    },
    {
        question: "It includes all types of intrusions including physical searches, video recording, and surveillance of any type.",
        options: ["Personal Privacy", "Informational Privacy", "Institutional Privacy"],
        correct_option: "Personal Privacy"   
    },
    {
        question: "It includes research data, the sales and product data, the marketing strategies, and the activities of the organization.",
        options: ["Personal Privacy", "Informational Privacy", "Institutional Privacy"],
        correct_option: "Institutional Privacy"    
    },
    {
        question: "These days in the information age, we can guarantee our privacy.",
        options: ["True", "False"],
        correct_option: "False"   
    },
    {
        question: "The less personal information people have about an individual, the less autonomous that individual can be, especially in decision making.",
        options: ["True", "False"],
        correct_option: "False"
    },
    {
        question: "Companies collect our information in databases everytime we apply for discount cards, contests, and every time we give out our Social Security number and telephone numbers to store clerks in department stores, and is later sold to the highest bidder.",
        options: ["True", "False"],
        correct_option: "True"   
    },
    {
        question: "It is linking individual records from different databases including driver’s records, vital statistics, Social Security administration, medical records, schools, work, and public local, county, state, and federal databases.",
        options: ["Intrusion", "Misuse of Information" ,"Interception of Information", "Information Matching"],
        correct_option: "Information Matching"      
    },
    {
        question: "It is unauthorized access to private information via eavesdropping, which occurs when a third party gains unauthorized access to a private communication between two or more parties.",
        options: ["Intrusion", "Misuse of Information" ,"Interception of Information", "Information Matching"],
        correct_option: "Interception of Information"  
    },
    {
        question: "Do you think it is okay to reply to spammers?",
        options: ["Yes", "No"],
        correct_option: "No"   
    },
    {
        question: "There is enough law now to secure anyone of us online.",
        options: ["True", "False"],
        correct_option: "False" 
    }
]
const Q4A = () => {
    const navigation = useNavigation(); 
    const allQuestions = data; 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            //Set Score
            setScore(score+1)
        }
        //show next button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if(currentQuestionIndex == allQuestions.length-1){
            //last question
            //show score modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }

    const renderQuestion = () => {
        return(
            <View>
                {/*Question Counter*/}
                <View style={styles.questioncounter}>
                    <Text style={styles.currentQuestionNo}>{currentQuestionIndex+1}</Text>
                    <Text style={styles.totalQuestionNo}>/ {allQuestions.length}</Text>
                </View>

                {/*Question*/}
                <Text style={styles.question}>{allQuestions[currentQuestionIndex]?.question}</Text>    
            </View>
        )
    }

    const renderOptions = () => {
        return(
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={()=> validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={[styles.optionbox,{
                                borderColor: option==correctOption
                                                ? "green"
                                            : option==currentOptionSelected
                                                ? "red"
                                                : "white",
                                //backgroundColor: option==correctOption
                                //                    ? "green"
                                //                : option==currentOptionSelected
                                //                    ? "red"
                                //                    : "grey",
                                
                            }]}
                        >
                            <Text style={styles.optiontext}>{option}</Text>
                            
                            {/*Show check or cross icon based on correct answer*/}

                            {
                                option == correctOption ? (
                                    <View style={styles.correctAnswer}>
                                        <MaterialCommunityIcons name="check" style={styles.checkCrossIcon}/>
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={styles.wrongAnswer}>
                                        <MaterialCommunityIcons name="close" style={styles.checkCrossIcon}/>
                                    </View>

                                ) : null
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>
        )}
    
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity 
                onPress={handleNext}
                style={styles.nextButton}>
                    <Text style={styles.nextTxt}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    return(
        <ImageBackground
                source={require('../../images/TBG5-04.png')}
                style={{width:"100%",height:"100%"}}
          >
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="light-content" backgroundColor={"black"}/>

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

            <ScrollView>
            <View style={styles.background}>

                {/*Progress Bar*/}
               
                {/*Question*/}
                {renderQuestion()}

                {/*Options*/}
                {renderOptions()}

                {/*Next Button*/}
                {renderNextButton()}

                {/*Score Modal*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showScoreModal}
                >
                    <View style={styles.modal}>
                        <View style={styles.scorebox}>

                            <Text style={styles.congratsTxt}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>
                            
                            <View style={styles.scoreContainer}>
                                <Text style={{ fontSize: 30, color: score > (allQuestions.length/2) ? "green" : "red" }}>{score}</Text>
                                <Text style={{ fontSize: 20, color: "black" }}> / {allQuestions.length}</Text>
                                
                            </View>

                            {/* Retry Quiz Button */}
                            <TouchableOpacity style={styles.retryButton} onPress={restartQuiz}>

                                <Text style={styles.retryTxt}>Try Again</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.doneButton} onPress={() => {navigation.goBack();}}>

                                <Text style={styles.retryTxt}>Done</Text>

                            </TouchableOpacity>

                        </View>
                        
                    </View>
                    
                </Modal>
                {/*Background Image*/} 
            </View>
            </ScrollView>
        </SafeAreaView>
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
      //  opacity: 0.8
    },
    questioncounter: {
        //marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    currentQuestionNo: {
        color:"white", fontSize: 25, opacity: 0.6, marginRight: 2
    },
    totalQuestionNo: {
        color:"white", fontSize: 22, opacity: 0.6, marginRight: 2
    },
    question: {
        color:"white",
        fontSize: 30,
        marginVertical:20
    },
    optionbox: {
        borderWidth: 2, 
        height: 60, borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    optiontext: {
        fontSize: 20, color: "white"
    },
    correctAnswer: {
        width: 30, height: 30, borderRadius: 30/2,
        backgroundColor: "green",
        justifyContent: 'center', alignItems: 'center'
    },
    wrongAnswer: {
        width: 30, height: 30, borderRadius: 30/2,
        backgroundColor: "red",
        justifyContent: 'center', alignItems: 'center'
    },
    checkCrossIcon: {color: "white",fontSize: 20},
    nextButton: {
        marginTop: 20, width: '100%', backgroundColor: "#323657", padding:20, borderRadius: 15
    },
    nextTxt: {fontSize: 20, color: "white", textAlign:"center"},
    background: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
       // backgroundColor: "black",
        position: 'relative'

    },
    modal: {
        flex: 1,
       // backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center'
    },
    scorebox: {
        elevation: 7,
        backgroundColor: "white",
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',    
    },
    congratsTxt: {fontSize: 30, fontWeight: 'bold', color: "black"},
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },
    retryButton: {backgroundColor: "#323657",
    padding: 15, paddingHorizontal: 50, width: '100%', borderRadius: 20
    },
    doneButton: {backgroundColor: "#323657", marginTop: 15,
    padding: 15, paddingHorizontal: 50, width: '100%', borderRadius: 20
    },
    retryTxt: {textAlign: 'center', color: "white", fontSize: 20},
})

export default Q4A;