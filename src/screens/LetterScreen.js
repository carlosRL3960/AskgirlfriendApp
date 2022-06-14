import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView
} from "react-native";
import colors from "../utils/colors";
import { RValue } from "../utils/normalize";
import { Card, Icon } from '@rneui/themed';
import { Button} from '@rneui/base';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const image = require('../../assets/letter.png');



const LetterScreen = (props) => {



  useEffect(() => {

  }, []);

  return (
    <View style={styles.mainContainer}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Card containerStyle={{paddingBottom:RValue(100)}}>
            <Card.Title>13-06-2022</Card.Title>
            <Card.Divider />
            <ScrollView>
              <Text style={styles.imageText} >Y bueno , ya por ultimo quiero hacerte una carta, se que es virtual pero la teclee pensando en ti (porque no se puede escribir :c), primero que nada,
              no te desanimes por lo del verano corazón, yo se que eres muy capaz y vas a lograr pasarlo, sabes que te apoyo en todo, no tiene porque tu cargar con todo
              ademas, cómo ya te dije, tiene a Isabel y Cass, que sera un apoyo para ti, haciendo de lado eso, quisiera pedirte perdon ;c  , se que me tarde un en pedirtelo, pero
              creeme que cada linea de codigo y diseño que le dedique a la App(aunque sea sencilla), lo hice pensando en que sea lo más bonito y para ti, porque eso es lo que te mereces
              solo cosas bonitas igual que tú</Text>
              
              <Text style={styles.imageText} >De igual forma te quiero decir que TE AMO como no tienes una idea, llegaste a mi vida cuando menos esperaba y no pense que en tan poco tiempo te fueras
               a convertir en alguien tan especial para mi, espero que me permitas seguir formando parte de ti vida por muchos años más, porque si quiero ser esa persona que te acompañe en todo momento,
               en las buenas, en las mapas y en las peores, nuevamente...................... TE AMO </Text>
               <Text style={{textAlign:"center"}} >Atte:Carlos Eduardo Robles López , mejor dicho, tu novio</Text>
               <Icon name="cards-heart"  type='material-community' color={colors.red} size={RValue(50)} />

              <Button buttonStyle={styles.buttonStyle}            
              onPress={() => {
                props.navigation.goBack();
                
              }} 
              >
              <Icon style={{marginRight:RValue(10)}} name="arrow-left-thin-circle-outline"  type='material-community' color={colors.white} />
                  Volver a la pantalla anterior
                  
              </Button>
            </ScrollView>

            </Card>        
    </ImageBackground>
    </View>
  );
};


export default LetterScreen;

const styles = StyleSheet.create({

mainContainer: {
  flex: 1,
},
image: {
  flex: 1,
  paddingTop:RValue(25)
},
imageText:{
  color:colors.black,
  fontSize:RValue(16), 
  textAlign:"justify",
  marginHorizontal:RValue(20),
  marginBottom:RValue(10)
},
buttonStyle:{
  marginBottom:RValue(10),
  borderRadius:RValue(20)
},
questionText:{
  color:colors.black,
  fontSize:RValue(26), 
  textAlign:"center",
  marginHorizontal:RValue(20),
  marginBottom:RValue(10)
},
buttonsView:{
  justifyContent:"space-around",
  flexDirection:"row",
  marginTop:RValue(15)
}


});