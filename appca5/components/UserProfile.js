import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PreviewProfile = (props) => {
  console.log("props", props);
  return (
    <View>
      <Text>Tên: {props.profile.ten}</Text>
      <Text>Ngành: {props.profile.nganh}</Text>
      <Text>Tuổi: {props.profile.tuoi}</Text>
      <Text>Điểm yếu: {props.profile.diemyeu}</Text>
      <Text>Điểm mạnh: {props.profile.diemyeu}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setIsEdit(true)}
      >
        <Text style={{ color: "#fff" }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const UserProfile = () => {
  const [profile, setProfile] = useState({
    ten: "",
    nganh: "",
    tuoi: 0,
    diemyeu: "",
    diemmanh: "",
  });
  const [isEdit, setIsEdit] = useState(true);
  const [erros, setErros] = useState({});

  const handleSubmit = () => {
    if (profile.ten === "") {
      setErros({ ...erros, ten: "tên kho được để trống!" });
    }
    setIsEdit(false);
  };
  console.log("profile", profile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {isEdit && (
        <View>
          <TextInput
            onChangeText={(text) => {
              setProfile({ ...profile, ten: text });
            }}
            style={styles.textInput}
            placeholder="nhập tên"
            defaultValue={profile.ten}
          />
          {erros.ten && <Text style={{ color: "red" }}>{erros.ten}</Text>}
          <TextInput
            onChangeText={(text) => {
              setProfile({ ...profile, nganh: text });
            }}
            defaultValue={profile.nganh}
            style={styles.textInput}
            placeholder="nhập ngành"
          />
          <TextInput
            onChangeText={(text) => {
              setProfile({ ...profile, tuoi: text });
            }}
            defaultValue={profile.tuoi}
            style={styles.textInput}
            placeholder="nhập tuổi"
          />
          <TextInput
            onChangeText={(text) => {
              setProfile({ ...profile, diemyeu: text });
            }}
            defaultValue={profile.diemyeu}
            style={styles.textInput}
            placeholder="nhập điểm yếu"
          />
          <TextInput
            onChangeText={(text) => {
              setProfile({ ...profile, diemmanh: text });
            }}
            defaultValue={profile.diemmanh}
            style={styles.textInput}
            placeholder="nhập điểm mạnh"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "#fff" }}>Change</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isEdit && <PreviewProfile setIsEdit={setIsEdit} profile={profile} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
export default UserProfile;
