import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import KittenView from './screens/kittenView';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    } 
  }

  static navigationOptions = {
    title: 'Kitten List',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#841584',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign:"center", 
      flex:1,
      marginBottom: 20,
      marginTop: 20 
    },
  };
  


componentDidMount() {
    try {
        const data = [], range = 100
        for(var i = 0; i < range; i++){
          const num = Math.floor((Math.random() * 10) + 1);
            data[i]=`https://placekitten.com/250/150?image=` + num;   
        }
        const newArr = data;
        this.setState({data: newArr })
        return newArr;
        } 
     catch(err) {
      alert('No internet connection')
    } 
  }



render() {
    const {containerStyle, imageStyle, nameStyle, container, container1} = styles;
    const catNames = require('cat-names');
return (
  <View styles={container}>
                  <ScrollView style={containerStyle}>
                    <FlatList
                      data={this.state.data}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => {
                          const name = catNames.random()
                          return (<TouchableOpacity onPress = {() =>
                          this.props.navigation.navigate('Details', {itemId: 86,
                          otherParam: `${item}`,
                          nameKit: `${name}`})} style={container1}>
                          <Image  source={{uri: item}} style={imageStyle} />
                          <Text style={nameStyle}>{name}</Text>
                      </TouchableOpacity>)}
                      }
                      keyExtractor={item => item + Math.random()}
                    />
                  </ScrollView>
      </View>
  
    )
  } 
}

const AppNavigator = createStackNavigator(
    {
      Home: App,
      Details: KittenView
    },
    {
      initialRouteName: "Home"
    }
  );
  
export default createAppContainer(AppNavigator);


const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    marginTop: 10,
   width: "100%",
     height: "80%"
 },
 container1: {
  alignSelf: 'center',
  margin: 5,
  borderColor: "#841584",
  borderRadius: 5,
  borderWidth: 1,
  marginBottom: 10,
  width: "80%",
  marginTop: 10,
  backgroundColor: "black",
},
imageStyle: {
  width: 250,
  height: 150, 
  borderRadius: 5,
  borderWidth:1,
  borderColor: "#841584",
  margin: 10, 
  alignSelf: 'center'
},
nameStyle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 5,
  alignSelf: 'center',
  color:"#841584"
}
};

