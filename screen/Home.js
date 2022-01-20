import * as React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Card, Appbar, Avatar, Paragraph, Title } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#000000" }}>
        <Appbar.Content
          title="CV"
          subtitle={"stdimitrov05`s  app"}
          color="#3D0000"
        />
        <Appbar.Action
          color="#950101"
          icon="phone"
          onPress={() => navigation.navigate("About")}
        />
        <Appbar.Action
          color="#950101"
          icon="earth"
          onPress={() => navigation.navigate("Social")}
        />
        <Appbar.Action
          color="#950101"
          icon="book"
          onPress={() => navigation.navigate("Task")}
        />
      </Appbar.Header>

      <Card>
        <Card.Cover
          source={{
            uri: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
          }}
        />
        <Card.Content style={{ backgroundColor: "#000000" }}>
          <Title style={{ textAlign: "center", color: "#FF0000" }}>
            {" "}
            Добре Дошли !
          </Title>
          <Paragraph style={{ textAlign: "center", color: "#950101" }}>
            В моето мобилно СV . Това е пръвото ми приложение от периида ми като
            ученик . Структурата на приложението е проста и има три странички. В
            тях може да разберете повече информация за мен и мойте социални
            мрежи.
          </Paragraph>
        </Card.Content>
      </Card>

      <View style={{ height: hp(100), backgroundColor: "black" }} />
    </View>
  );
}
