import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image
 } from 'react-native';


class KittenView extends Component {
  static navigationOptions = {
    title: 'Kitten View',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#841584',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 30,
      marginTop: 20 
    },
  };

  render() {
    const image = this.props.navigation.getParam('otherParam', 'https://placekitten.com/250/150?image=14');
    const name = this.props.navigation.getParam('nameKit', 'Mister Kitten');
    const {imgStyle, nameStyle, textStyle, container} = styles;
    return (
      <View styles={container}>
          <Image source={{uri: `${image}`}} style={imgStyle}/>
            <Text style={nameStyle}>{name}</Text>
              <Text style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis justo est, dapibus vitae dictum vitae, venenatis ac urna. 
                        Suspendisse elit mi, pretium ac semper at, varius ac libero. 
                          Donec id ipsum dolor. Sed sollicitudin est non mi efficitur, 
                        a dictum lectus dictum. Ut suscipit nisi vel sollicitudin luctus. 
                      In dignissim, nisi quis luctus molestie, felis odio ultricies libero,
                    a tincidunt enim dolor non est. 
              </Text>
      </View>
    );
  }
}

export default KittenView;

const styles = {
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  imgStyle: {
    width: "100%",
    height: 200
  },
  nameStyle: {
    marginTop:10,
    marginBottom:10,
    color: "#841584",
    alignSelf: 'center',
    fontSize: 30
  },
  textStyle: {
    margin:10,
    alignSelf: 'center', 
    fontSize: 16, 
    justifyContent: "center", 
    textAlign: 'center'
  }
};