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
        question: "The decision making is made by the client only.",
        options: ["True", "False"],
        correct_option: "False"
    },
    {
        question: "It is including false or misleading information on one's resume to make oneself a more attractive candidate for a job. For example, claiming competence in an IT skill that is in high demand.",
        options: ["Bribery", "Internal Control", "Resume Inflation", "Breach of the duty of care"],
        correct_option: "Resume Inflation"   
    },
    {
        question: "An IT worker can also be an IT user. ",
        options: ["True", "False"],
        correct_option: "True"   
    },
    {
        question: "It is the principles and regulations established in a community by some authority and applicable to its people, whether in the form of legislation or of custom and policies recognized and enforced by judicial decision.",
        options: ["Professional Code of Ethics", "Law" ,"Code of Conduct", "Etiquette"],
        correct_option: "Law"   
    },
    {
        question: "It states the principles and core values that are essential to the work of a particular occupational group.",
        options: ["Professional Code of Ethics", "Law" ,"Code of Conduct", "Etiquette"],
        correct_option: "Professional Code of Ethics"  
    },
    {
        question: "Is the failure to act as a reasonable person would act. A breach of duty might consist of an action, such as throwing a lit cigarette into a fireworks factory and causing an explosion, or a failure to act when there is a duty to do so—for example, a police officer not protecting a citizen from an attacker.",
        options: ["Negligence", "Breach of Duty of Care"],
        correct_option: "Breach of Duty of Care"   
    },
    {
        question: "An employee copied a software from their work computers to their personal computer so that he could take work home and be more productive. Is it piracy?",
        options: ["Yes", "No"],
        correct_option: "Yes"   
    },
    {
        question: "Private data include information about individual employees. It also includes information about customers. True or false?",
        options: ["True", "False"],
        correct_option: "True"   
    },
    {
        question: "It is an abbreviation that serves as warning on online posts, articles, or videos that might be considered inappropriate in the workplace.",
        options: ["TW", "NSFW", "TLDR", "CTTO"],
        correct_option: "NSFW"   
    },
    {
        question: "It is a document that stipulates restrictions and practices that a user must agree to in order to use organizational computing and network resources.",
        options: ["Professional Code of Ethics", "Acceptable Use Privacy", "Contract", "Code of Conduct"],
        correct_option: "Acceptable Use Privacy"   
    }
]
const Q2 = () => {
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
                source={require('../../images/TBG-04.png')}
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

export default Q2;