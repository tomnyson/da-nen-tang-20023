import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
/**
 * tên
 * tuổi
 * ngành học
 * sở thích
 * điểm mạnh
 * điểm yếu
 * -> đổi màu cho text
 *  đổi kích thước chữ
 *  border cong 10px
 * border width 3px
 * background: bue
 * dùng style compose xây dựng style riêng cho từng thành phần
 * định nghĩa style màu sẵc [xanh, đỏ, tim]
 * định nghĩa style size chữ [16, 24]
 * định nghĩa style kiểu chữ [ lowercase, uppercase]
 * kết hợp cả 3 lại với nhau
 */

const PreviewProfile = (props) => {
  return (
    <View>
      <Text>Xem chi tiet</Text>
      <TouchableHighlight
        onPress={() => {
          props.setEdit(!props.edit);
        }}
      >
        <View>
          <Text>edit profile</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default function App() {
  const [diemManh, setDiemManh] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <View style={{ marginTop: 20 }}>
      {/* <TextInput
        onChangeText={(value) => {
          setDiemManh(value);
        }}
        style={styles.input}
        placeholder="nhập điểm mạnh"
      />

      <PreviewProfile setEdit={setEdit} edit={edit} />
      {!edit && <Profile ten="ABC" nganh="CNTT" diemManh={diemManh} />} */}
      <UserProfile />
    </View>
  );
}

const styleGlobal = StyleSheet.create({
  colors: {
    red: {
      color: "red",
    },
    green: {
      color: "green",
    },
  },
  sizes: {
    small: {
      fontSize: 10,
    },
    medium: {
      fontSize: 16,
    },
    lager: {
      fontSize: 20,
    },
  },
  position: {
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
    center: {
      textAlign: "center",
    },
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: "green",
    padding: 5,
    margin: 5,
  },
  txtRed: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const txtNganh = StyleSheet.compose(
  styleGlobal.colors.green,
  styleGlobal.position.right
);
