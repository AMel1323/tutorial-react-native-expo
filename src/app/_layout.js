import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
    return (
        <Tabs screenOptions={
        {
            tabBarActiveTintColor: '#f7a73fff',
            tabBarInactiveTintColor: 'rgb(89, 196, 229)',
        }
        }>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                   // tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabelStyle: {fontSize: 8},
                    tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
                    
                }}/>

            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                   // tabBarShowLabel: false,
                   tabBarLabelStyle: {fontSize: 8},
                tabBarIcon: ({color}) => <FontAwesome5 name="house-user" size={24} color={color} />
                }}/>

            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                   // tabBarShowLabel: false,
                   tabBarLabelStyle: {fontSize: 8},
                    tabBarIcon: ({color}) =><MaterialCommunityIcons name="contacts" size={24} color={color} />

                }}/>

                <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}