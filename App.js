import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>
        <View style={styles.firstTestContainer}>
          <Text style={styles.firstText}>Calculate part</Text>
        </View >
        <View style={styles.firstTestContainer}>
          <Text style={styles.secondText}>Last value</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='1'></Button>
          </View>
          <View style={styles.button}>
            <Button title='2'></Button>
          </View>
          <View style={styles.button}>
            <Button title='3'></Button>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='4'></Button>
          </View>
          <View style={styles.button}>
            <Button title='5'></Button>
          </View>
          <View style={styles.button}>
            <Button title='6'></Button>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='7'></Button>
          </View>
          <View style={styles.button}>
            <Button title='8'></Button>
          </View>
          <View style={styles.button}>
            <Button title='9'></Button>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='0'></Button>
          </View>
          <View style={styles.button}>
            <Button title='C'></Button>
          </View>
          <View style={styles.button}>
            <Button title='+'></Button>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='*'></Button>
          </View>
          <View style={styles.button}>
            <Button title='-'></Button>
          </View>
          <View style={styles.button}>
            <Button title='/'></Button>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='='></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstTestContainer: {
   
    marginBottom: 20,
  },
  firstText: {
    fontSize: 20,
  },
  secondText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  ButtonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    width: 80, 
    height: 60,
    marginHorizontal: 5, 
    
    
  },
});
