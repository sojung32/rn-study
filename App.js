import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>Hello World!</Text>
      <Text style={styles.dummyText}>Hello World2!</Text>
      <Button title='Tap me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
    borderWidth: 1, 
    borderColor: 'red', 
    padding: 16
  }
});
