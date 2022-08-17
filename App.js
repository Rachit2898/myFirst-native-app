import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GaolInput from "./components/GaolInput";
import MyPics from "./components/MyPics";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [picsVisible, setPicsVisible] = useState(false);
  const handeClicks = (enterText) => {
    // setCourseGoals((currentGoals) => [...currentGoals, enterText]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enterText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
    // setEnterText("");
  };
  const deleteGoalItem = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const startMyPicsHandler = () => {
    setPicsVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <Button title="My Pics" color="#1E90FF" onPress={startMyPicsHandler} />
        <GaolInput
          handleClicks={handeClicks}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <MyPics visible={picsVisible} />
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItems} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoalItem}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
