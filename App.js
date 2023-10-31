import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import title from "./assets/title_1.png"
import mail from "./assets/mail.png"
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
     <img style={styles.img} src={title} width ='250' height='250' >

     </img>
    
     <Text style={styles.text} >
        MANAGER YOUR <br></br>TASK
     </Text>

     <View>
      

      <TextInput style={styles.text_input} placeholder='Enter your name'>
      </TextInput>
     </View>

     <View>
      <Button style={styles.Button} title='GET STARTED &rarr;' color='#00bfff'
>

      </Button>
     </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  img: {
    top: 20,
  },
  text: {
    top: 40,
    fontSize: 22,
    textAlign: 'center',
    color: '#663399',
  },
  Icon: {
    padding: 10,
  },
  text_input: {
    height: 40,
    margin: 100,
    borderWidth: 2,
    padding: 20,
  },
  Button: {
  }
});
