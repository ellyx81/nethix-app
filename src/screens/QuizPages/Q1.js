import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';

const data = [ 
    {
        question: "A profession is the autonomy and responsibility to make independent decisions.",
        options: ["True", "False"],
        correct_option: "True"
    },
    {
        question: "There is no relationship between the provider of the service and the receiver of the service / the provider of the product and the receiver of the product.",
        options: ["True", "False"],
        correct_option: "False"   
    },
    {
        question: "Your personal moral beliefs/guidelines doesn't matter when you operate as a professional.",
        options: ["True", "False"],
        correct_option: "False"   
    },
    {
        question: "It is a standard code developed over a period of time based on either the religion or culture of the indigenous people in the area.",
        options: ["Professional Code", "Personal Code" ,"Institutional Code", "Community Code"],
        correct_option: "Community Code"   
    },
    {
        question: "The person making the commitment must do so willingly without pressure.",
        options: ["True", "False"],
        correct_option: "True"   
    },
    {
        question: "In a commitment, it is okay not to have an agreement on what is to be done, by whom, and when.",
        options: ["True", "False"],
        correct_option: "False"   
    },
    {
        question: "It means a state of undivided loyalty to self-belief.",
        options: ["Commitment", "Integrity", "Responsibility", "Accountability"],
        correct_option: "Integrity"   
    },
    {
        question: "It is the obligation to answer for the execution of one’s assigned responsibilities.",
        options: ["Commitment", "Integrity", "Responsibility", "Accountability"],
        correct_option: "Accountability"   
    },
    {
        question: "It is is a process of making decisions that negatively affect an individual, such as denial of a service, based wholly, or partly, upon the real or perceived facts of one’s race, religion, sex, sexual orientation, national origin, age, disability, political affiliation, marital status, or physical appearance.",
        options: ["Discrimination", "Harrassment" ,"Whistleblowing"],
        correct_option: "Discrimination"   
    },
    {
        question: "Dilemmas in decision making are not common in the everyday activities of professional. ",
        options: ["True", "False"],
        correct_option: "False"
    },
    
]
const Q1 = () => {
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
                source={require('../../images/TBG2-04.png')}
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
        opacity: 0.8
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

export default Q1;