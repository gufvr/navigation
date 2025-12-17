import { View } from 'react-native'

import { StackRoutesProps } from '@/routes/StackRoutes'
import { BottomRoutesProps } from '@/routes/BottomRoutes'
import { DrawerRoutesProps } from '@/routes/DrawerRoutes'

import { Title } from '@/components/Title'
import { Header } from '@/components/Header'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Home({ navigation }: DrawerRoutesProps<'Home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name='add-circle'
          onPress={() => navigation.navigate('Product', { id: '1' })}
        />

        <Title>Home</Title>

        <ButtonIcon name='menu' onPress={() => navigation.toggleDrawer()} />
      </Header>
    </View>
  )
}
