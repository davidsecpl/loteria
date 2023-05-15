import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const RadioButton = ({ data, onSelect }) => {
    const [userOption, setUserOption] = useState(null);
    return (
    <View>
        {
            data.map( (item)=>{ return (
                        <Pressable onPress={onSelect}>
                            <Text>{item.value}</Text>
                        </Pressable>
                    );
                }
            )
        }
    </View>
  );
}

export default RadioButton;