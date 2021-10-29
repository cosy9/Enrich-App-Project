import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyBooking from "../AllScreens/MyBooking";
import MyWallet from "../AllScreens/MyWallet";
import Offers from "../AllScreens/Offers";
import Profile from "../AllScreens/Profile";
import MainHomeScreen from "../MainHomeScreen";
import AnIcon from "react-native-vector-icons/AntDesign";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome";
import IoIcon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";
import BookServicesPage from "../BookServicesPage/BookServicesPage";
import BuyProductsPage from "../BuyProductsPage/BuyProductsPage";

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
  
    <Tab.Navigator
      initialRouteName="MainHomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
        },
      }}
    >
      <Tab.Screen
        options={{
          name: "Home",
          header: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.ViewStyle}>
                <AnIcon
                  style={[styles.icon, { color: focused ? "red" : "#000" }]}
                  name="heart"
                />
                <Text
                  style={[
                    styles.TextStyle,
                    { color: focused ? "red" : "#000" },
                  ]}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
        name="Home"
        component={MainHomeScreen}
      />
      <Tab.Screen
        options={{
          name: "Offers",
          header: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.ViewStyle}>
                <MaIcon
                  style={[styles.icon, { color: focused ? "red" : "#000" }]}
                  name="brightness-percent"
                />
                <Text
                  style={[
                    styles.TextStyle,
                    { color: focused ? "red" : "#000" },
                  ]}
                >
                  Offers
                </Text>
              </View>
            );
          },
        }}
        name="Offers"
        component={Offers}
      />
      <Tab.Screen
        options={{
          name: "MyBooking",
          header: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.ViewStyle}>
                <FaIcon
                  style={[styles.icon, { color: focused ? "red" : "#000" }]}
                  name="calendar-check-o"
                />
                <Text
                  style={[
                    styles.TextStyle,
                    { color: focused ? "red" : "#000" },
                  ]}
                >
                  MyBooking
                </Text>
              </View>
            );
          },
        }}
        name="MyBooking"
        component={MyBooking}
      />
      <Tab.Screen
        options={{
          name: "MyWallet",
          header: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.ViewStyle}>
                <IoIcon
                  style={[styles.icon, { color: focused ? "red" : "#000" }]}
                  name="wallet-outline"
                />
                <Text
                  style={[
                    styles.TextStyle,
                    { color: focused ? "red" : "#000" },
                  ]}
                >
                  MyWallet
                </Text>
              </View>
            );
          },
        }}
        name="MyWallet"
        component={MyWallet}
      />
      <Tab.Screen
        options={{
          name: "Profile",
          header: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.ViewStyle}>
                <IoIcon
                  style={[styles.icon, { color: focused ? "red" : "#000" }]}
                  name="person-circle-outline"
                />
                <Text
                  style={[
                    styles.TextStyle,
                    { color: focused ? "red" : "#000" },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          name: "Booking Services Page",
          header: () => null,
          tabBarButton: () => (
            <View style={{width:0, height:0}}></View>
        ),
        tabBarVisible:false,
        tabBarStyle: { display: 'none' },
        }}
        name="BookServicesPage"
        component={BookServicesPage}
      />
      <Tab.Screen
        options={{
          name: "Buy Products Page",
          header: () => null,
          tabBarButton: () => (
            <View style={{width:0, height:0}}></View>
        ),
        tabBarVisible:false,
        tabBarStyle: { display: 'none' },
        }}
        name="BuyProductsPage"
        component={BuyProductsPage}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    color: "#000",
  },
  icon: {
    fontSize: 28,
    color: "#000",
  },
});
