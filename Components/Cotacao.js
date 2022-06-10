import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';


export default function Cotacao(props) {
  return (
  <>
    <Text style={styles.resposta}>Compra: {props.data.bid}</Text>
    <Text style={styles.resposta}>Venda:  {props.data.ask}</Text>
    <Text style={styles.resposta}>Variação: {props.data.varBid}</Text>
    <Text style={styles.resposta}>Máximo: {props.data.high}</Text>
    <Text style={styles.resposta}>Mínimo: {props.data.low}</Text>
  </>
  );
}

const styles = StyleSheet.create({
  resposta: {
        fontsize:15,
        marginTop:10,
        border: '10px #000 solid',
    }
})