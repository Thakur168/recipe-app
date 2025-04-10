import breakfastCategory from "./assets/images/breakfast.jpg";
import lunchCategory from "./assets/images/lunch.jpg";
import dinnerCategory from "./assets/images/dinner.jpg";
import desertCategory from "./assets/images/desert.jpg";
import quickEasyCategory from "./assets/images/quick_easy.jpg";
import healthyLowCalorieCategory from "./assets/images/Healthy&Low_Calorie.jpg";
import AvocadoPoachedEgg from "./assets/images/Avocado_Poached_Egg.jpg";
import LemonMeringuePie from "./assets/images/Lemon_Meringue_Pie.jpg";
import PinachAndFeta_Omelette from "./assets/images/pinach_and_Feta_Omelette.png";
import GrilledChickenSalad from "./assets/images/Grilled_Chicken_Salad.jpeg";
import CreamyTomatoBasilPasta from "./assets/images/Creamy_Tomato_Basil_Pasta.jpg";
import ChickenCaesarWrap from "./assets/images/Chicken_Caesar_Wrap.jpg";
import MangoChickenSalad from "./assets/images/Mango_Chicken_Salad.jpg";
import BBQRibs from "./assets/images/BBQ_Ribs.jpg";
import MushroomRisotto from "./assets/images/Mushroom_Risotto.jpg";
import BrownieSundae from "./assets/images/Brownie_Sundae.jpg";
import SmoothieBowl from "./assets/images/Smoothie_Bowl.jpg";
import PannaSauce from "./assets/images/Panna_Sauce.jpeg";
import bannerImg1 from "./assets/images/banner_image.jpg";
import bannerImg2 from "./assets/images/banner_image2.jpg";
import bannerImg3 from "./assets/images/banner_image3.png";

export const ERROR_TYPE = ["required"];

export const BANNERSLIDERSETTING = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export const SLIDERSETTING = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export const BANNERS = [
  {
    id: 1,
    url: bannerImg1,
    title: "Savor the Flavor!",
    subtitle: "Delicious recipes for every occasion.",
  },
  {
    id: 2,
    url: bannerImg3,
    title: "Healthy and Hearty",
    subtitle: "Nourish your body with wholesome recipes.",
  },
  {
    id: 3,
    url: bannerImg2,
    title: "Fresh & Tasty Ideas",
    subtitle: "Explore seasonal ingredients and creative meals.",
  },
];

export const CATEGORY = [
  {
    id: 1,
    categoryName: "Breakfast",
    url: breakfastCategory,
  },
  {
    id: 2,
    categoryName: "Lunch",
    url: lunchCategory,
  },
  {
    id: 3,
    categoryName: "Dinner",
    url: dinnerCategory,
  },
  {
    id: 4,
    categoryName: "Deserts",
    url: desertCategory,
  },
  {
    id: 5,
    categoryName: "Quick & Easy",
    url: quickEasyCategory,
  },
  {
    id: 6,
    categoryName: "Healthy & Low-Calorie",
    url: healthyLowCalorieCategory,
  },
];

export const RECIPES = [
  {
    id: 1,
    recipeName: "Avocado Toast with Egg",
    description:
      " A simple and nutritious breakfast dish with creamy mashed avocado on toasted whole grain bread, topped with a perfectly poached egg. Try this dish at home.",
    category: "Breakfast",
    url: AvocadoPoachedEgg,
  },
  {
    id: 2,
    recipeName: "Lemon Meringue Pie",
    description:
      " A tangy lemon filling topped with fluffy meringue, all set in a flaky, buttery crust. A perfect balance of tart and sweet, this pie is a classNameic favorite.",
    category: "Desert",
    url: LemonMeringuePie,
  },
  {
    id: 3,
    recipeName: "Spinach & Feta Omelette",
    url: PinachAndFeta_Omelette,
    description:
      "A fluffy omelette filled with fresh spinach and creamy feta cheese. This quick and easy meal is perfect for breakfast or dinner, offering a healthy and satisfying option.",
    category: "Quick & Easy",
  },
  {
    id: 4,
    recipeName: "Grilled Chicken Salad",
    description:
      "A wholesome and refreshing salad made with a blend of crisp greens, juicy cherry tomatoes, crunchy cucumber slices, and tender grilled chicken breast.",
    category: "Healthy & Low-Calorie",
    url: GrilledChickenSalad,
  },
  {
    id: 5,
    recipeName: "Creamy Tomato Pasta",
    description:
      "This comforting pasta dish features perfectly cooked al dente noodles tossed in a rich and creamy tomato basil sauce. Try it out for a delicious treat that your loved ones will enjoy!",
    category: "Dinner",
    url: CreamyTomatoBasilPasta,
  },
  {
    id: 6,
    recipeName: "Chicken Caesar Wrap",
    description:
      "Enjoy the classic Caesar salad in a convenient wrap! Filled with crisp romaine lettuce, succulent grilled chicken strips, crunchy croutons, and creamy Caesar dressing.",
    category: "Lunch",
    url: ChickenCaesarWrap,
  },
  {
    id: 7,
    recipeName: "Mango Chicken Salad",
    description:
      "Grilled chicken breast, mixed greens, juicy mango slices, and a light vinaigrette, offering a tropical twist to a healthy lunch.",
    category: "Healthy & Low-Calorie",
    url: MangoChickenSalad,
  },
  {
    id: 8,
    recipeName: "BBQ Ribs",
    description:
      "Tender and juicy pork ribs glazed with smoky barbecue sauce, served with coleslaw and cornbread for a classic BBQ feast. ",
    category: "Dinner",
    url: BBQRibs,
  },
  {
    id: 9,
    recipeName: "Mushroom Risotto",
    url: MushroomRisotto,
    description:
      "Creamy Arborio rice cooked with earthy mushrooms and a touch of Parmesan cheese. A comforting and rich dish that’s perfect for dinner.",
    category: "Dinner",
  },
  {
    id: 10,
    recipeName: "Brownie Sundae",
    description:
      "Warm, fudgy brownies topped with vanilla ice cream, hot fudge sauce, and a cherry on top. Try it out for a delicious treat that your loved ones will enjoy!",
    category: "Desert",
    url: BrownieSundae,
  },
  {
    id: 11,
    recipeName: "Smoothie Bowl",
    description:
      "A quick and healthy breakfast made with blended fruit, yogurt, and granola on top for crunch. Try it out for a delicious treat that your loved ones will enjoy!",
    category: "Quick & Easy",
    url: SmoothieBowl,
  },
  {
    id: 12,
    recipeName: "Panna Cotta with Raspberry Sauce",
    description:
      "A silky Italian dessert made with cream, sugar, and gelatin, served with a sweet and tart raspberry sauce. Try it out for a delicious treat that your loved ones will enjoy!",
    category: "Desert",
    url: PannaSauce,
  },
];
