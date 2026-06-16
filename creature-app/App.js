import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';
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

  const [preview, setPreview] = useState(null);
  
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
      <View style={{width: 120}}>
        <Button
          title={label}
          onPress={generateFunc}
          color="#88b65e"
        />
      </View>
      <View style={styles.generatedOutput}>
        {animal ? <Text> {animal.common_name}</Text> : null}
      </View>
      {/* Image Preview Button (Only if animal generated) */}
      {animal ? (
        <TouchableOpacity style={styles.previewButton} 
        onPress={() => setPreview({url: animal.image_url, name: animal.common_name})}
        accessibilityLabel={`Preview of ${animal.common_name}`}
        >
          <Text style={{fontSize: 18}}>🔍</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.previewButton} />
      )}
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

        <View style={styles.contentArea}>

          {/* All Buttons */}
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

          {/* Preview Panel */}
          <View style={styles.previewPanel}>
              {preview ? (
                <>
                  <Image
                    source={{ uri: preview.url }}
                    style={styles.previewImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.previewName}>{preview.name}</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setPreview(null)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <View style={styles.previewPlaceholder}>
                  <Text style={styles.previewPlaceholderText}>🔍</Text>
                  <Text style={styles.previewPlaceholderLabel}>
                    Press an animal's{'\n'}icon to preview
                  </Text>
                </View>
              )}
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
    alignItems: 'row',
  },
  titleContainer: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
  contentArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
    gap: '6%',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 15,
  },
  previewButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewPanel: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  previewImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 10,
  },
  previewName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#88b65e',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  rowsContainer: {
    flex: 1,
  },
  generatedOutput: {
    flex: 1,
    padding:10,
  },
  outputDisplay: {
    marginLeft: 20,
    padding:20,
    borderColor: 'black',
    borderRadius: 5,
  },
  buttonWrap: {
    width: 120,
  },
  previewPlaceholder: {
    alignItems: 'center',
    gap: 8,
  },
  previewPlaceholderText: {
    fontSize: 36,
    opacity: 0.3,
  },
  previewPlaceholderLabel: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 13,
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