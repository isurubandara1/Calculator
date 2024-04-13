import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleInput = (input) => {
    if (input === 'C') {
      clearDisplay();
    } else if (!isNaN(input)) {
      if (waitingForSecondOperand) {
        setDisplayValue(String(input));
        setWaitingForSecondOperand(false);
      } else {
        setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
      }
    } else if (input === '+' || input === '-' || input === '*' || input === '/') {
      handleOperator(input);
    } else if (input === '=') {
      performOperation();
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(parseFloat(firstOperand), inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performOperation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const result = calculate(parseFloat(firstOperand), inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
    }
    setWaitingForSecondOperand(true);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>CALCULATOR</Text>
        </View>
        <View style={styles.firstTestContainer}>
          <Text style={styles.firstText}>Calculate part</Text>
          <Text style={styles.secondText}>{displayValue}</Text>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='1' onPress={() => handleInput('1')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='2' onPress={() => handleInput('2')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='3' onPress={() => handleInput('3')}></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='4' onPress={() => handleInput('4')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='5' onPress={() => handleInput('5')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='6' onPress={() => handleInput('6')}></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='7' onPress={() => handleInput('7')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='8' onPress={() => handleInput('8')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='9' onPress={() => handleInput('9')}></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='0' onPress={() => handleInput('0')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='+' onPress={() => handleInput('+')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='-' onPress={() => handleInput('-')}></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='*' onPress={() => handleInput('*')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='/' onPress={() => handleInput('/')}></Button>
          </View>
          <View style={styles.button}>
            <Button title='C' onPress={() => handleInput('C')}></Button>
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='=' onPress={() => handleInput('=')}></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  titleContainer:{
    marginBottom: 25,
    backgroundColor:"green",
    height:80,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    width:"80%",
    elevation:50,
  },
  titleText:{
    fontSize:30,
    color:"white",
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
    width: 90, 
    height: 50,
    marginHorizontal: 5, 
    
    
  },
});
