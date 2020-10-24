import React, { Fragment, useState } from 'react';
import {
    Image,
    TextInput,
    Button,
    View,
    Text
} from 'react-native';
import efetuarLogin from '../../api/login';
import "./estilo"
import estilo from './estilo';
import AsyncStorage from "@react-native-community/async-storage"

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");


    const tentarLogar = async () => {
        try {
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("KEY-token", token);
            const t = await AsyncStorage.getItem("KEY-token");

        } catch (erro) {
            setMensagemErro(erro)
        }

    }
    return (
        <Fragment>
            <View style={estilo.versionContent}>
                <Text style={estilo.version}>V1.0</Text>
            </View>
            <View style={estilo.conteiner}>

                <Image
                    style={estilo.logo}
                    source={require("../../../res/img/Logo-CERTA.png")} />
                <View style={estilo.loginInputStyle}>
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
                <View style={estilo.loginInputStyle}>
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
                <Text>{mensagemErro}</Text>
            </View>
            <View style={estilo.botaoView}>
                <Button title="Entrar" onPress={tentarLogar} />
            </View>
        </Fragment>
    );
};


export default Login;