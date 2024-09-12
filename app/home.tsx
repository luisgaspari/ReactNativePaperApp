import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../context/auth";

interface IPost {
    id: number
    title: string
    status: string
}

export default function Home() {
    const auth = useAuth()
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text variant="displaySmall">Posts</Text>
            <Text variant="headlineSmall">Olá {auth.user.email}</Text>
            {posts.map(post => (
                <View key={post.id} style={styles.mt20}>
                    <Text variant="titleMedium">{post.id}</Text>
                    <Text variant="bodyMedium">{post.title}</Text>
                    <Text variant="labelLarge">{post.status}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
    },
})