import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

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
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Product' component={Product} />
    </Tab.Navigator>
  )
}
