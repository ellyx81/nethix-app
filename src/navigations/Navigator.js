import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

import L1 from '../screens/LessonPages/L1';
import L2 from '../screens/LessonPages/L2';
import L3 from '../screens/LessonPages/L3';
import L4 from '../screens/LessonPages/L4';
import L4A from '../screens/LessonPages/L4A';
import L5 from '../screens/LessonPages/L5';
import L6 from '../screens/LessonPages/L6';
import L7 from '../screens/LessonPages/L7';
import L8 from '../screens/LessonPages/L8';

import L1I from '../screens/LessonPages/L1I';
import L2I from '../screens/LessonPages/L2I';
import L3I from '../screens/LessonPages/L3I';
import L4I from '../screens/LessonPages/L4I';
import L4IA from '../screens/LessonPages/L4IA';
import L5I from '../screens/LessonPages/L5I';
import L6I from '../screens/LessonPages/L6I';
import L7I from '../screens/LessonPages/L7I';
import L8I from '../screens/LessonPages/L8I';

import L1L from '../screens/LessonPages/L1L';
import L2L from '../screens/LessonPages/L2L';
import L3L from '../screens/LessonPages/L3L';
import L4L from '../screens/LessonPages/L4L';
import L4LA from '../screens/LessonPages/L4LA';
import L5L from '../screens/LessonPages/L5L';
import L6L from '../screens/LessonPages/L6L';
import L7L from '../screens/LessonPages/L7L';
import L8L from '../screens/LessonPages/L8L';

import I1 from '../screens/InfographicPages/I1';
import I2 from '../screens/InfographicPages/I2';
import I3 from '../screens/InfographicPages/I3';
import I4 from '../screens/InfographicPages/I4';
import I5 from '../screens/InfographicPages/I5';
import I6 from '../screens/InfographicPages/I6';
import I7 from '../screens/InfographicPages/I7';
import I8 from '../screens/InfographicPages/I8';
import I9 from '../screens/InfographicPages/I9';
import I10 from '../screens/InfographicPages/I10';
import I11 from '../screens/InfographicPages/I11';

import T1 from '../screens/TerminologyPages/T1';
import T2 from '../screens/TerminologyPages/T2';
import T3 from '../screens/TerminologyPages/T3';
import T4 from '../screens/TerminologyPages/T4';
import T4A from '../screens/TerminologyPages/T4A';
import T5 from '../screens/TerminologyPages/T5';
import T6 from '../screens/TerminologyPages/T6';
import T7 from '../screens/TerminologyPages/T7';
import T8 from '../screens/TerminologyPages/T8';

import Q1 from '../screens/QuizPages/Q1';
import Q2 from '../screens/QuizPages/Q2';
import Q3 from '../screens/QuizPages/Q3';
import Q4 from '../screens/QuizPages/Q4';
import Q4A from '../screens/QuizPages/Q4A';
import Q5 from '../screens/QuizPages/Q5';
import Q6 from '../screens/QuizPages/Q6';
import Q7 from '../screens/QuizPages/Q7';
import Q8 from '../screens/QuizPages/Q8';

import V1 from '../screens/VideoPages/V1';
import V2 from '../screens/VideoPages/V2';
import V3 from '../screens/VideoPages/V3';
import V4 from '../screens/VideoPages/V4';
import V4A from '../screens/VideoPages/V4A';
import V5 from '../screens/VideoPages/V5';
import V6 from '../screens/VideoPages/V6';
import V7 from '../screens/VideoPages/V7';
import V8 from '../screens/VideoPages/V8';


const Stack = createStackNavigator();

export default function myStack() {
    return <Stack.Navigator>
        
        <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
        />

            

            <Stack.Screen
                    name="I1"
                    options={{ headerShown: false }}
                    component={I1}
            />
            <Stack.Screen
                    name="I2"
                    options={{ headerShown: false }}
                    component={I2}
            />
            <Stack.Screen
                    name="I3"
                    options={{ headerShown: false }}
                    component={I3}
            />
            <Stack.Screen
                    name="I4"
                    options={{ headerShown: false }}
                    component={I4}
            />
            <Stack.Screen
                    name="I5"
                    options={{ headerShown: false }}
                    component={I5}
            />
            <Stack.Screen
                    name="I6"
                    options={{ headerShown: false }}
                    component={I6}
            />
            <Stack.Screen
                    name="I7"
                    options={{ headerShown: false }}
                    component={I7}
            />
            <Stack.Screen
                    name="I8"
                    options={{ headerShown: false }}
                    component={I8}
            />
            <Stack.Screen
                    name="I9"
                    options={{ headerShown: false }}
                    component={I9}
            />
            <Stack.Screen
                    name="I10"
                    options={{ headerShown: false }}
                    component={I10}
            />
            <Stack.Screen
                    name="I11"
                    options={{ headerShown: false }}
                    component={I11}
            />




                <Stack.Screen
                    name="L1"
                    options={{ headerShown: false }}
                    component={L1}
                />
                <Stack.Screen
                    name="L1I"
                    options={{ headerShown: false }}
                    component={L1I}
                />
                <Stack.Screen
                    name="L1L"
                    options={{ headerShown: false }}
                    component={L1L}
                />
                <Stack.Screen
                    name="L2"
                    options={{ headerShown: false }}
                    component={L2}
                />
                <Stack.Screen
                    name="L2I"
                    options={{ headerShown: false }}
                    component={L2I}
                />
                <Stack.Screen
                    name="L2L"
                    options={{ headerShown: false }}
                    component={L2L}
                />
                
                <Stack.Screen
                    name="L3"
                    options={{ headerShown: false }}
                    component={L3}
                />
                <Stack.Screen
                    name="L3I"
                    options={{ headerShown: false }}
                    component={L3I}
                />
                <Stack.Screen
                    name="L3L"
                    options={{ headerShown: false }}
                    component={L3L}
                />
               
                <Stack.Screen
                    name="L4"
                    options={{ headerShown: false }}
                    component={L4}
                />
                <Stack.Screen
                    name="L4I"
                    options={{ headerShown: false }}
                    component={L4I}
                />
                <Stack.Screen
                    name="L4L"
                    options={{ headerShown: false }}
                    component={L4L}
                />

                <Stack.Screen
                    name="L4A"
                    options={{ headerShown: false }}
                    component={L4A}
                />
                <Stack.Screen
                    name="L4IA"
                    options={{ headerShown: false }}
                    component={L4IA}
                />
                <Stack.Screen
                    name="L4LA"
                    options={{ headerShown: false }}
                    component={L4LA}
                />

                <Stack.Screen
                    name="L5"
                    options={{ headerShown: false }}
                    component={L5}
                />
                <Stack.Screen
                    name="L5I"
                    options={{ headerShown: false }}
                    component={L5I}
                />
                <Stack.Screen
                    name="L5L"
                    options={{ headerShown: false }}
                    component={L5L}
                />

                <Stack.Screen
                    name="L6"
                    options={{ headerShown: false }}
                    component={L6}
                />
                <Stack.Screen
                    name="L6I"
                    options={{ headerShown: false }}
                    component={L6I}
                />
                <Stack.Screen
                    name="L6L"
                    options={{ headerShown: false }}
                    component={L6L}
                />

                <Stack.Screen
                    name="L7"
                    options={{ headerShown: false }}
                    component={L7}
                />
                <Stack.Screen
                    name="L7I"
                    options={{ headerShown: false }}
                    component={L7I}
                />
                <Stack.Screen
                    name="L7L"
                    options={{ headerShown: false }}
                    component={L7L}
                />

                <Stack.Screen
                    name="L8"
                    options={{ headerShown: false }}
                    component={L8}
                />
                <Stack.Screen
                    name="L8I"
                    options={{ headerShown: false }}
                    component={L8I}
                />
                <Stack.Screen
                    name="L8L"
                    options={{ headerShown: false }}
                    component={L8L}
                />


                <Stack.Screen
                    name="V1"
                    options={{ headerShown: false }}
                    component={V1}
                />
                <Stack.Screen
                        name="V2"
                        options={{ headerShown: false }}
                        component={V2}
                />
                <Stack.Screen
                        name="V3"
                        options={{ headerShown: false }}
                        component={V3}
                />
                <Stack.Screen
                        name="V4"
                        options={{ headerShown: false }}
                        component={V4}
                />
                <Stack.Screen
                        name="V4A"
                        options={{ headerShown: false }}
                        component={V4A}
                />
                <Stack.Screen
                        name="V5"
                        options={{ headerShown: false }}
                        component={V5}
                />
                <Stack.Screen
                        name="V6"
                        options={{ headerShown: false }}
                        component={V6}
                />
                <Stack.Screen
                        name="V7"
                        options={{ headerShown: false }}
                        component={V7}
                />
                <Stack.Screen
                        name="V8"
                        options={{ headerShown: false }}
                        component={V8}
                />

                
                <Stack.Screen
                    name="T1"
                    options={{ headerShown: false }}
                    component={T1}
                />
                <Stack.Screen
                        name="T2"
                        options={{ headerShown: false }}
                        component={T2}
                />
                <Stack.Screen
                        name="T3"
                        options={{ headerShown: false }}
                        component={T3}
                />
                <Stack.Screen
                        name="T4"
                        options={{ headerShown: false }}
                        component={T4}
                />
                <Stack.Screen
                        name="T4A"
                        options={{ headerShown: false }}
                        component={T4A}
                />
                <Stack.Screen
                        name="T5"
                        options={{ headerShown: false }}
                        component={T5}
                />
                <Stack.Screen
                        name="T6"
                        options={{ headerShown: false }}
                        component={T6}
                />
                <Stack.Screen
                        name="T7"
                        options={{ headerShown: false }}
                        component={T7}
                />
                <Stack.Screen
                        name="T8"
                        options={{ headerShown: false }}
                        component={T8}
                />


                <Stack.Screen
                    name="Q1"
                    options={{ headerShown: false }}
                    component={Q1}
                />
                <Stack.Screen
                    name="Q2"
                    options={{ headerShown: false }}
                    component={Q2}
                />
                <Stack.Screen
                    name="Q3"
                    options={{ headerShown: false }}
                    component={Q3}
                />
                <Stack.Screen
                    name="Q4"
                    options={{ headerShown: false }}
                    component={Q4}
                />
                <Stack.Screen
                    name="Q4A"
                    options={{ headerShown: false }}
                    component={Q4A}
                />
                <Stack.Screen
                    name="Q5"
                    options={{ headerShown: false }}
                    component={Q5}
                />
                <Stack.Screen
                    name="Q6"
                    options={{ headerShown: false }}
                    component={Q6}
                />
                <Stack.Screen
                    name="Q7"
                    options={{ headerShown: false }}
                    component={Q7}
                />
                <Stack.Screen
                    name="Q8"
                    options={{ headerShown: false }}
                    component={Q8}
                />
    </Stack.Navigator>
}

