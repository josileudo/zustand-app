import { useEffect } from "react";
import { useProductsStore } from "../../store/useProductsStore";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

export const Home = () => {
  const { products, isLoading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.image }} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};
