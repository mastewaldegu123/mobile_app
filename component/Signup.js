import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function Signup({navigation}) {
 
    const [full_name,setFullName]=useState('')
    const [email,setEmail]=useState('')
  
  const  handleReg=()=>{


    axios.post('http://192.168.88.164:8000/register', {
      full_name: full_name,
      email: email,
      
    })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }
    const handleClick=()=>{
      navigation.navigate('Login')
    }

  return (
   
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
    
    
      <Button style={styles.button} title='WELCOME BACK !'/>
      
      </View>
      
    <View style={styles.input}>
      
        
      <Text style={styles.text1}>fullName </Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setFullName(e)} value={full_name}/>
      <Text style={styles.text1}>Email</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setEmail(e)} value={email}/>
      
   
      <View style={styles.button}>
      <Button title='register' onPress={()=>handleReg()} />
      
      </View>
      <Text>if you have an account <Text onPress={handleClick} style={styles.text1}>Click here!</Text></Text>
    </View>
   
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box:{
    flex:1,
    alignItems:'flex-end',
    
    justifyContent:'flex-end',
   
    
  },
  text1:{
color:'red',
backgroundColor:'blue'
  },
  text:{
  
  backgroundColor:'blue',
  
  
  alignItems:'center',
  justifyContent:'center',
  color:'white',
  fontSize:15
  },
  input:{
flex:2,


  },
  inputs:{
   
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    width:300,
    padding: 8,
    margin:10,
    
  
  },
text1:{
color:'black',
marginLeft:10,

},

button:{
  
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around',

},

finger:{
backgroundColor:'lightseagreen',
justifyContent:'center',
height:40,
width:100,
},
wel:{
backgroundColor:''
}

});
