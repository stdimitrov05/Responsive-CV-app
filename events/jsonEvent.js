import React from "react";
import { render } from "react-dom";
import { Button, FlatList, View } from "react-native-web";
import * as data from "../json/text.json";


export default function infoButt() {
    
    
  return (
    <View>
      <Button title="Press me" onPress={() => navigatorFile()}></Button>
    </View>
  );
}

function jsonText() {
  const jsonData = data.info


  console.info(jsonData);
  alert(jsonData.info);
}

function navigatorFile(){
    window.open('../components/second.js')
}