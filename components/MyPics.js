import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

function MyPics(props) {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoading(false);
    } catch (e) {
      alert(`Error Occurred:${e}`);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.mainContainer}>
        {isLoading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <Text style={styles.mainHeader}>List Of Students</Text>
            <FlatList
              data={myUserData}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <View style={styles.imgContainer}>
                      <Image
                        style={styles.imgStyle}
                        resizeMode="cover"
                        source={{ uri: item.image }}
                      />
                    </View>
                    <View>
                      <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio-Data</Text>
                        <Text style={styles.idNumber}>
                          {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                        </Text>
                      </View>
                      <View style={styles.mainContainer}>
                        <Text style={styles.name}>Name:{item.name}</Text>
                        <Text style={styles.email}>Email:{item.email}</Text>
                        <Text style={styles.mobile}>Phone:{item.mobile}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </Modal>
  );
}

export default MyPics;

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    paddingTop: 50,
    backgroundColor: "#B0C4DE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    borderRadius: 5,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    left: 40,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    backgroundColor: "#353535",
  },
  mainHeader: {
    fontSize: 30,
    color: "#fff",
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  imgContainer: {
    padding: 10,
  },
});
