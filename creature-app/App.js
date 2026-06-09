import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import creatures from 'creature-app/creatures.json';

const App = () => {
  const [randomBase, setRandomBase]=useState("");
  const [randomHead, setRandomHead]=useState("");
  const [randomEars, setRandomEars]=useState("");
  const [randomEyes, setRandomEyes]=useState("");
  const [randomNose, setRandomNose]=useState("");
  const [randomLegs, setRandomLegs]=useState("");
  const [randomFeet, setRandomFeet]=useState("");
  const [randomTail, setRandomTail]=useState("");
  const [randomCoat, setRandomCoat]=useState("");
  const [randomColor, setRandomColor]=useState("");
  const animalArray = Object.values(creatures.AnimalName);
  
  const generateBase = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomBase(animalArray[randomIndex]);
  }
  const generateHead = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomHead(animalArray[randomIndex]);
  }
  const generateEars = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomEars(animalArray[randomIndex]);
  }
  const generateEyes = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomEyes(animalArray[randomIndex]);
  }
  const generateNose = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomNose(animalArray[randomIndex]);
  }
  const generateLegs = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomLegs(animalArray[randomIndex]);
  }
  const generateFeet = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomFeet(animalArray[randomIndex]);
  }
  const generateTail = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomTail(animalArray[randomIndex]);
  }
  const generateCoat = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomCoat(animalArray[randomIndex]);
  }
  const generateColor = () =>{
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    setRandomColor(animalArray[randomIndex]);
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

        {/* Base Creature Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Base Creature"
              onPress={generateBase}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomBase ? (
              <Text> {randomBase}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Head Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Head"
              onPress={generateHead}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomHead ? (
              <Text> {randomHead}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Ears Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Ears"
              onPress={generateEars}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomEars ? (
              <Text> {randomEars}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Eyes Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Eyes"
              onPress={generateEyes}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomEyes ? (
              <Text> {randomEyes}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Nose Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Nose"
              onPress={generateNose}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomNose ? (
              <Text> {randomNose}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Legs Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Legs"
              onPress={generateLegs}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomLegs ? (
              <Text> {randomLegs}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Feet Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Feet"
              onPress={generateFeet}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomFeet ? (
                <Text> {randomFeet}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Tail Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Tail"
              onPress={generateTail}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomTail ? (
              <Text> {randomTail}</Text>
            ):[]}
          </View>
        </View>
        
        {/* Coat Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Coat"
              onPress={generateCoat}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomCoat ? (
              <Text> {randomCoat}</Text>
            ):[]}
          </View>
        </View>
       
        {/* Color Button */}
        <View style={styles.buttonRow}>
          <View>
            <Button
              title = "Color"
              onPress={generateColor}
              color = "#88b65e"
            />
          </View>
          <View style={styles.generatedOutput}>
            {randomColor ? (
              <Text> {randomColor}</Text>
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