import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        AllStories: [],
        lastVisibleTransaction: null,
        search:''
      }
    }

    findMoreStories = async ()=>{
      var text = this.state.search 
      var enteredText = text.split("")

      if (enteredText[0]() ==='T'){
      const query = await db.collection("stories").where('title','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          AllStories: [...this.state.AllStories, doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
  }

    searchStories= async(text) =>{
      var enteredText = text.split("")  
      if (enteredText[0]  ==='N'){
        const stories =  await db.collection("stories").where('title','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            AllStories:[...this.state.AllStories,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
      else if (enteredText[0]  ==='T'){
        const stories =  await db.collection("stories").where('title','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            AllStories:[...this.state.AllStories,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
      else if (enteredText[0]  ==='R'){
        const stories =  await db.collection("stories").where('title','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            AllStories:[...this.state.AllStories,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
      else if (enteredText[0]  ==='Z'){
        const stories =  await db.collection("stories").where('title','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            AllStories:[...this.state.AllStories,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
      else if (enteredText[0]  ==='D'){
        const stories =  await db.collection("stories").where('title','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            AllStories:[...this.state.AllStories,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
    }
    
    

    componentDidMount = async ()=>{
      const query = await db.collection("stories").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          AllStories: [...this.state.AllStories,doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }

    render() {
      return (
        <ScrollView style = {styles.container}>
          <View style={styles.container}>
            <View>
              <Text style = {styles.title}>Search stories</Text>
            </View>
          <View style={styles.searchBar}>
            <TextInput 
              style ={styles.bar}
              placeholderTextColor = "grey"
              placeholder = "Enter story's Title"
              onChangeText={(text)=>{this.setState({search:text})}}/>
              <TouchableOpacity
                style = {styles.searchButton}
                onPress={()=>{
                  this.searchStories(this.state.search)
                  this.setState({
                    AllStories: [],
                    search:''
                  })
                }}
            >
              <Text style = {{fontSize:10, color:'black'}}>Search</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={this.state.AllStories}
            renderItem={({item})=>(
              <View style={{borderWidth: 1, margin:10, borderColor:'grey', padding:10, alignItems:"center"}}>
                <View >
                  <Text style = {styles.itemText}>{"Title :   " + item.title}</Text>
                  <Text style = {styles.itemText}>{"Author :  " + item.author}</Text>
                </View>
                <View>
                  <TouchableOpacity style = {styles.button}>
                    <Text style = {{color:'black', textAlign:'center', fontSize:20}}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor= {(item, index)=> index.toString()}
            onEndReached ={this.findMoreStories}
            onEndReachedThreshold={0.7}
          /> 
        </View>
        </ScrollView>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      alignItems:'center'
    },
    bar:{
      borderColor: "grey",
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
      color:"white",
      margin:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#FBC02D"
    },
    itemText:{
      color:'white',
      fontSize:16,
      marginTop:2
    },
    title:{
      fontSize:40,
      textAlign:"center",
      color:'white',
      marginBottom:20,
      marginTop:30,
      fontWeight:"bold"
    },
    button:{
      width:140,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#FBC02D",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        margin:10,
    }
  })

