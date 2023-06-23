import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodOptionType } from '../types';
import { Pressable } from 'react-native';
const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              selectedMood?.emoji === option?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text key={option.emoji}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {option.emoji === selectedMood?.emoji
              ? selectedMood.description
              : undefined}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedMoodItem: {
    borderColor: '#fff',
    backgroundColor: '#454C73',
    borderWidth: 2,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 1,
    textAlign: 'center',
  },
});
