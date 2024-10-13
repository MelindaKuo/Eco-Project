import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationBar from '../../components/NavigationBar';

interface Friend {
    id: string;
    name: string;
    avatar: any; 
    activity: string; 
    online: boolean; 
}

const friendsData: Friend[] = [
    { id: '1', name: 'John Doe', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 5 mins ago', online: true },
    { id: '2', name: 'Jane Smith', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 10 mins ago', online: false },
    { id: '3', name: 'Alice Johnson', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 20 mins ago', online: true },
    { id: '4', name: 'Michael Brown', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 15 mins ago', online: true },
    { id: '5', name: 'Emily Davis', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 30 mins ago', online: false },
    { id: '6', name: 'David Wilson', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 25 mins ago', online: true },
    { id: '7', name: 'Sarah White', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 2 hours ago', online: false },
    { id: '8', name: 'Chris Green', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 1 hour ago', online: true },
    { id: '9', name: 'Jessica Adams', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 45 mins ago', online: false },
    { id: '10', name: 'Daniel Lewis', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 50 mins ago', online: true },
    { id: '11', name: 'Laura Hall', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 1 hour ago', online: true },
    { id: '12', name: 'Matthew King', avatar: require('../../assets/images/random character.png'), activity: 'Recycled 3 hours ago', online: false },
];

const FriendsScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const renderFriendItem = ({ item }: { item: Friend }) => (
        <TouchableOpacity style={styles.friendItem}>
            <View style={styles.avatarContainer}>
                <Image source={item.avatar} style={styles.friendAvatar} />
                <TouchableOpacity
                    style={[styles.statusIndicator, { backgroundColor: item.online ? '#88E1B5' : '#FFB3B3' }]}
                />
            </View>
            <View style={styles.friendInfo}>
                <Text style={styles.friendName}>{item.name}</Text>
                <View style={styles.activityContainer}>
                    <Image source={require('../../assets/images/recycle.png')} style={styles.activityIcon} />
                    <Text style={styles.activityText}>{item.activity}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#67ABDD" />
        </TouchableOpacity>
    );

    const filteredFriends = friendsData.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Melinda's Friends</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Friends..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={filteredFriends}
                renderItem={renderFriendItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
            <NavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    list: {
        padding: 20,
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 30,
        padding: 15,
        marginVertical: 5,
        elevation: 2,
    },
    avatarContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    friendAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    statusIndicator: {
        position: 'absolute',
        bottom: -5,
        right: 5,
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    friendInfo: {
        flex: 1,
    },
    friendName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    activityText: {
        fontSize: 14,
        color: '#666',
    },
});

export default FriendsScreen;
