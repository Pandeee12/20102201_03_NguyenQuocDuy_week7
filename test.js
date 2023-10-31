import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import title from "./assets/title_1.png"
import mail from "./assets/mail.png"
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <Icon style={styles.searchIcon} name="mail" size={20} color="#000"/>
    <TextInput
        style={styles.input}
        placeholder="User Nickname"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
});
