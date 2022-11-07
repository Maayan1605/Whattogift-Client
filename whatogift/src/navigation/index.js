// import react native navigation libraries:
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//import icons:
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//import screens:
import Dashboard from "../screens/dashboard";
import Gifts from "../screens/gifts";
import Favorites from "../screens/favorites";
import Profile from "../screens/profile";

//create tabs:
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return (
        <AppTab.Navigator>
            <AppTab.Screen name='dashboardTab' component={Dashboard} 
                options={{ 
                    tabBarLabel: 'Dashboard', 
                    tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={22}/>) 
                }}/>
            <AppTab.Screen name='gifts' component={Gifts} 
                options={{ 
                    tabBarLabel: 'Gifts', 
                    tabBarIcon: () => (<MaterialCommunityIcons name='gift' size={22}/>) 
                }}/>
            <AppTab.Screen name='favorites' component={Favorites} 
                options={{ 
                    tabBarLabel: 'Favorites', 
                    tabBarIcon: () => (<MaterialCommunityIcons name='heart' size={22}/>) 
                }}/>
            <AppTab.Screen name='profile' component={Profile} 
                options={{ 
                    tabBarLabel: 'Profile', 
                    tabBarIcon: () => (<MaterialCommunityIcons name='baby-face' size={22}/>) 
                }}/>
        </AppTab.Navigator>
    );
}