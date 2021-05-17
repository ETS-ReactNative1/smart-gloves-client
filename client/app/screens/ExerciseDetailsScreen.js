import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Rating } from "react-native-rating-element";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ExerciseDetailsScreen({ route }) {
  const exercise = route.params;

  return (
    <View>
      <Image style={styles.image} source={exercise.image} />
      <View style={styles.detailsContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.general}>
            <AppText style={styles.title}>{exercise.title}</AppText>
            <Rating
              rated={exercise.rating}
              size={15}
              ratingColor={colors.base}
            />
          </View>
          <View style={styles.exerciseDetails}>
            <AppText style={styles.exerciseDetailsText}>
              Minutes:{exercise.minutes}
            </AppText>
            <AppText style={styles.exerciseDetailsText}>
              Sets:{exercise.sets}
            </AppText>
            <AppText style={styles.exerciseDetailsText}>
              Reps:{exercise.reps}
            </AppText>
          </View>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title="Vignesh Ravindran"
            subTitle="5/5 highly recommend it"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  exerciseDetails: {
    flex: 0.25,
    alignItems: "flex-end",
    paddingTop: "0.6%",
  },
  exerciseDetailsText: {
    fontSize: 10,
    color: colors.highlight,
    textAlign: "right",
  },
  general: {
    flex: 0.75,
  },
  image: {
    width: "100%",
    height: 300,
  },
  rating: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
    backgroundColor: colors.medium,
  },
});

export default ExerciseDetailsScreen;