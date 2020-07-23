import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as firebase from 'firebase'
import db from '../config.js'
import confetiAnimation from '../Components/Confeti'
import ConfetiAnimation from '../Components/Confeti';

export default class WriteScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      storyText:'',
      submitMessage:'',
      author:'',
      tilte:'',
    }
  }

  initiateStorySubmission = async() =>{

    db.collection("stories").add({
      'title': this.state.title,
      'author' : this.state.author,
      'storyText' : this.state.storyText,
      'date' : firebase.firestore.Timestamp.now().toDate(),
    })

    this.setState({
      title:'',
      author:'',
      storyText:'',
    })
  }
  
  render(){
      return(
        <KeyboardAwareScrollView
          style={{ backgroundColor: 'black' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >
            <View>
              <Image
                source = {require("../assets/logo.png")}
                style= {{width:200, height:200, alignSelf:'center'}}/>
              <Text style={{textAlign:'center', fontSize:20, color:'white'}}>The perfect destination for good bedtime stories</Text>
            </View>

            <View style={styles.inputView}>
            <TextInput
              multiline = {false}
              style={styles.TitleBox}
              placeholder="Title"
              placeholderTextColor = 'grey'
              onChangeText ={text => this.setState({title:text})}
              //value={this.state.newstory}
              value = {this.state.title}/>

            <TextInput
              multiline = {false}
              style={styles.authorBox}
              placeholder="Author's Name"
              placeholderTextColor = 'grey'
              onChangeText ={text => this.setState({author:text})}
              //value={this.state.newstory}
              value = {this.state.author}/>

              <TextInput
              multiline = {true}
              style={styles.storyBox}
              placeholder="Show your skills, write a story!"
              placeholderTextColor = 'grey'
              onChangeText ={text => this.setState({storyText:text})}
              //value={this.state.newstory}
              value = {this.state.storyText}/>
            </View>

            <Text style={styles.submitAlert}>{this.state.submitMessage}</Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={async()=>{
                {{Alert.alert('Thank you for submitting your story, we will go through it')}
              this.initiateStorySubmission()}
              <ConfetiAnimation/>
              }}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
      )
    }
  }

const styles = StyleSheet.create({

  inputView:{
    flexDirection: 'column',
    margin: 5,
  },
  storyBox:{
    width:300,
    height: 190,
    borderWidth: 1,
    fontSize: 13,
    padding : 10,
    borderColor:'grey',
    textAlign : 'left',
    textAlignVertical: 'top',
    alignSelf:'center',
    color : 'white'
  },
  TitleBox:{
    width:300,
    height: 45,
    borderWidth: 1,
    fontSize: 20,
    borderColor:'grey',
    textAlign : 'center',
    color : 'white',
    marginBottom: 10,
    alignSelf:'center',
    textAlignVertical: 'center',
    
  },
  authorBox:{
    width:300,
    height: 25,
    borderWidth: 1,
    fontSize: 9,
    borderColor:'grey',
    textAlign : 'center',
    color : 'white',
    marginBottom : 10,
    alignSelf:'center',
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50,
    alignSelf:'center',
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'black'
  }
});
