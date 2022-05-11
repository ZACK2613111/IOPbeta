import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { auth, db } from '../../core/firebase'
import { doc, setDoc } from "firebase/firestore";


const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState(0)
    const [raspId, setRaspId] = useState('')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigation();


    const handleRegister = () => {
        setLoading(true);
        setError("");
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {
                age: age,
                displayLastName: lname,
                displayName: fname,
                idRaspBerry: raspId,
            });
        }).catch(e => setError(e.code)).finally(() => setLoading(false))


    }
    // const handleSend = () => {
    //     setLoading(true);
    //     setError("");
    //     setDoc(doc(db, "Test", "Boutton"), {
    //         alume: 1,
    //     }).then(() => { navigate.replace("Main"); console.log("rah") }).catch(e => setError(e.code)).finally(() => setLoading(false))
    // }
    return (
        <View
            style={styles.container}>
            <Text style={styles.HeaderText}> Please fill up the form</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="First name"
                    value={fname}
                    onChangeText={text => setFname(text)}
                    style={styles.input} />
                <TextInput placeholder="Last name"
                    value={lname}
                    onChangeText={text => setLname(text)}
                    style={styles.input} />
                <TextInput placeholder="Age"
                    value={age}
                    onChangeText={text => setAge(text)}
                    style={styles.input} />
                <TextInput placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input} />
                <TextInput placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.input} />
                <TextInput placeholder="Plant-base id"
                    value={raspId}
                    onChangeText={text => setRaspId(text)}
                    style={styles.input} />
                <Text style={{ color: "red", fontFamily: "CircularStd-Book", marginLeft: 10 }}>{error}</Text>
            </View>


            <View style={styles.buttonCountainer}>
                <TouchableOpacity onPress={handleRegister}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>{loading ? "Loading..." : "Confirme registration"}</Text>
                </TouchableOpacity>

                {/* HodaifaTest */}
                {/* <TouchableOpacity onPress={handleSend}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}> {loading ? "Loading..." : "B3eth lfire"}</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonCountainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        width: 200,
        backgroundColor: '#0782f9',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#0782f9',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {

        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    HeaderText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,
    }
})