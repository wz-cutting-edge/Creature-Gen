import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import creatures from 'creature-app/creatures.json';

const App = () => {
  const [randomName, setRandomName]=useState("");
  const animalArray = Object.values(creatures.AnimalName);
  const generate = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomName(animalArray[randomIndex]);
  }
  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View>
            <Text>Made By Aidyn, Anthony, James, and William</Text>
        </View>
        
        {/* Webpage Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Random Chimera Maker
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Base Creature"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Head"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Ears"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Eyes"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Nose"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Legs"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Feet"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Tail"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Coat"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Color"
              onPress={generate}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomName ? (
              <Text> {randomName}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text>©FP, Inc.</Text>
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'relative',
  },
  title: {
    width: '100%',
    height: '50px',
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    backgroundColor: '#88b65e',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,

  },
  generatedOutput: {
    border: '1px solid black',
    borderRadius: 5,
    padding:10,
  },
  outputDisplay: {
    marginLeft: 20,
    padding:20,
    borderColor: 'black',
    borderRadius: 5,
  },
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    right: 0,
  }
});