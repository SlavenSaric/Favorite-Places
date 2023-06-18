import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

export default function PlaceForm({onCreatePlace}){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPlace, setEnteredPlace] = useState('')
    const [pickedImage, setPickedImage] = useState()

    function changeTitleHandler(enteredText){
        setEnteredTitle(enteredText)
    }

    function changePlaceHandler(enteredPlace){
        setEnteredPlace(enteredPlace)
    }

    function takeImageHandler(imageUri){
        setPickedImage(imageUri)
    }

    function savePlaceHandler(){
        const placeData = new Place(enteredTitle, pickedImage, enteredPlace)
        onCreatePlace(placeData)
    }

    return (
        <ScrollView style={styles.form}>
            <View >
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
            </View>
            <ImagePicker onTakeImage={takeImageHandler} />
            <View>
            <Text style={styles.label}>Place</Text>
                <TextInput style={styles.input} onChangeText={changePlaceHandler} value={enteredPlace}/>
            </View>
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})