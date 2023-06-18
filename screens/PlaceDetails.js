import OutlinedButton from "../components/UI/OutlinedButton";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { deletePlaceDetails, fetchPlaceDetails } from "../util/database";
import Button from "../components/UI/Button";
import { FlatList } from "react-native";

export default function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();
  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const detail = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(detail);
      navigation.setOptions({
        title: detail.title,
      });
    }
    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        Loading place data...
      </Text>
    );
  }

  function deleteItemHandler(id) {
    async function deleteItem(id) {
      const res = await deletePlaceDetails(id);
    }
    deleteItem(id);
    navigation.navigate("AllPlaces");
  }
  

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={deleteItemHandler.bind(this, selectedPlaceId)}>
            Delete
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-end",
  },
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
