import {
  StyleSheet,
  Modal,
  Image,
  View,
  Button,
  TextInput,
} from "react-native";
import { useState } from "react";

function GaolInput(props) {
  const [enterText, setEnterText] = useState("");
  const handleEnterText = (enterText) => {
    setEnterText(enterText);
  };
  const handleClick = () => {
    props.handleClicks(enterText);
    setEnterText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          value={enterText}
          onChangeText={handleEnterText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleClick} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GaolInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
