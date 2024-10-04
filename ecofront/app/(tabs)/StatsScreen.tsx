import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import CircularProgress from '../../components/CircleProgressBar';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import FrequencyChart from '@/components/FrequencyChart';

const StatsScreen = () => {
    return (
        <View style={styles.container}>
            <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>
                <View style={styles.backgroundContainer}>
                    <View style={styles.profileContainer}>
                        <View style={styles.progressBar}>
                            <CircularProgress 
                                size={300}
                                progress={75}
                                strokeWidth={20}
                                strokeColor="#3498db" 
                            />
                            <Image
                                source={require('../../assets/images/random character.png')} 
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <View style={styles.levelContainer}>
                        <Text style={styles.levelText}>Level 2</Text>
                        <Text style={styles.levelText}>"The Challenger"</Text>
                        <Text style={styles.pointsText}>Points: 60 / 100</Text>
                    </View>

                    <View style={styles.statsContainer}>
                        {['Rank', 'Trash', 'Animals', 'Days'].map((label, index) => (
                            <TouchableOpacity key={index} style={styles.statCircle}>
                                <Text style={styles.statValue}>{Math.floor(Math.random() * 100)}</Text>
                                <Text style={styles.statLabel}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.achievementsContainer}>
                    <Text style={styles.badgesTitle}>Achievements</Text>
                    <View style={styles.badgesContainer}>
                        {['🐾', '🏆', '🌱', '🌊'].map((icon, index) => (
                            <TouchableOpacity key={index} style={styles.badge}>
                                <Text style={styles.badgeText}>{icon}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.trashSortedContainer}>
                        {[45, 25, 28].map((count, index) => (
                            <View key={index} style={styles.trashStatCircle}>
                                <Image source={require('../../assets/images/recycle.png')} style={styles.trashImage} />
                                <View style={styles.badgeCountCircle}>
                                    <Text style={styles.badgeCount}>{count}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.animalsSavedContainer}>
                        {[4, 3, '🐢'].map((count, index) => (
                            <View key={index} style={styles.animalStatCircle}>
                                {typeof count === 'number' ? (
                                    <Image source={require('../../assets/images/dolphin.png')} style={styles.trashImage} />
                                ) : (
                                    <Text style={styles.statValue}>{count}</Text>
                                )}
                                <View style={styles.badgeCountCircle}>
                                    <Text style={styles.badgeCount}>{count}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

    

                    <View style={styles.chartContainer}>
                    <Text>Trash Collected This Week</Text>
                        <FrequencyChart />
                    </View>
                </View>
            </ParallaxScrollView>
            <NavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    backgroundContainer: {
        backgroundColor: '#67ABDD',
        padding: 50,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
        bottom: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    progressBar: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    avatar: {
        width: 200,
        height: 250,
        position: 'absolute',
        bottom: 20,
    },
    levelContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    levelText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    pointsText: {
        fontSize: 18,
        color: '#ffffff',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    statCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#67ABDD',
    },
    statLabel: {
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
    },
    achievementsContainer: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
        top: -50,
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    badge: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        borderWidth: 3,
        borderColor: '#FFD700',
        padding: 3,
    },
    badgeText: {
        fontSize: 24,
        color: '#67ABDD',
    },
    badgeCountCircle: {
        position: 'absolute',
        bottom: -15,
        left: '50%',
        transform: [{ translateX: -50 }],
        backgroundColor: '#3498db',
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    badgeCount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    badgesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    trashSortedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    trashStatCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#67ABDD',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: 10,
    },
    trashImage: {
        width: 30,
        height: 30,
    },
    animalsSavedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    animalStatCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#67ABDD',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: 10,
    },
    chartContainer: {
        alignItems: 'center', 
        marginTop: 50, 

    },
});

export default StatsScreen;
