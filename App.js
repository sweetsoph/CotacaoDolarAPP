import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Cotacao from './Components/Cotacao';
import API from './Components/API';

export default function App() {

    const [dolar, setDolar] = useState("");

    async function precoDolar(){
      const resposta = await API.get('json/last/USD-BRL');
      setDolar(resposta.data.USDBRL);
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.bloco}
          onPress={precoDolar}>
        <Text style={styles.txtBloco}>DÓLAR PARA REAL</Text>
      </TouchableOpacity>
      <Text>Clique no botão para consultar os dados da cotação.</Text>
      <Cotacao data={dolar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0, padding: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBloco: {
    borderWidth: 3,
    borderColor: '#000',
    borderStyle: 'solid',
    backgroundColor: '#DB5A53',
    borderRadius: 30,
    padding: 15,
  },
});
