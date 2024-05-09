const filterTopRatedRestaurants = () => {
  const filteredRestaurants = initialListOfRestaurants.filter(
    (res: any) => res?.info?.avgRating > 4
  );
  setListOfRestaurants(filteredRestaurants);
  toast.success('Top rated restaurants filtered.');
};

const searchRestaurants = (query: string) => {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredRestaurants = initialListOfRestaurants.filter(
    (restaurant: any) => {
      return (
        restaurant.info.name.toLowerCase().includes(normalizedQuery) ||
        restaurant.info.locality.toLowerCase().includes(normalizedQuery) ||
        restaurant.info.areaName.toLowerCase().includes(normalizedQuery) ||
        restaurant.info.cuisines.some((cuisine: string) =>
          cuisine.toLowerCase().includes(normalizedQuery)
        )
      );
    }
  );
  setListOfRestaurants(filteredRestaurants);
};

const handleSearchInputChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const query = event.target.value;
  if (query === '') {
    // If search query is empty, display initial list of restaurants
    setListOfRestaurants(initialListOfRestaurants);
  } else {
    searchRestaurants(query);
  }
};

const clearFilter = () => {
  setListOfRestaurants(initialListOfRestaurants);
  toast.success('Filter cleared.');
};
