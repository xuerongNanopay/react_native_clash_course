// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot/>
      <Text>Footer</Text>
    </>
  )
}

export default RootLayout