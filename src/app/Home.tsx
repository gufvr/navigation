import { View } from 'react-native'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Home({ navigation }: StackRoutesProps<'Home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name='add-circle'
          onPress={() => navigation.navigate('Product', { id: '1' })}
        />
      </Header>
    </View>
  )
}
