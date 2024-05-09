interface Restaurant {
  info: {
    id: string;
    cloudinaryImageId: string;
    name: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRatingString: string;
    totalRatingsString: string;
    sla: {
      slaString: string;
      lastMileTravelString: string;
    };
  };
}

const RestaurantMenu = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div>
          <h1>Name of restaurant</h1>
          <h2>Menu</h2>
          <ul>
            <li>biryani</li>
            <li>burgers</li>
            <li>chicken</li>
            <li>mutton</li>
            <li>hola</li>
          </ul>
    </div>
  );
};

export default RestaurantMenu;
