import React from 'react';
import {View,StyleSheet,Image, StatusBar,Dimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const L5L = () => {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
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
                        navigation.navigate("T5");
                    }}
                        style={styles.bookbtn}
                    >
                        <MaterialCommunityIcons name="book-open-variant" style={styles.icons}/>
                        
                    </TouchableOpacity>

                </View>
            <ScrollView>
        
            <View>
                <View>
                    <Text style={styles.titletxt}>
                        Intellectual Property Rights
                    </Text>
                    <View style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <Text style= {styles.paragraph}>
                        IP rights as basic human rights involve “the right to benefit from the protection of moral and material interests resulting from authorship of scientific, literary, or artistic productions.” (Art. 27, Universal Declaration of Human Rights). 
                        </Text>
                    </View>
                    
                    <View style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <Text style= {styles.paragraph}>
                        Meanwhile, the 1987 Philippine Constitution mandates their protection “particularly when beneficial to the people”. (Art. XIV, Sec. 13) 
                        </Text>
                    </View>

                    <View style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <Text style= {styles.paragraph}>
                        In the midst of these seemingly conflicting interests of the creators and innovators and the public, the system seeks to strike a balance between them through legal safeguards. Otherwise put, the system seeks to provide an environment in which everyone benefits from one’s creativity and innovation, especially since IP is a tool for economic and socio-cultural development. 
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.titletxt, {fontSize:28}]}>
                    Why Promote and Protect IP?
                    </Text>
                    <View style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            1.	The progress and well-being of humanity rest on its capacity to create and invent new works in the areas of technology and culture.
                            </Text>
                            <Text style={styles.bullet}>
                            2.	The legal protection of new creations encourages the commitment of additional resources for further innovation.
                            </Text>
                            <Text style={styles.bullet}>
                            3.	The promotion and protection of intellectual property spurs economic growth, creates new jobs and industries, and enhances the quality and enjoyment of life.
                            </Text>

                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.titletxt}>
                    IPOPHL
                    </Text>
                    <View style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <Text style= {styles.paragraph}>
                        The Intellectual Property Office of the Philippines (IPOPHL) is the government agency mandated to administer and implement State policies on intellectual property (IP) to strengthen the protection of IP rights in the country. 
                        </Text>
                    </View>
                    
                    <View style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <Text style= {styles.paragraph}>
                        Coined as the “DREAM” mandate, IPOPHL performs the following functions to protect and secure the exclusive rights of scientists, inventors, artists and other gifted citizens to their intellectual property and creations:
                        </Text>

                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •	Development-oriented
                            </Text>
                            <Text style={styles.bullet}>
                            •	Regulatory
                            </Text>
                            <Text style={styles.bullet}>
                            •	Enforcement
                            </Text>
                            <Text style={styles.bullet}>
                            •	Adjudicatory
                            </Text>
                            <Text style={styles.bullet}>
                            •	Policy-Making
                            </Text>
                        </View>
                    </View>

                    
                </View>





                <View>
                    <Text style={[styles.titletxt]}>Patent</Text>
                    <Text style={styles.paragraph}>
                    Patent is an exclusive right granted to the owner by government for a period of time in exchange of the full disclosure of their invention. 
                    </Text>
                    <Text style={styles.paragraph}>
                    An invention patent is a government-issued grant, bestowing an exclusive right to an inventor over a product or process that provides any technical solution to a problem in any field of human activity which is new, inventive, and industrially applicable.
                    </Text>
                    
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Who Grants Patents? </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        IPOPHL is the government agency in charged with the implementation of the law protecting intellectual property rights in the Philippines as provided for under R.A. 8293, or the Intellectual Property Code of the Philippines.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> What kind of inventions can be granted a patent?  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        It must be a technical solution to a problem in any field of human activity which is new, involves an inventive step and is industrially applicable.
                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Benefits  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        A patent is an exclusive right that allows the inventor to exclude others from making, using, or selling the product of his invention during the life of the patent. Patent owners may also give permission to, or license, other parties to use their inventions on mutually agreed terms. Owners may also sell their invention rights to someone else, who then becomes the new owner of the patent.

                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Eligibility  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        The Intellectual Property Code of the Philippines sets three conditions for an invention to be deemed patentable: it has to be new, involves an inventive step, and industrially applicable.

                        </Text>
                    </View>
                </View>



                <View>
                    <Text style={[styles.titletxt,{marginTop:25}]}>Utility Model</Text>
                    <Text style={styles.paragraph}>
                    A utility model is a protection option to protect innovations that are not sufficiently inventive to meet the inventive threshold required for standard patents application. 
                    </Text>
                    <Text style={styles.paragraph}>
                    It provides protection of so-called “minor inventions” through a system similar to the patent system. In general, UMs are considered particularly suited for protecting inventions that make small improvements to, and adaptations of, existing products or that have a short commercial life.
                    </Text>
                    
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> What kind of protection does a Utility Model offer? </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        An owner of a utility model obtains the exclusive right to prevent or stop others from commercially exploiting the utility model for a limited period.
                        </Text>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Benefits  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        A Utility Model (UM) allows the right holder to prevent others from commercially using the registered UM without his authorization, provided that the UM is new based on the Registrability Report. Compared with invention patents, it is relatively inexpensive, faster to obtain, and with less stringent patentability requirements.

                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Eligibility  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        Any technical solution of a problem in any field of human activity which is new and industrially applicable shall be registrable.

                        </Text>
                    </View>
                </View>





                <View>
                    <Text style={[styles.titletxt,{marginTop:25}]}>Industrial Design</Text>
                    <Text style={styles.paragraph}>
                    An industrial design is the ornamental or aesthetic aspect of an article. Design, in this sense, may be three-dimensional features (shape or surface of an article), or the two-dimensional features (patterns or lines of color). 
                    </Text>
                    <Text style={styles.paragraph}>
                    Handicrafts, jewelry, vehicles, appliances – the subject of industrial designs range from fashion to industrial goods.
                    </Text>
                    
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Benefits  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        The owner of a registered industrial design has the right to prevent third parties from making, selling or importing articles bearing or embodying a design which is a copy, or substantially a copy, of the protected design, when such acts are undertaken for commercial purposes.

                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Eligibility  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        In order to be registrable, an industrial design must be a new or original creation.

                        </Text>
                    </View>
                </View>




                <View>
                    <Text style={[styles.titletxt,{marginTop:25}]}>Trademark</Text>
                    <Text style={styles.paragraph}>
                    A trademark is a word, a group of words, sign, name, symbol, logo or a combination thereof that identifies and differentiates the source of the goods or services of one entity from those of others.
                    </Text>
                    <Text style={styles.paragraph}>
                    According to RA 8293, Sec 121.1, trademark is any visible sign distinguishing the goods or services of an enterprise.
                    </Text>
                    
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Functions of Trademark </Text>  
                        </View>
                        <View style={styles.bulletbox}>
                            <Text style={styles.bullet}>
                            •   Source identifier and differentiator
                            </Text>
                            <Text style={styles.bullet}>
                            •   Quality indicator and advertisement
                            </Text>
                        </View>
                    </View>

                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Benefits  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        A trademark protects a business’ brand identity in the marketplace. Registration of it gives the owner the exclusive rights to prevent others from using or exploiting the mark in any way. Aside from being a source-identifier, differentiator, quality indicator, and an advertising device, a protective mark may also bring another stream of income to the owner through licensing or franchising.
                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Eligibility  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        The Intellectual Property Code of the Philippines, Section 123 fully explains the information about trademark. Generally, the distinctiveness of the mark is the key point of consideration.

                        </Text>
                    </View>
                </View>




                <View>
                    <Text style={[styles.titletxt,{marginTop:25}]}>Copyright</Text>
                    <Text style={styles.paragraph}>
                    Copyright is the legal protection extended to the owner of the rights in an original work that one has created. 
                    </Text>
                    <Text style={styles.paragraph}>
                    “Original work” refers to every production in the literary, scientific and artistic domain. 
                    </Text>
                    <Text style={styles.paragraph}>
                    Copyright laws grant authors, artists and other creators automatic protection for their literary and artistic creations, from the moment they create it. 
                    </Text>
                    
                    
                    <View  style={[styles.box, {backgroundColor:"#fef8e3"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> How is copyright acquired?   </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        Works are protected by the sole fact of their creation, irrespective of the mode or form of expression, as well as their content, quality and purpose.

                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#ededed"}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Benefits  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        The creators of works protected by copyright hold the exclusive right to use or authorize others to use the work on agreed terms. The right holder(s) of a work can authorize or prohibit: its reproduction in all forms, including print form and sound recording, public performance and communication to the public, broadcasting, translation into other languages, and adaptation, such as from a novel to a screenplay for a film.

                        </Text>
                    </View>
                    <View  style={[styles.box, {backgroundColor:"#fef8e3", marginBottom:50}]}>
                        <View style={styles.subtitlecon}>
                            <Text style={styles.subtitle}> Eligibility  </Text>  
                        </View>
                        <Text style={styles.paragraph}>
                        Works covered by copyright that can be deposited with IPOPHL are, but are not limited to: novels, poems, plays, reference works, newspapers, advertisements, computer programs, databases, films, musical compositions, choreography, paintings, drawings, photographs, sculpture, architecture, maps and technical drawings. 

                        </Text>
                    </View>
                </View>


            </View>

            
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:20,
        
    },
    containerTop: {
        flexDirection:"row",
        backgroundColor:"#fff",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:20,
    },
    backbtn: {
        //paddingHorizontal:10,
      //  paddingVertical:13,
        borderRadius:10,
        marginTop:20,
       // backgroundColor:"white",
        width: 50,
    },
    bookbtn: {
       // paddingHorizontal:10,
    //    paddingVertical:13,
        borderRadius:10,
        marginTop:20,
        backgroundColor:"white",        
        marginLeft:230
    },
    icons: {
        color: "#323657",
        fontSize: 50
    },
    titletxt1: {
        color:"#323657",
        fontFamily:"Bold",
        fontSize:30,
        width:350,
        alignSelf:"center",
        textAlign:"center",
        paddingTop: 30,
    },
    titletxt: {
        color:"#323657",
        fontFamily:"Bold",
        fontSize:30,
        width:350,
        paddingTop: 20,
        alignSelf:"center",
        textAlign:"center"
    },
    box: {
       marginTop:15,
        marginHorizontal:10,
        borderRadius:20,
        paddingVertical:15,
        
    },
    subtitlecon: {
       
        //alignItems:"center",
        alignSelf:"center",
       //width:265,
       //  paddingVertical:10,
      //  borderRadius:14,
        paddingHorizontal:10,
        marginTop: -10
    },
    subtitle: {
        color:"#345c74",
        fontFamily:"Bold",
        fontSize:18,
        textAlign: "left",
        margin: 13,
        
    },
    paragraph: {
        color:"#345c74",
        paddingTop: 5,
        fontFamily:"Medium",
        textAlign:"justify",
        paddingHorizontal: 15,

    },
    bullet: {
        color:"#345c74",
        marginLeft: 10,
        paddingTop: 5,
        fontFamily:"Medium",
        textAlign:"justify",
        paddingHorizontal: 15,

    },
    bulletbox: {
        marginTop: 10
    }
    
})

export default L5L;