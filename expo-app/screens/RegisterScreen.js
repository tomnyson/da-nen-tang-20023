import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ToastAndroid,
} from "react-native";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../firebaseConfig";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

function RegisterScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "tabletkindfire@gmail.com",
      password: "123456",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Login");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Register</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              onChangeText={onChange}
              placeholder="email"
            />
          )}
          name="email"
        ></Controller>
        {errors.email && (
          <Text style={styles.txtError}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder="password"
              onChangeText={onChange}
              secureTextEntry
            />
          )}
          name="password"
        ></Controller>
        {errors.password && (
          <Text style={styles.txtError}>{errors.password.message}</Text>
        )}
      </View>
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>I have account</Text>
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
    width: 250,
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
  txtError: {
    color: "red",
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  },
});

export default RegisterScreen;
