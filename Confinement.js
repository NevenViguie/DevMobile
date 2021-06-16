import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function Confinement(){
    const [adresse, setAdresse] = useState('Entrez une adresse');

    return (
        <View style={styles.background}>
            <View style={styles.bandeauTop}/>
            <View style={styles.bandeauBottom}/>
            <Text style={styles.texte}>Entrez votre adresse pour être informé en cas de dépassement de la distance maximale autorisée :</Text>
            <Text style={styles.titres}>CONFINEMENT</Text>
            <Text style={styles.texte2}>Votre adresse est : {adresse}</Text>
            <TextInput 
                style={styles.input}
                placeholder='Votre Adresse'
                onChangeText={(val) => setAdresse(val)}
            />
            
        </View>         
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    bandeauTop: {
        backgroundColor: "dodgerblue",
        width: '100%',
        height: 90,
    },
    bandeauBottom: {
        backgroundColor: "dodgerblue",
        width: '100%',
        height: 60,
        position :'absolute',
        bottom: 0
    },
    titres: {
        fontFamily: "monospace",
        fontSize: 22,
        fontWeight: 'bold',
        position: 'absolute',
        top: 50,
        left: 20
    },
    texte: {
        fontFamily: "normal",
        fontSize: 19,
        fontWeight: 'normal',
        top: 30,
        left: 15       
    },
    texte2: {
        fontFamily: "normal",
        fontSize: 15,
        fontWeight: 'normal',
        top: 140,       
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 15,
        margin: 45,
        width: 330
    }
})



export default Confinement;
