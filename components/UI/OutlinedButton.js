import { Pressable, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function OutlinedButton({onPress, icon, children}){
    return <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} size={18} style={styles.icon}/>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6,
        color: Colors.primary500
    },
    text: {
        color: Colors.primary500
    }
})