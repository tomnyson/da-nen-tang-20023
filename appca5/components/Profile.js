import { StyleSheet, Text, View, Image } from "react-native";

const Profile = (props) => {
  console.log("props", props);
  props.ten = "LE HONG SON";
  let newTen = props.ten;
  if (newTen === "ABC1") {
    newTen = "VIP PRO";
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://via.placeholder.com/150",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Tên: {newTen}</Text>
      <Text>Tuổi: </Text>
      <Text>Ngành Học: {props.nganh}</Text>
      <Text>Sở Thích: ?</Text>
      <Text>Điểm yếu:</Text>
      <Text>Điểm Mạnh: {props.diemManh}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Profile;
