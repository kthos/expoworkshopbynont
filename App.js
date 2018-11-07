import React from 'react';//asset
import { StyleSheet, Text, View, Button } from 'react-native'; //asset
import Home from './Home'
import Age from './Age'



//class
export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      fullname: 'Nontawat'
    };
  }

  render() {
    const { fullname, age } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text>Nontawat</Text> */}
        {/* <View style={styles.ViewStyles}></View>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View> */}
        {/* <Button
          title="Click"
          onPress={() => {
            alert('Hello');
          }}
        />
        <Text></Text>
        <Home
          fullname='นนทวัฒน์'
          age={31}
        />

        <Text>{this.state.age}</Text>
        <Text>{this.state.fullname}</Text>

        <Button title='เพิ่มอายุ' onPress={this.incrementAge} />
        <Button title='ลดอายุ' onPress={this.decrementAge} /> */}
        <Age />

      </View>
    );
  }
}


incrementAge=()=>{
  alert('ค่า + ');
}

decrementAge=()=>{
  alert('ค่า - ');
}


//style sheet in react native
const styles = StyleSheet.create({//CSS in JSON type
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse' // จัดแนว
  },
  ViewStyles: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  box1: {
    flex: 1, //การแบ่งพื้นที
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  box2: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'yellow'
  },
  box3: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }

});
