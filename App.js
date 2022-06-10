import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Cotacao from './Components/Cotacao';
import API from './Components/API';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cotação Dólar para Real</Text>
      <Text>Dados da Cotação</Text>
      <Text>Compra: </Text>
      <Text>Venda: </Text>
      <Text>Variação: </Text>
      <Text>Máximo: </Text>
      <Text>Mínimo: </Text>
      <StatusBar style="auto" />
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
});
