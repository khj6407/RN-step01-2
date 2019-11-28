import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { BTN_COLOR } from "./colors/colors";
import { koreaFood, italyFood } from "./model/foods";

//Dimensions안에서 width, height 추출해야한다t
const { width, height } = Dimensions.get("window");

//class를 사용하는 이유= 여러가지 함수를 사용하기 위해
export default class App extends React.Component {
  //state 안에 있는 데이터가 변경이 되면, 변경을 감지하여 화면을 리로드 한다.
  state = {
    korea: false,
    italy: false,
    mexico: false
  };
  //return은 하나의 Component만 리턴할 수 있다.
  //두개를 하나로 묶어주는 기능 : Fragment
  render() {
    //state안에 있는 korea를 얻어온다
    const { korea, italy, mexico } = this.state;

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch} onPress={this._btnHandleKorea}>
            <Text style={styles.btnTxt}>KOREA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={this._btnHandleItaly}>
            <Text style={styles.btnTxt}>ITALY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={this._btnHandleMexico}
          >
            <Text style={styles.btnTxt}>MEXICO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          {korea
            ? koreaFood.map(food => (
                <Text key={food.id}>
                  {food.name} | {food.des} | {food.price}
                </Text>
              ))
            : null}
          {italy
            ? italyFood.map(food => (
                <Text key={food.id}>
                  {food.name} | {food.des} | {food.price}
                </Text>
              ))
            : null}
        </View>
      </>
    );
  }

  _btnHandleKorea = () => {
    this.setState({
      korea: true,
      italy: false
    });
  };

  _btnHandleItaly = () => {
    this.setState({
      italy: true,
      korea: false
    });
  };

  _btnHandleMexico = () => {
    alert("Have not Food List.. Go Away!");
    this.setState({
      korea: false,
      italy: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: "bold"
  },

  touch: {
    backgroundColor: BTN_COLOR,
    width: width / 2,
    padding: 10,
    marginBottom: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});
