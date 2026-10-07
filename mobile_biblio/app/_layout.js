import { Stack } from 'expo-router'

export default function Layout() {
    return(
        <Stack>
            {

                <Stack.Screen
                    name='index'
                    options={{
                        title: 'Início',
                        headerStyle: {backgroundColor: '#ffffff'},
                        headerTintColor: '#000000'
                    }}
                    
                />

            }
        </Stack>
    )
}