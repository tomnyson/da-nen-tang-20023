import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import icon from "./assets/MainMenuBG.png";
import Profile from "./components/Profile";
import { styles } from "./styles";
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
export default function App() {
  const [diemManh, setDiemManh] = useState("");
  const [diemYeu, setDiemYeu] = useState("");
  const handleChangeTextDiemManh = (event) => {
    setDiemManh(event);
  };
  const handleChangeTextDiemYeu = (event) => {
    setDiemYeu(event);
  };
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      {/* <Profile
        ten="Le Hong Son"
        tuoi={30}
        nganh="CNTT"
        diemManh={diemManh}
        diemYeu={diemYeu}
      /> */}
      {/* <TextInput
        name="diemManh"
        placeholder="nhập điểm mạnh"
        onChangeText={handleChangeTextDiemManh}
      />
      <TextInput
        name="diemYeu"
        onChangeText={handleChangeTextDiemYeu}
        placeholder="nhập điểm yếu"
      /> */}
      <UserProfile />
    </SafeAreaView>
  );
}
