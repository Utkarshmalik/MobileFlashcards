import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Test extends Component {

    render() {
        console.log(this.props)
        return (
            <View >
                <Text > This is a test screen  </Text>
            </View>

        )
    }

}

export default Test;