import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap, HStack, Input, Typhograpy } from "../../components";
import { signIn } from "../SignIn";
import { Color } from "../../utils/Colors";

const ForgotPass = ({ navigation }) => {
  return (
    <ScrollView style={signIn.container}>
      <SafeAreaView>
        <Button variant={"back"} onPress={() => navigation.goBack()} />
        <View style={fopas.text}>
          <Typhograpy size={24} color={Color.black} fw="700">
            LUPA KATA SANDI
          </Typhograpy>
          <Typhograpy size={14} color={Color.liver} fw="400">
            silahkan masukkan email kamu atau nomor telepon untuk verifikasi
            reset kata sandi
          </Typhograpy>
        </View>
        <Input placeholder={"Email Address"} />
        <Gap height={62} />
        <Button
          content={"KIRIM SEKARANG"}
          bgColor={Color.orangePeel}
          color={Color.white}
        />
        <Gap height={21} />
        <HStack style={fopas.cs}>
          <Typhograpy size={14} color={Color.liver} fw="400">
            masih bermasalah?{" "}
          </Typhograpy>
          <Typhograpy size={14} color={Color.orangePeel} fw="400">
            hubungi CS yuk!
          </Typhograpy>
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPass;

export const fopas = StyleSheet.create({
  text: {
    margin: 23,
  },
  cs: {
    alignItems: "center",
    justifyContent: "center",
  },
});
