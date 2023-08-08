import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../../constants";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
    page: 1,
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item?.job_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}
        {error && <Text>Something went wrong</Text>}
        {!isLoading &&
          !error &&
          data?.map((job) => (
            <NearbyJobCard
              item={job}
              key={`nearby-job-${job?.job_id}`}
              handleCardPress={handleCardPress}
            />
          ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
