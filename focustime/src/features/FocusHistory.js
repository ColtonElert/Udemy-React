import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/Colors';
import { fontSizes, spacing } from '../utils/Sizes';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.noFocusTitle}>What do you want to Focus on?</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

  return (
    <View styles={styles.container}>
        <Text style={styles.title}>Focus History:</Text>
        <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize: fontSizes.lg,
    color: colors.white,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
    paddingBottom: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.xl,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  noFocusTitle: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: 'center',
    paddingTop: spacing.xxl,
  },
});
