import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Alert 
} from "react-native";
import colors from "../utils/colors";
import { RValue } from "../utils/normalize";
import { Card, Icon } from '@rneui/themed';
import { Button} from '@rneui/base';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const image = require('../../assets/questions.png');


const HomeScreen = (props) => {


  useEffect(() => {

  }, []);

  const onPressYes =()=>{
    Alert.alert(
      "Por fin!!",
      "Ahora oficialmente eres mi novia amorcito jejejeje <3 ",
    );
  }
  const onPressYesRed =()=>{
    const onPressYes =()=>{
      Alert.alert(
        "UPS",
        "De igual forma,ahora oficialmente eres mi novia amorcito jejejeje <3 ",
      );
    }
  }

  return (
    <View style={styles.mainContainer}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.centeredView}>
            <Card>

            <Text style={styles.imageText} >Se que hemos pasado por muchas cosas, me encanta poder formar parte de tu vida y 
            ver como estas logrando lo que propones, eso me pone muy orgulloso de ti, te amo como no tienes idea, por lo cual quisiera hacerte la siguiente pregunta....... </Text>
            <Text style={styles.questionText} > ¿QUIERES SER MI NOVIA? </Text>
            <Icon name="cards-heart"  type='material-community' color={colors.red} size={RValue(50)} />
            <View style={styles.buttonsView}>
            <Button buttonStyle={{...styles.buttonStyle, backgroundColor:colors.red}}
            onPress={() => {
              
            }} 
             >
                Si pero en rojo 
                <Icon style={{marginLeft:RValue(10)}} name="check"  type='material-community' color={colors.white} />
            </Button>
            <Button  buttonStyle={{...styles.buttonStyle,backgroundColor:colors.success}}            
            onPress={() => {
            }} 
             >
                Si
                <Icon style={{marginLeft:RValue(10)}} name="check"  type='material-community' color={colors.white} />
            </Button>
            </View>
            <Card.Divider />
            {/*Aqui termina la seccion de los botones */}

            <Button buttonStyle={styles.buttonStyle}            
            onPress={() => {
              props.navigation.goBack();
              
            }} 
             >
             <Icon style={{marginRight:RValue(10)}} name="arrow-left-thin-circle-outline"  type='material-community' color={colors.white} />
                Volver a la pantalla anterior
                
            </Button>
            <Button  buttonStyle={{...styles.buttonStyle, backgroundColor:colors.primary}}            
            onPress={() => {
              props.navigation.navigate("Letter");
            }} 
             >
                Leer Carta
                <Icon style={{marginLeft:RValue(10)}} name="book-open-page-variant"  type='material-community' color={colors.white} />
            </Button>
            </Card>        
        </View>
    </ImageBackground>
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",
  flex:1
},
mainContainer: {
  flex: 1,
  backgroundColor:colors.accent
},
image: {
  flex: 1,
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