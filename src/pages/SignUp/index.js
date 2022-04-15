import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IcLogo } from "../../assets";
import { Button, Gap, HStack, Input, Typhograpy } from "../../components";
import { Color } from "../../utils/Colors";
import { fopas } from "../ForgotPass";
import { signIn } from "../SignIn";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={signIn.container}>
      <SafeAreaView>
        <Button variant={"back"} onPress={() => navigation.goBack()} />
        <View style={signIn.imgContainer}>
          <Image source={IcLogo} style={signIn.img} />
        </View>
        <View style={signUp.text}>
          <Typhograpy size={24} color={Color.black} fw="700">
            SIGN UP
          </Typhograpy>
          <Typhograpy size={14} color={Color.liver} fw="400">
            isi identitas kamu yuk!
          </Typhograpy>
        </View>
        <Input label={"E-mail"} placeholder={"Email Address"} />
        <Input label={"Password"} placeholder={"Password"} />
        <Input label={"Nomor Telepon"} placeholder={"0851-XXXX-XXXX"} />
        <Gap height={62} />
        <Button
          content={"DAFTAR SEKARANG"}
          bgColor={Color.orangePeel}
          color={Color.white}
        />
        <Gap height={21} />
        <HStack style={fopas.cs}>
          <Typhograpy size={14} color={Color.liver} fw="400">
            udah punya akun?{" "}
          </Typhograpy>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Typhograpy size={14} color={Color.orangePeel} fw="400">
              Sign-In yuk!
            </Typhograpy>
          </Pressable>
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

export const signUp = StyleSheet.create({
  text: {
    marginHorizontal: 23,
    marginVertical: 29,
  },
});
