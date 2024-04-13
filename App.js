import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [pressedCharacters, setPressedCharacters] = useState('');

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
      setPressedCharacters(prevCharacters => prevCharacters + input);
    } else if (input === '+' || input === '-' || input === '*' || input === '/') {
      handleOperator(input);
      setPressedCharacters(prevCharacters => prevCharacters + input);
    } else if (input === '=') {
      performOperation();
      setPressedCharacters(prevCharacters => prevCharacters + input);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setPressedCharacters('');
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

      <View style={{ flex: 1, alignItems: "center", justifyContent:"center", backgroundColor:"#55f2f2"}}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>CALCULATOR</Text>
        </View>

        <View style={styles.firstTestContainer}>
          <Text style={styles.firstText}>{pressedCharacters}</Text>
          <Text style={styles.secondText}>{displayValue}</Text>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
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
    color:"grey",
    fontWeight:"bold",
    
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
    backgroundColor: '#2196F3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
});
