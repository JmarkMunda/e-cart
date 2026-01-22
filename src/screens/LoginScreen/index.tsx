import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../components/Text";
import Container from "../../components/Container";
import TextInput from "../../components/TextInput";
import CustomIcon from "../../components/CustomIcon";
import { useAppTheme } from "../../utils/themes";
import Button from "../../components/Button";
import { Props } from "./utils/types";
import { useStore } from "../../store";

const LoginScreen = ({ navigation }: Props) => {
  const { colors } = useAppTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useStore((state) => state.login);

  return (
    <Container useSafeArea contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={{ marginVertical: 16 }}>
        <Text variant="title" color={colors.text}>
          Welcome to E-Cart
        </Text>
      </View>

      {/* INPUTS */}
      <View style={{ gap: 16 }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          renderIcon={() => <CustomIcon family="MaterialIcons" name="email" color={colors.text} />}
          hasError={!email}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          renderIcon={() => <CustomIcon family="MaterialIcons" name="lock" color={colors.text} />}
          hasError={!password}
        />

        <Button title="Login" onPress={login} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
