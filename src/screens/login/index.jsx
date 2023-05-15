import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from './styles';
import { Header, Menu } from "../../components";
import { logo, theme } from "../../constants";

const Login = ({ winRender }) => {
    const [checked, setChecked] = useState(null);

    const onInciarSession = ()=> {
        winRender('game');
    };

    return (
        <View style={styles.container}>
            <Header title='Loteria ¡DINERO YA!' subtitle='Gana hasta $ 1 millón' message='Sorteos en linea' 
            widthLogo={114} heightLogo={130} urlLogo={logo.game.url}/>
            
            <TextInput placeholder="Número de documento" keyboardType="numeric" />
            <TextInput placeholder="Contraseña" secureTextEntry={true} />
            
            <Pressable onPress={()=>{}}>
                <Text>Olvidé mi Contraseña</Text>
            </Pressable>
            <Menu lista={[{title: 'Ingresar', handler: onInciarSession, disabled: false}]} color={theme.colors.buttonLogin}/>
            <View>
                <Text>¿Eres nuevo?</Text>
                <Pressable onPress={()=>{}}>
                    <Text>Registrate aquí</Text>
                </Pressable>
            </View>
            
        </View>
    );
};

export default Login;