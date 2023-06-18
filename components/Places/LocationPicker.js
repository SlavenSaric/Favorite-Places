import { Alert, View } from "react-native"
import OutlinedButton from "../UI/OutlinedButton"
import { StyleSheet } from "react-native"
import { Colors } from "../../constants/colors"
import {getCurrentPositionAsync} from 'expo-location'
import {useForegroundPermissions, PermissionStatus} from 'expo-location'

export default function LocationPicker(){
    const [info, request] = useForegroundPermissions()
    async function verifyPermissions(){
        if(info.status === PermissionStatus.UNDETERMINED){
            const response = await request()
            return response.granted
        }
        if(info.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Permissions', 'Check your permissions')
            return false
        }
        return true
    }

   async function getLocationHandler(){
        const hasPemission = await verifyPermissions()
        if(!hasPemission) return
        const location = await getCurrentPositionAsync()
        console.log(location);
    }

    function pickOnMapHandler(){

    }

    return <View>
        <View style={styles.mapPreveiw}>
            
            
            
        </View>
        <View style={styles.actions}>
            <OutlinedButton icon='location' onPress={getLocationHandler}>Locate User</OutlinedButton>
            <OutlinedButton icon='map' onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    mapPreveiw:{
        width: '100%', 
        height: 200, 
        marginVertical: 8, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: Colors.primary100, 
        borderRadius: 4
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 5
    }
})