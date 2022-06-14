import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";
import colors from "../utils/colors";
import { RValue } from "../utils/normalize";
import { Card, Icon } from '@rneui/themed';
import { Button} from '@rneui/base';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const image = require('../../assets/initialBackground.png');
const flork = require('../../assets/flork.png')



const InitialScreen = (props) => {
  const [isDanger, setDanger] = React.useState(false);
  const [status, setStatus] = React.useState(0);


  useEffect(() => {

  }, []);

  return (
    <View style={styles.mainContainer}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.centeredView}>
            <Card>
            <Card.Title>¡¡ATENCION!!</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={flork}
                resizeMode="center"
            />
            <Text style={styles.imageText} >Bueno señorita novia, esto es una pequeña sorprecita que te prepare, se que no es mucho o que tal vez es algo simple, pero espero te guste, por favor de click en el boton siguiente....... </Text>
            <Text style={styles.PDText} >PD: Puse el fondo de corazones y la letra azul por tu color favorito jejeje </Text>
            <Card.Divider />
            <Button  buttonStyle={styles.buttonStyle}            
            onPress={() => {
              props.navigation.navigate("Home");
            }} 
             >
                Siguiente    
                <Icon style={{marginLeft:RValue(10)}} name="arrow-right-thin-circle-outline"  type='material-community' color={colors.white} />
            </Button>
            </Card>        
        </View>
    </ImageBackground>
    </View>
  );
};


export default InitialScreen;

const styles = StyleSheet.create({
    centeredView: {
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    flex:1
  },
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  imageText:{
    color:colors.blue,
    fontSize:RValue(16), 
    textAlign:"justify",
    marginHorizontal:RValue(20),
    marginBottom:RValue(10)
  },
  PDText:{
    color:colors.gray,
    fontSize:RValue(12), 
    textAlign:"center",
    marginHorizontal:RValue(20),
    marginBottom:RValue(10)
  },
  buttonStyle:{
    marginBottom:RValue(10),
    borderRadius:RValue(20)
  }


});