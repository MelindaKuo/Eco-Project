import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props type
interface RecentCollectionsProps {
    description: string;
    points: string;
}

const RecentCollections: React.FC<RecentCollectionsProps> = ({ description, points }) => {
    return (
        <View style={styles.recentCollection}>
            <View style={styles.recycleIcon} />
            <View style={styles.collectionInfo}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.points}>{points}</Text>
            </View>
        </View>
    );
};

const Holder: React.FC = () => {
    return (
        <View style={styles.holder}>
            <View style={styles.recentCollections}>
                <RecentCollections description="Picked up plastic bottles" points="10 points" />
                <RecentCollections description="Collected aluminum cans" points="8 points" />
                <RecentCollections description="Gathered glass bottles" points="12 points" />
            </View>
            <View style={styles.divider} />
        </View>
    );
};

const styles = StyleSheet.create({
    holder: {
        width: 300, // Adjust as needed
        height: 200, // Adjust as needed
        borderRadius: 15,
        elevation: 5, // Shadow effect for Android
        shadowColor: '#000', // Shadow effect for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 16,
        backgroundColor: 'white',
    },
    recentCollections: {
        flexDirection: 'column',
    },
    recentCollection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    recycleIcon: {
        width: 40, // Adjust size as needed
        height: 40, // Adjust size as needed
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        marginRight: 8,
        // You can add an image background here if desired
    },
    collectionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
    },
    description: {
        flexGrow: 1,
    },
    points: {
        marginLeft: 8,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginTop: 16,
    },
});

export default Holder;
