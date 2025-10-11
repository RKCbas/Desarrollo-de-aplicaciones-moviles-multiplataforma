import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "./screens/Details";
import { HomeScreen } from "./screens/Home";



const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: { backgroundColor: 'tomato' }
    },
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Dashboard'
            }
        },
        Details: DetailsScreen
    }
})


export const Navigation = createStaticNavigation(RootStack);