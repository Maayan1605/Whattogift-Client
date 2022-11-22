import React, {useState} from "react";
import { View, Text } from 'react-native';
import Style from '../../utilis/AppStyle';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextInput
                label="Email"
                keyBoardType="Email"
                autoCapitalize="none"
                right={<TextInput.Icon icon="email"/>}
            />
            <TextInput
                label="Password"
                keyBoardType="default"
                autoCapitalize="none"
                secureTextEntry
                right={<TextInput.Icon icon="eye"/>}
            />

            <Button icon="send" mode="contained" onPress={() => {console.log('Hello')}}/>
        </View>
    );
}

export default Login;