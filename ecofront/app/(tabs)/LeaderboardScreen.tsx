import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import UserStats from '../../components/UserStanding';

const Leaderboard: React.FC = () => {

  const topUsers = [
    { rank: 2, username: 'Emma', points: 1674, avatar: require('../../assets/images/random character.png') },
    { rank: 1, username: 'Darren', points: 2430, avatar: require('../../assets/images/random character.png') },
    { rank: 3, username: 'Jack', points: 1847, avatar: require('../../assets/images/random character.png') },
  ];

  const otherUsers = [
    { rank: 4, username: 'Bob', points: 1124, avatar: require('../../assets/images/random character.png') },
    { rank: 5, username: 'Jeff', points: 875, avatar: require('../../assets/images/random character.png') },
    { rank: 6, username: 'Alex', points: 770, avatar: require('../../assets/images/random character.png') },
    { rank: 7, username: 'Hana', points: 723, avatar: require('../../assets/images/random character.png') },
    { rank: 8, username: 'Sophia', points: 659, avatar: require('../../assets/images/random character.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {topUsers.map((user, index) => (
          <View key={user.rank} style={[styles.topUserContainer, index === 0 ? styles.firstPlace : index === 1 ? styles.secondPlace : styles.thirdPlace]}>
            <Image source={user.avatar} style={styles.topAvatar} />
            <Text style={styles.topUsername}>{user.username}</Text>
            <Text style={styles.topPoints}>{user.points} pts</Text>
          </View>
        ))}
      </View>

      <ScrollView style={styles.scrollContainer}>
        {otherUsers.map((user) => (
          <UserStats
            key={user.rank}
            rank={user.rank}
            username={user.username}
            points={user.points}
            avatar={require('../../assets/images/random character.png')} 
          />
        ))}
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FA',
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingTop: 80,
  },
  topUserContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    backgroundColor: '#ffffff', 
  },
  topAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 8,
    borderColor: '#FFD700', 
  },
  topUsername: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topPoints: {
    fontSize: 14,
  },
  scrollContainer: {
    flex: 1,
  },
  firstPlace: {
    height: 140, 
    backgroundColor: '#67ABDD',
  },
  secondPlace: {
    height: 160, 
    backgroundColor: '#88C9FA', 
  },
  thirdPlace: {
    height: 120,
    backgroundColor: '#BEE3FF', 
  },
});

export default Leaderboard;
