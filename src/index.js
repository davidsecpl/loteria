import React, {useState} from "react";
import { View } from "react-native";
import { styles } from './styles';
import { Game, Login, Sorteo } from './screens/index';

export default function App() { 
  const [windowsRender, setWindowsRender] = useState('login');
  const [listaNum, setListaNum] = useState('');
  
  const Screen = () => {
    if(windowsRender === 'login'){
      return <Login winRender={setWindowsRender}/>
    }

    if(windowsRender === 'game'){
      return <Game winRender={setWindowsRender} numsSet={setListaNum}/> 
    }

    if(windowsRender === 'sorteo'){
      return <Sorteo winRender={setWindowsRender} nums={listaNum}/> 
    }
    
  };

  return (
    <View style={styles.container}>
      <Screen/>
    </View >
  );
}