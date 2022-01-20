import { View, Linking } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Card, Button,Title,Paragraph } from "react-native-paper";
export default function Social() {
  return (
    <View>
       
      <Card>
        <Card.Cover
          style={{ height: hp("25%") }}
          source={{
            uri: "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/social-media-icons-hanging-from-blue-string.jpg?itok=xS6jHMEy",
          }}
        />

<Card.Content style={{backgroundColor:"black"}}>
      <Title style={{color:"#FF0000" , textAlign:'center'}}>Социални мрежи</Title>
      <Paragraph style={{color:"#FF0000" , textAlign:'center'}}>Последвайте ме :</Paragraph>
    </Card.Content>
        <Card.Actions style={{ backgroundColor: "black" }}>
          <Button
            color="#FF0000"
            onPress={() => Linking.openURL("https://github.com/stdimitrov05")}
          >
            GitHub
          </Button>
          <Button color="#FF0000"
           onPress={() => Linking.openURL("https://instagram.com/st_d05")}>Instagram</Button>
        </Card.Actions>
      </Card>
     
      <View style={{ height: hp(100), backgroundColor: "black" }} />
    </View>
  );
}
