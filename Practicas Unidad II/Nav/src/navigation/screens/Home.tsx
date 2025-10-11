import {  View, Text, Button } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';

export function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Details')} title='Go to details'/>
        </View>
    )
}