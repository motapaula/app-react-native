import React, { useState} from 'react';
import {Text, TextInput, View} from 'react-native';


const InputComponent = () => {
    const [initialValue, setValue] = useState('');

    return (
      <View>
        <p>Campo de pesquisa:</p>
        <TextInput
          style={{height: 40}}
          placeholder="Digite aqui sua pesquisa"
          value={initialValue}
          onChangeText={(text) => setValue(text)} // Arrow function para atualizar o estado
        />
        <Text style={{padding: 10, fontSize: 24}}>Você digitou: {initialValue}</Text>
      </View>
  );
}

export default InputComponent;