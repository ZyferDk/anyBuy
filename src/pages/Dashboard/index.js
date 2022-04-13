import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { IcLogo, IntroImg } from "../../assets";
import { HStack, Typhograpy, Button, Gap } from "../../components";
import { Color } from "../../utils/Colors";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Gap height={58} />
        <Image source={IcLogo} style={styles.logo} />
        <HStack style={{ marginTop: 10 }}>
          <Typhograpy size={24} fw="bold" color={Color.white}>
            Any
          </Typhograpy>
          <Typhograpy size={24} fw="bold" color={Color.orangePeel}>
            Buy
          </Typhograpy>
        </HStack>
        <Gap height={64} />
        <Image source={IntroImg} style={styles.intro} />
      </View>
      <View style={styles.footer}>
        <Button
          content={"GET STARTED"}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
