import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import animals from 'creature-app/animals.json';

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
  const [randomExtras, setRandomExtras]=useState("");
  const extras = [
    "Unicorn Horn", "Nose Horn", "Reindeer Antlers", "Long Eyelashes",
    "Huge Ears", "Cactus Spikes", "Huge Eyes", "Piebaldism", "Insect Antennae", "Moose Antlers",
    "Bee Stinger", "Glowing Eyes", "Iridescence", "Long Whiskers", "Fangs", "Extra Eyes",
    "Sheep Horns", "Albinism", "Melanism", "Spines Along The Back", "Bioluminescent",
    "Erythrism", "Heterochromia", "Leucism", "Xanthochromish", "Hairless", "Embedded Gems", "Plants", "Mushrooms",
    "Alien Antennae", "Sparkles", "Ear Tufts", "Dragon Wings", "Bird Wings", "Multiple Tails", "Long Claws", "Mane",
    "Fluffy Cheeks", "Fluffy Ears", "Colourful Spots", "Colourful Stripes", "Tusks", "Roe Deer Antlers", "Slime",
    "Ankole Watusi Horns", "Gills", "Anglerfish Lure", "Crest Feathers", "None"
  ];
  
  const generateBase = () =>{
    setRandomBase(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateHead = () =>{
    setRandomHead(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateEars = () =>{
    setRandomEars(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateEyes = () =>{
    setRandomEyes(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateNose = () =>{
    setRandomNose(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateLegs = () =>{
    setRandomLegs(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateFeet = () =>{
    setRandomFeet(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateTail = () =>{
    setRandomTail(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateCoat = () =>{
    setRandomCoat(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateColor = () =>{

    setRandomColor(animals[Math.floor(Math.random() * animals.length)]);
  }
  const generateExtras = () =>{
    const randomIndex = Math.floor(Math.random() * extras.length);
    setRandomExtras(extras[randomIndex]);
  }
  return (
    <>
      {/* Main Container */}
      <View style={styles.mainContainer}>
        {/* Webpage Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Random Chimera Maker
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
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
                <Text> {randomBase.common_name}</Text>
              ):[]}
            </View>
            <View>
              <Image
                source={{ uri: randomBase.images?.medium || randomBase.taxon_photo }}
              />
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
                <Text> {randomHead.common_name}</Text>
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
                <Text> {randomEars.common_name}</Text>
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
                <Text> {randomEyes.common_name}</Text>
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
                <Text> {randomNose.common_name}</Text>
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
                <Text> {randomLegs.common_name}</Text>
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
                  <Text> {randomFeet.common_name}</Text>
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
                <Text> {randomTail.common_name}</Text>
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
                <Text> {randomCoat.common_name}</Text>
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
                <Text> {randomColor.common_name}</Text>
              ):[]}
            </View>
          </View>

          {/* Extras Button */}
          <View style={styles.buttonRow}>
            <View>
              <Button
                title = "Extras"
                onPress={generateExtras}
                color = "#88b65e"
              />
            </View>
            <View style={styles.generatedOutput}>
              {randomExtras ? (
                <Text> {randomExtras}</Text>
              ):[]}
            </View>
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ©2026 FP, Inc. - All Rights Reserved
          </Text>
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'beige',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
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
  titleSubText: {
    textAlign: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    border: 10,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    height: 54,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 15,
  },
  generatedOutput: {
    padding:10,
  },
  outputDisplay: {
    marginLeft: 20,
    padding:20,
    borderColor: 'black',
    borderRadius: 5,
  },
  footer: {
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#88b65e',
  },
  footerText: {
    textAlign: 'center',
  }
});