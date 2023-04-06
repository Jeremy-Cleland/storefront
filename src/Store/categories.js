// const initialState = {
//   categories: [
//     {
//       name: "Desktops",
//       displayName: "Desktops",
//       description:
//         "Our Computer selection includes everything from powerful gaming desktops to lightweight, portable laptops and tablets. We stock machines from brands such as Dell, HP, Lenovo, ASUS, Apple, and more. You'll find devices with high-resolution displays, fast processors, and plenty of storage space. Whether you need a device for work, school, or play, we've got you covered.",
//     },
//     {
//       name: "MacBooks",
//       displayName: "MacBooks",
//       description:
//         "Our MacBook range includes the latest Apple MacBook models, including the MacBook Air and MacBook Pro. With fast processors, Retina displays, and long battery life, our MacBooks are perfect for professionals, students, and anyone who needs a reliable and powerful laptop.",
//     },
//     {
//       name: "Tablets",
//       displayName: "Tablets",
//       description:
//         "ur Computers & Tablets selection includes everything from powerful gaming desktops to lightweight, portable laptops and tablets. We stock machines from brands such as Dell, HP, Lenovo, ASUS, Apple, and more. You'll find devices with high-resolution displays, fast processors, and plenty of storage space. Whether you need a device for work, school, or play, we've got you covered.",
//     },
//     {
//       name: "Headphones",
//       displayName: "Headphones",
//       description:
//         "Our Headphones range features headphones for every occasion, including over-ear, on-ear, and in-ear headphones. We offer wireless headphones with Bluetooth connectivity and true wireless earbuds that provide a cord-free listening experience. Our noise-canceling headphones let you enjoy your music without any distractions, and our gaming headphones provide an immersive gaming experience.",
//     },
//   ],
//   activeCategory: "",
// };

const initialState = [];

import axios from "axios";

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET-CATEGORIES":
      return payload;
    default:
      return state;
  }
};

export const setCategories = (data) => {
  return {
    type: "GET-CATEGORIES",
    payload: data,
  };
};

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  console.log("request results", response.data.results);
  dispatch(getCategories(response.data.results));
};

export default categoriesReducer;
