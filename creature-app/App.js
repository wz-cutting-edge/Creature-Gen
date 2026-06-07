import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    {/* Webpage Title */}
    <View style={styles.title}>
      <Text style = {styles.titleText}>
        Random Chimera Maker
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    flex: 1,
    backgroundColor: '#88b65e',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  outputDisplay: {
    marginLeft: 20,
    pading:20,
    borderColor: 'black',
    borderRadias: 5,
  }
});
