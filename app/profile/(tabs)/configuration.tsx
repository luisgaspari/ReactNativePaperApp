import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Configuration() {
  return (
    <View style={styles.container}>
      <Text>Tab Configuration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});