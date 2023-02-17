import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    ten: "",
    nganh: "",
    tuoi: 0,
    diemyeu: "",
    diemmanh: "",
  });
  const [isEdit, setIsEdit] = useState(true);

  console.log(profile);
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Profile</Text>
      <TouchableHighlight
        onPress={() => {
          console.log("call logout");
          auth
            .signOut()
            .then(async () => {
              // Sign-out successful.
              /**
               * xoá localstorage
               *
               */
              await AsyncStorage.removeItem("user");
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        <Text style={styles.buttonLogout}>Logout</Text>
      </TouchableHighlight>
      {isEdit && (
        <View>
          <TextInput
            onChangeText={(value) => {
              setProfile({ ...profile, ten: value });
            }}
            style={styles.txtInput}
            placeholder="nhập tên"
          />
          <TextInput
            onChangeText={(value) => {
              setProfile({ ...profile, nganh: value });
            }}
            style={styles.txtInput}
            placeholder="nhập ngành"
          />
          <TextInput
            onChangeText={(value) => {
              setProfile({ ...profile, tuoi: value });
            }}
            style={styles.txtInput}
            keyboardType="number"
            placeholder="nhập tuổi"
          />
          <TextInput
            onChangeText={(value) => {
              setProfile({ ...profile, diemyeu: value });
            }}
            style={styles.txtInput}
            placeholder="nhập điểm yếu"
          />
          <TextInput
            onChangeText={(value) => {
              setProfile({ ...profile, diemmanh: value });
            }}
            style={styles.txtInput}
            placeholder="nhập điểm mạnh"
          />
          <View style={styles.flexRow}>
            <TouchableHighlight>
              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>Change</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setIsEdit(false)}>
              {isEdit && (
                <View style={styles.button}>
                  <Text style={{ color: "#fff" }}>Preview</Text>
                </View>
              )}
            </TouchableHighlight>
          </View>
        </View>
      )}
      {!isEdit && (
        <View>
          <Text>Tên: {profile.ten}</Text>
          <Text>tuổi: {profile.tuoi}</Text>
          <Text>Tên: </Text>
          <Text>Tên: </Text>
          <Text>Tên: </Text>
          <Text>Tên: </Text>
          <TouchableHighlight onPress={() => setIsEdit(true)}>
            <View style={styles.button}>
              <Text style={styles.button} style={{ color: "#fff" }}>
                Edit
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    backgroundColor: "rgb(33, 150, 243)",
    marginLeft: 5,
    padding: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  txtTitle: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    marginBottom: 5,
  },
  buttonLogout: {
    color: "rgb(33, 150, 243)",
    fontSize: 20,
    marginVertical: 20,
  },
});
export default UserProfile;
