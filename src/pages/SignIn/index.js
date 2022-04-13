import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Color } from "../../utils/Colors";
import { IcChevronLeft, IcGoogle, IcLogo, IcSignIn } from "../../assets";
import { Button, Gap, HStack, Input, Typhograpy } from "../../components";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={signIn.container}>
      <Gap height={20} />
      <Pressable style={signIn.back} onPress={() => navigation.goBack()}>
        <Image source={IcChevronLeft} />
      </Pressable>
      <View style={signIn.imgContainer}>
        <Image source={IcLogo} style={signIn.img} />
        <Gap height={10} />
        <Image source={IcSignIn} />
      </View>
      <Gap height={10} />
      <Input placeholder={"Email address"} />
      <Gap height={15} />
      <Input placeholder={"Password"} />
      <Gap height={8} />
      <Pressable onPress={() => navigation.navigate("ForgotPass")}>
        <Typhograpy size={14} fw="bold" ta={"right"}>
          Lupa Kata Sandi?
        </Typhograpy>
      </Pressable>
      <Gap height={8} />
      <Button
        onPress={() => navigation.navigate("SignUp")}
        content="LOG IN"
        bgColor={Color.orangePeel}
        color={Color.white}
      />
      <Gap height={8} />
      <Typhograpy size={14} fw="bold" color={"#A1A4B2"} ta={"center"}>
        OR
      </Typhograpy>
      <Gap height={8} />
      <Button
        onPress={() => navigation.navigate("Home")}
        content="CONTINUE WITH GOOGLE"
        variant="icon"
        icon={IcGoogle}
        bgColor={Color.white}
        color={Color.black}
      />
      <Gap height={8} />
      <HStack style={{ justifyContent: "center", marginBottom: 20 }}>
        <Typhograpy size={14} fw="bold">
          BELUM PUNYA AKUN{" "}
        </Typhograpy>
        <Pressable>
          <Typhograpy size={14} fw="bold" color={Color.orangePeel}>
            SIGN UP
          </Typhograpy>
        </Pressable>
      </HStack>
    </SafeAreaView>
  );
};

export default SignIn;

const signIn = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingHorizontal: 12,
  },
  back: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EBEAEC",
  },
  imgContainer: {
    marginTop: -40,
    alignItems: "center",
  },
  img: {
    // marginTop: -10,
    // top: -30,
  },
});
