import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FDetailsScreen } from "./screens/FDetails";
import { FHomeScreen } from "./screens/FHome";


const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: { backgroundColor: 'tomato' }
    },
    screens: {
        Home: {
            screen: FHomeScreen,
            options: {
                title: 'Dashboard'
            }
        },
        Details: FDetailsScreen
    }
})


export const Navigation2 = createStaticNavigation(RootStack);