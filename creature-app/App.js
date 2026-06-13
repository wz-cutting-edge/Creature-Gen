import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
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

  {/* Simpler Animal Row Function */}
  const AnimalRow = ({label, animal, generateFunc}) => (
    <View style={styles.buttonRow}>
      <View style={{width: '120'}}>
        <Button
          title={label}
          onPress={generateFunc}
          color="#88b65e"
        />
      </View>
      <View style={styles.generatedOutput}>
        {animal ? (
          <Text> {animal.common_name}</Text>
        ):[]}
      </View>
      <View>
        <Image
          source={{ uri: animal.image_square_url }}
        />
      </View>
    </View>
  );

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

        {/* All Buttons */}
        <View style={styles.buttonContainer}>
          <ScrollView style={styles.rowsContainer} contentContainerStyle={{paddingVertical: 4}}>
            {/* Buttons with Images */}
            <AnimalRow label="Base Creature" animal={randomBase} generateFunc={generateBase} />
            <AnimalRow label="Head" animal={randomHead} generateFunc={generateHead} />
            <AnimalRow label="Ears" animal={randomEars} generateFunc={generateEars} />
            <AnimalRow label="Eyes" animal={randomEyes} generateFunc={generateEyes} />
            <AnimalRow label="Nose" animal={randomNose} generateFunc={generateNose} />
            <AnimalRow label="Legs" animal={randomLegs} generateFunc={generateLegs} />
            <AnimalRow label="Feet" animal={randomFeet} generateFunc={generateFeet} />
            <AnimalRow label="Tail" animal={randomTail} generateFunc={generateTail} />
            <AnimalRow label="Color" animal={randomColor} generateFunc={generateColor} />
            
            {/* Extras Button (No Images) */}
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrap}>
                <Button title="Extras" onPress={generateExtras} color="#88b65e" />
              </View>
              <View style={styles.generatedOutput}>
                {randomExtras ? <Text numberOfLines={1}>{randomExtras}</Text> : null}
              </View>
              <View style={styles.previewButton} />
            </View>
          
          </ScrollView>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
    gap: 12,
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
  rowsContainer: {
    flex: 0,
    flexShrink: 1,
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