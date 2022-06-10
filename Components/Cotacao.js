import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';


export default function Cep(props) {
  return (
  <>
    <Text style={styles.butao}>Compra: {props.data.bid}</Text>
    <Text style={styles.butao}>Venda:  {props.data.ask}</Text>
    <Text style={styles.butao}>Variação: {props.data.varBid}</Text>
    <Text style={styles.butao}>Máximo: {props.data.high}</Text>
    <Text style={styles.butao}>Mínimo: {props.data.low}</Text>
  </>
  );
}

const styles = StyleSheet.create({
    butao: {
        fontsize:15,
        marginTop:10,
        color: "#fff",
        backgroundColor: "#000",
    }
})