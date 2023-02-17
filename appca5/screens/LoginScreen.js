import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ToastAndroid,
  Platform,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { email, password } = data;
    /**
     * createUserWithEmailAndPassword -> email, password
     */
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(async (userCredential) => {
        // User account created successfully
        console.log(userCredential.user);
        if (Platform.OS === "android") {
          ToastAndroid.show("create user success", ToastAndroid.SHORT);
        }
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>LOGIN</Text>

      <Controller
        control={control}
        // rules={{
        //   required: true,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="email"
      ></Controller>
      {errors.email && (
        <Text style={styles.inputError}>{errors.email.message}</Text>
      )}
      <Controller
        control={control}
        // rules={{
        //   required: true,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="password"
      ></Controller>
      {errors.password && (
        <Text style={styles.inputError}>{errors.password.message}</Text>
      )}
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>I want to have account</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Reset")}>
        <Text style={styles.link}>reset password</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  txtTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: "#007AFF",
    fontWeight: "bold",
  },
  link: {
    color: "#007AFF",
  },
  inputError: {
    color: "red",
  },
});

export default LoginScreen;
