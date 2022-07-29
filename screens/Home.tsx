import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { RootStackParamList } from "../helper";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function Home({ route, navigation }: Props) {
  const [isLoading, setLoading] = useState(true);
  const [sample, setSample] = useState("");

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.nextshop.com/v1/hello");
      const json = await response.json();
      setSample(json.message);
      setLoading(false);
      //  setData(json.movies);
    } catch (error) {
      //   console.error(error);
    } finally {
      //   setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      <Text>Welcome</Text>

      {isLoading ? (
        <Text testID="loading-id">Wait</Text>
      ) : (
        <Text>{sample}</Text>
      )}

      <Button title="Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
}
