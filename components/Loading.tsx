import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#D81B60" style={styles.loader} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {

    },
    loader: {
        marginTop: 20,
      },
})