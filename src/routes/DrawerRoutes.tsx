import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'

export type DrawerRoutesList = {
  Home: undefined
  Product: undefined | { id: string }
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2C46B1',
        drawerInactiveTintColor: '#444444',
      }}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Product'
        component={Product}
        options={{
          drawerLabel: 'Produto',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='add-circle' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
