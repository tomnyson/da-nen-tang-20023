import { StyleSheet, Text, View, Image } from "react-native";

const Profile = (props) => {
  console.log("props", props);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150",
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.text1}>
        <Text>Tên: {props.ten}</Text>
        <Text>Tuổi: {props.tuoi}</Text>
      </View>
      <View style={styles.text2}>
        <Text>Ngành Học: {props.nganh}</Text>
        <Text>Sở Thích: ?</Text>
        <Text>Điểm yếu: {props.diemYeu}</Text>
        <Text>Điểm Mạnh: {props.diemManh}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    height: 500,
  },
  image: {
    flex: 1,
    backgroundColor: "yellow",
  },
  text1: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flex: 2,
    backgroundColor: "green",
  },
  text2: {
    flex: 3,
    backgroundColor: "red",
  },
});

export default Profile;
