import React, { useState} from 'react';
import {Text, TextInput, View} from 'react-native';


const InputComponent = () => {
    const [initialValue, setValue] = useState('');

    return (
      <View>
        <p>Campo de pesquisa:</p>
        <TextInput
          placeholder="Digite aqui sua pesquisa"
          value={initialValue}
          onChangeText={(text) => setValue(text)} // Arrow function para atualizar o estado
        />
        <Text>Você digitou: {initialValue}</Text>
      </View>
  );
}

export default InputComponent;