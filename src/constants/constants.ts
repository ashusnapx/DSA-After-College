export const navLinks = [
  {
    linkName: 'Home',
    linkRoute: '/',
  },
  {
    linkName: 'Cart',
    linkRoute: '/cart',
  },
  {
    linkName: 'Offers',
    linkRoute: '/offers',
  },
  {
    linkName: 'Contact Us',
    linkRoute: '/contact',
  },
];

export const CDN_URL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

export const CDN_URL_UPDATED = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

export const RESTAURANT_LIST_API =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559';

export const RESTAURANT_MENU_API =
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=';
