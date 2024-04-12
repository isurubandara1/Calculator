import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>... CALCULATOR ...</Text>
        </View >

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
            <Button title='+'></Button>
          </View>
          <View style={styles.button}>
            <Button title='-'></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='*'></Button>
          </View>
          <View style={styles.button}>
            <Button title='/'></Button>
          </View>
          <View style={styles.button}>
            <Button title='C'></Button>
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

  titleContainer:{
    marginBottom: 25,
  },
  titleText:{
    fontSize:30,
    color:"green",
    fontWeight:"bold",
  },
  firstTestContainer: {
    marginBottom: 20,
  },
  firstText: {
    fontSize: 20,
    fontStyle:"italic",
  },
  secondText: {
    fontSize: 30,
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
