import {  View, Text, Button } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';

export function DetailsScreen() {

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.goBack()} title='Go back'/>
            <Button onPress={() => navigation.popToTop()} title='Go to first screen in stack'/>
        </View>
    )
}