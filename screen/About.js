import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Card, Appbar, Avatar, Paragraph, Title } from "react-native-paper";
export default function About() {
  return (
    <View>
      <Card>
        <Card.Cover
        style={{height: hp('25%') }}
          source={{
            uri: "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/s600x600/257430383_1808759065983085_8385350683251731787_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mgmQOdKeqTcAX8CzdT-&_nc_ht=scontent.fpdv1-1.fna&oh=00_AT_XueLhMGJLOXtjbqiA-OqjOjUEvmg-l51qAlYRtS_ncQ&oe=61EEA4A1",
          }}
        />
        <Card.Content style={{ backgroundColor: "#000000" }}>
          <Title style={{ textAlign: "center", color: "#FF0000" }}>
            {" "}
            Здравейте !
          </Title>
          <Paragraph style={{ textAlign: "center", color: "#950101" }}>
            Казвам се Станислав на 16 години съм . Живея в град Бургас уча в
            ПГЕЕ " Константин Фотинов " специалност Приложен Програмист ☺ .
            Хобито ми е да програмирам някакви малки проекти също ката и да чета
            книги за програмиране. Любимите ми езици за програмиране са
            JavaScript , PHP , Python и малко Csharp за структура Sql и Html .
            Програмирам в програмните среди на Microsoft Visual Studio Code и
            Android Studio за бази данни Mysql Workbench . Не ми се отдава много
            езиците и за дизайнерството , обичам много да се забърквам в трудни
            неща свързани с програмирането. 
          </Paragraph>
        </Card.Content>
      </Card>

      <View style={{ height: hp(100), backgroundColor: "black" }} />
    </View>
  );
}
