import React from 'react';//asset
import { View, Text } from 'react-native'; //asset

class Home extends React.Component {
    render() {
        const { fullname, age } = this.props;
        return (
            <View>
                <Text>Home</Text>
                <Text>ชื่อ : {fullname}</Text>
                <Text>อายุ : {age}</Text>
            </View>

        )
    }
}
export default Home;