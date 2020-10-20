import React, { Fragment, useState } from 'react';
import {
    Image,
    TextInput,
    Button,
    View
} from 'react-native';
import efetuarLogin from '../../api/login';
import "./estilo"
import estilo from './estilo';

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const tentarLogar = () => {
        efetuarLogin(usuario, senha)
    }
    return (
        <Fragment>
            <View style={estilo.conteiner}>
                <Image
                    style={estilo.logo}
                    source={require("../../../res/img/Logo-CERTA.png")} />
                <View style={estilo.user}>
                    <Image
                        style={estilo.icon}
                        source={require("../../../res/img/user-profile.png")}
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder="Usuário"
                        underlineColorAndroid="transparent"
                        onChangeText={texto => setUsuario(texto)} />
                </View>
                <View style={estilo.user}>
                    <Image
                        style={estilo.icon}
                        source={require("../../../res/img/lock.png")}
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder="Senha"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        onChangeText={texto => setSenha(texto)}
                    />
                </View>

            </View>
            <View style={estilo.botaoView}>
                <Button title="Entrar" onPress={tentarLogar} />
            </View>
        </Fragment>
    );
};


export default Login;