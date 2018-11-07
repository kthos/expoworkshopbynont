import React from 'react'
import { View, Button, Text } from 'react-native'

class Age extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 1,
            name: '',
            lanme: ''
        }
    }

    plusAge() {
        this.setState({
            age:this.state.age+1
        });
    }

    delAge() {
        this.setState({
            age:this.state.age-1
        });
    }


    render() {
        const { age } = this.state; // destruction
        return (
            <View style={{ paddingTop: 15 }}>
                <Text>อายุ : {age} ปี</Text>
                <Button title='เพิ่ม' onPress={()=>this.plusAge()} />
                <Button title='ลด' onPress={()=>this.delAge()} />
            </View>
        );
    }

}
export default Age;