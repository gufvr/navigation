import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'

export type BottomRoutesList = {
  Home: undefined
  Product: undefined | { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> =
  BottomTabScreenProps<BottomRoutesList, T>

const Tab = createBottomTabNavigator<BottomRoutesList>()

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2C46B1',
        tabBarInactiveTintColor: '#444444',
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Product'
        component={Product}
        options={{
          tabBarLabel: 'Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='add-circle' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
