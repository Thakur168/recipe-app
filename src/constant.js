import breakfastCategory from "./assets/images/breakfast.jpg";
import lunchCategory from "./assets/images/lunch.jpg";
import dinnerCategory from "./assets/images/dinner.jpg";
import dessertCategory from "./assets/images/dessert.jpg";
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
    categoryName: "Dessert",
    url: dessertCategory,
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
    categoryName: "Breakfast",
    categoryId: 1,
    url: AvocadoPoachedEgg,
    ingredients: [
      "1 slice whole grain bread",
      "1/4 ripe avocado",
      "1 large egg",
      "1 tsp lemon juice",
      "Salt and pepper to taste",
      "Optional: red pepper flakes, microgreens",
    ],
    prepTime: "5 mins",
    cookTime: "5 mins",
    totalTime: "10 mins",
    servings: 1,
    difficulty: "Easy",
    nutrition: {
      calories: 197,
      fat: "14g",
      carbs: "15g",
      protein: "7g",
    },
    tags: ["vegetarian", "high-protein", "quick"],
    author: "Yumna Jawad",
    tips: [
      "Use ripe avocado for best flavor.",
      "Toast bread to your desired crispness.",
    ],
    instructions: [
      "Toast the slice of whole grain bread to your desired crispness.",
      "While the bread is toasting, mash the avocado with lemon juice, salt, and pepper in a bowl.",
      "Once the toast is ready, spread the mashed avocado evenly over the toast.",
      "Poach the egg in simmering water for about 3 minutes, or until the white is set and the yolk is still runny.",
      "Place the poached egg on top of the avocado toast.",
      "Optionally, sprinkle with red pepper flakes and garnish with microgreens before serving.",
    ],
  },
  {
    id: 2,
    recipeName: "Lemon Meringue Pie",
    description:
      " A tangy lemon filling topped with fluffy meringue, all set in a flaky, buttery crust. A perfect balance of tart and sweet, this pie is a classic favorite.",
    categoryName: "Dessert",
    categoryId: 4,
    url: LemonMeringuePie,
    ingredients: [
      "1 pre-baked 9-inch pie crust",
      "1 1/4 cups granulated sugar",
      "6 tbsp cornstarch",
      "1/4 tsp salt",
      "2 cups water",
      "3 large egg yolks",
      "1/2 cup fresh lemon juice",
      "1 tbsp unsalted butter",
      "3 large egg whites",
      "1/4 tsp lemon juice",
      "1/4 cup granulated sugar",
    ],
    prepTime: "20 mins",
    cookTime: "20 mins",
    totalTime: "40 mins",
    servings: 8,
    difficulty: "Medium",
    nutrition: {
      calories: 311,
      fat: "9g",
      carbs: "55g",
      protein: "4g",
    },
    tags: ["classic", "baking", "dessert"],
    author: "Lauren Allen",
    tips: [
      "Use freshly squeezed lemon juice for best results.",
      "Add meringue while lemon filling is still hot to prevent separation.",
    ],
    instructions: [
      "In a medium saucepan, combine sugar, cornstarch, and salt. Stir in water, and cook over medium heat until the mixture thickens.",
      "In a separate bowl, whisk the egg yolks. Gradually add some of the hot mixture to the yolks, then whisk it all back into the saucepan.",
      "Stir in lemon juice and butter, and cook for another 2 minutes until thickened.",
      "Pour the lemon mixture into the pre-baked pie crust and smooth the top.",
      "In a separate bowl, beat egg whites with lemon juice until soft peaks form. Gradually add sugar and continue to beat until stiff peaks form.",
      "Spread the meringue over the lemon filling, making sure it touches the crust to seal it.",
      "Bake at 350°F for 15 minutes, or until the meringue is golden brown.",
    ],
  },
  {
    id: 3,
    recipeName: "Spinach & Feta Omelette",
    url: PinachAndFeta_Omelette,
    description:
      "A fluffy omelette filled with fresh spinach and creamy feta cheese. This quick and easy meal is perfect for breakfast or dinner, offering a healthy and satisfying option.",
    categoryName: "Quick & Easy",
    categoryId: 5,
    ingredients: [
      "2 large eggs",
      "1/4 cup fresh spinach",
      "2 tbsp crumbled feta cheese",
      "1 tsp olive oil",
      "Salt and pepper to taste",
    ],
    prepTime: "5 mins",
    cookTime: "5 mins",
    totalTime: "10 mins",
    servings: 1,
    difficulty: "Easy",
    nutrition: {
      calories: 215,
      fat: "17g",
      carbs: "2g",
      protein: "14g",
    },
    tags: ["vegetarian", "keto-friendly", "low-carb"],
    author: "Jamie Oliver",
    tips: [
      "Use a nonstick skillet for an easy flip.",
      "Cook spinach briefly to retain nutrients.",
    ],
    instructions: [
      "Heat olive oil in a nonstick skillet over medium heat.",
      "Add spinach and sauté for about 1 minute until wilted.",
      "Beat the eggs in a bowl and season with salt and pepper.",
      "Pour the beaten eggs over the spinach in the skillet and cook until the edges set.",
      "Add crumbled feta cheese to one side of the omelette.",
      "Fold the omelette in half and cook for another minute until the cheese is melted.",
    ],
  },
  {
    id: 4,
    recipeName: "Grilled Chicken Salad",
    description:
      "A wholesome and refreshing salad made with a blend of crisp greens, juicy cherry tomatoes, crunchy cucumber slices, and tender grilled chicken breast.",
    categoryName: "Healthy & Low-Calorie",
    url: GrilledChickenSalad,
    categoryId: 6,
    ingredients: [
      "1 grilled chicken breast",
      "2 cups mixed greens",
      "1/2 cup cherry tomatoes",
      "1/4 cucumber, sliced",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
    ],
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    servings: 2,
    difficulty: "Easy",
    nutrition: {
      calories: 320,
      fat: "18g",
      carbs: "6g",
      protein: "30g",
    },
    tags: ["gluten-free", "protein-rich", "low-carb"],
    author: "Ina Garten",
    tips: [
      "Grill chicken in advance for quicker prep.",
      "Toss salad just before serving to keep it fresh.",
    ],
    instructions: [
      "Grill the chicken breast over medium heat for about 6-7 minutes per side, or until fully cooked.",
      "Slice the grilled chicken into strips.",
      "In a large bowl, combine mixed greens, cherry tomatoes, and cucumber slices.",
      "Drizzle with olive oil and balsamic vinegar, and toss to combine.",
      "Top the salad with the sliced grilled chicken before serving.",
    ],
  },
  {
    id: 5,
    recipeName: "Creamy Tomato Pasta",
    description:
      "This comforting pasta dish features perfectly cooked al dente noodles tossed in a rich and creamy tomato basil sauce. Try it out for a delicious treat that your loved ones will enjoy!",
    categoryName: "Dinner",
    url: CreamyTomatoBasilPasta,
    categoryId: 3,
    ingredients: [
      "200g pasta (any shape)",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 can (14.5 oz) crushed tomatoes",
      "Salt and pepper to taste",
      "1 tsp dried basil",
      "1/2 cup heavy cream",
      "Parmesan cheese, for garnish",
      "Fresh basil, for garnish",
    ],
    prepTime: "5 mins",
    cookTime: "20 mins",
    totalTime: "25 mins",
    servings: 2,
    difficulty: "Easy",
    nutrition: {
      calories: 450,
      fat: "25g",
      carbs: "50g",
      protein: "10g",
    },
    tags: ["vegetarian", "comfort food", "easy"],
    author: "Priya Thakur",
    tips: [
      "Use freshly grated Parmesan for better flavor.",
      "Add a pinch of red pepper flakes for a spicy kick.",
      "You can use half-and-half instead of heavy cream for a lighter version.",
    ],
    instructions: [
      "Cook pasta according to package directions.",
      "In a pan, sauté garlic in olive oil until fragrant.",
      "Add crushed tomatoes, salt, pepper, and basil. Simmer for 10 minutes.",
      "Stir in heavy cream and simmer for 5 more minutes.",
      "Toss cooked pasta in the sauce.",
      "Garnish with Parmesan cheese and fresh basil before serving.",
    ],
  },
  {
    id: 6,
    recipeName: "Chicken Caesar Wrap",
    description:
      "Enjoy the classic Caesar salad in a convenient wrap! Filled with crisp romaine lettuce, succulent grilled chicken strips, crunchy croutons, and creamy Caesar dressing.",
    categoryName: "Lunch",
    url: ChickenCaesarWrap,
    categoryId: 2,
    ingredients: [
      "2 large flour tortillas",
      "1 grilled chicken breast, sliced",
      "2 cups romaine lettuce, chopped",
      "1/4 cup croutons",
      "2 tbsp Caesar dressing",
    ],
    prepTime: "10 mins",
    cookTime: "10 mins",
    totalTime: "20 mins",
    servings: 2,
    difficulty: "Easy",
    nutrition: {
      calories: 320,
      fat: "15g",
      carbs: "30g",
      protein: "25g",
    },
    tags: ["quick", "easy", "lunch"],
    author: "Chef John",
    tips: [
      "Grill the chicken in advance for quick meal prep.",
      "Add a little extra dressing for more flavor.",
    ],
    instructions: [
      "1. Grill or pan-cook the chicken breast until fully cooked and slice it into strips.",
      "2. Lay out the flour tortillas on a flat surface.",
      "3. Layer the romaine lettuce, grilled chicken strips, croutons, and Caesar dressing on each tortilla.",
      "4. Roll the tortilla tightly and slice in half.",
      "5. Serve immediately or wrap tightly for a quick on-the-go meal.",
    ],
  },
  {
    id: 7,
    recipeName: "Mango Chicken Salad",
    description:
      "Grilled chicken breast, mixed greens, juicy mango slices, and a light vinaigrette, offering a tropical twist to a healthy lunch.",
    categoryName: "Healthy & Low-Calorie",
    url: MangoChickenSalad,
    categoryId: 6,
    ingredients: [
      "1 grilled chicken breast, sliced",
      "2 cups mixed salad greens",
      "1/2 mango, sliced",
      "1/4 red onion, thinly sliced",
      "2 tbsp balsamic vinaigrette",
    ],
    prepTime: "10 mins",
    cookTime: "10 mins",
    totalTime: "20 mins",
    servings: 2,
    difficulty: "Easy",
    nutrition: {
      calories: 350,
      fat: "12g",
      carbs: "20g",
      protein: "35g",
    },
    tags: ["low-calorie", "healthy", "salad"],
    author: "Healthy Chef",
    tips: [
      "Use ripe mango for the best sweetness.",
      "Grill chicken in advance for faster preparation.",
    ],
    instructions: [
      "1. Grill or pan-cook the chicken breast until fully cooked and slice it into strips.",
      "2. In a large bowl, combine the mixed salad greens, mango slices, and red onion.",
      "3. Add the grilled chicken on top and drizzle with balsamic vinaigrette.",
      "4. Toss gently to combine and serve immediately.",
    ],
  },
  {
    id: 8,
    recipeName: "BBQ Ribs",
    description:
      "Tender and juicy pork ribs glazed with smoky barbecue sauce, served with coleslaw and cornbread for a classic BBQ feast.",
    categoryName: "Dinner",
    url: BBQRibs,
    categoryId: 3,
    ingredients: [
      "2 racks of baby back ribs",
      "1 cup BBQ sauce",
      "Salt and pepper to taste",
      "1 cup coleslaw (optional)",
      "1 slice cornbread (optional)",
    ],
    prepTime: "10 mins",
    cookTime: "2 hrs",
    totalTime: "2 hrs 10 mins",
    servings: 4,
    difficulty: "Medium",
    nutrition: {
      calories: 500,
      fat: "35g",
      carbs: "30g",
      protein: "40g",
    },
    tags: ["BBQ", "dinner", "meat"],
    author: "Grill Master",
    tips: [
      "Cook ribs low and slow for the best tenderness.",
      "Let the ribs rest for 10 minutes before slicing.",
    ],
    instructions: [
      "1. Preheat your grill to low heat.",
      "2. Rub the ribs with salt and pepper and place them on the grill.",
      "3. Grill the ribs for about 1 hour, turning occasionally to prevent burning.",
      "4. Brush BBQ sauce on the ribs during the last 10 minutes of grilling.",
      "5. Remove ribs from the grill and let rest for 10 minutes.",
      "6. Serve with coleslaw and cornbread, if desired.",
    ],
  },
  {
    id: 9,
    recipeName: "Mushroom Risotto",
    url: MushroomRisotto,
    description:
      "Creamy Arborio rice cooked with earthy mushrooms and a touch of Parmesan cheese. A comforting and rich dish that’s perfect for dinner.",
    categoryName: "Dinner",
    categoryId: 3,
    ingredients: [
      "1 1/2 cups Arborio rice",
      "1 cup sliced mushrooms",
      "1/2 cup Parmesan cheese",
      "1/2 onion, chopped",
      "2 tbsp butter",
      "4 cups chicken or vegetable broth",
      "1/4 cup dry white wine",
      "Salt and pepper to taste",
    ],
    prepTime: "10 mins",
    cookTime: "20 mins",
    totalTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    nutrition: {
      calories: 350,
      fat: "15g",
      carbs: "45g",
      protein: "10g",
    },
    tags: ["comfort food", "vegetarian", "dinner"],
    author: "Italian Chef",
    tips: [
      "Stir constantly while adding broth to achieve creamy texture.",
      "Use high-quality mushrooms for the best flavor.",
    ],
    instructions: [
      "1. Heat butter in a large pan over medium heat.",
      "2. Add onions and mushrooms, and sauté until softened.",
      "3. Stir in Arborio rice and cook for 1-2 minutes.",
      "4. Add white wine and stir until absorbed.",
      "5. Gradually add the broth, one cup at a time, stirring constantly until the liquid is absorbed.",
      "6. Once the rice is cooked and creamy, stir in Parmesan cheese.",
      "7. Season with salt and pepper and serve.",
    ],
  },
  {
    id: 10,
    recipeName: "Brownie Sundae",
    description:
      "Warm, fudgy brownies topped with vanilla ice cream, hot fudge sauce, and a cherry on top. Try it out for a delicious treat that your loved ones will enjoy!",
    categoryName: "Dessert",
    url: BrownieSundae,
    categoryId: 4,
    ingredients: [
      "1 batch homemade brownies (or store-bought)",
      "Vanilla ice cream",
      "Hot fudge sauce",
      "Maraschino cherry",
    ],
    prepTime: "5 mins",
    cookTime: "30 mins",
    totalTime: "35 mins",
    servings: 4,
    difficulty: "Easy",
    nutrition: {
      calories: 450,
      fat: "25g",
      carbs: "50g",
      protein: "6g",
    },
    tags: ["dessert", "chocolate", "treat"],
    author: "Dessert Queen",
    tips: [
      "Serve the brownies warm for the best contrast with the ice cream.",
      "Add a sprinkle of crushed nuts for extra texture.",
    ],
    instructions: [
      "1. Prepare brownies according to recipe or package instructions.",
      "2. Once the brownies are baked, cut them into squares.",
      "3. Place a brownie on a plate, top with a scoop of vanilla ice cream.",
      "4. Drizzle with hot fudge sauce and top with a cherry.",
      "5. Serve immediately and enjoy!",
    ],
  },
  {
    id: 11,
    recipeName: "Smoothie Bowl",
    description:
      "A quick and healthy breakfast made with blended fruit, yogurt, and granola on top for crunch. Try it out for a delicious treat that your loved ones will enjoy!",
    categoryName: "Quick & Easy",
    url: SmoothieBowl,
    categoryId: 5,
    ingredients: [
      "1 banana",
      "1/2 cup frozen berries",
      "1/2 cup yogurt",
      "1/4 cup granola",
      "1 tbsp honey",
    ],
    prepTime: "5 mins",
    cookTime: "0 mins",
    totalTime: "5 mins",
    servings: 1,
    difficulty: "Easy",
    nutrition: {
      calories: 250,
      fat: "8g",
      carbs: "35g",
      protein: "8g",
    },
    tags: ["breakfast", "healthy", "quick"],
    author: "Nutritionist Sarah",
    tips: [
      "Use frozen fruit for a thicker texture.",
      "Add chia seeds for extra nutrition.",
    ],
    instructions: [
      "1. Blend the banana, frozen berries, and yogurt until smooth.",
      "2. Pour the smoothie mixture into a bowl.",
      "3. Top with granola and drizzle with honey.",
      "4. Serve immediately and enjoy!",
    ],
  },
  {
    id: 12,
    recipeName: "Panna Cotta with Raspberry Sauce",
    description:
      "A silky Italian dessert made with cream, sugar, and gelatin, served with a sweet and tart raspberry sauce. Try it out for a delicious treat that your loved ones will enjoy!",
    categoryName: "Dessert",
    url: PannaSauce,
    categoryId: 4,
    ingredients: [
      "1 cup heavy cream",
      "1/2 cup whole milk",
      "1/2 cup sugar",
      "1 tsp vanilla extract",
      "1 tbsp gelatin powder",
      "1/4 cup cold water",
      "1 cup fresh raspberries",
    ],
    prepTime: "15 mins",
    cookTime: "5 mins",
    totalTime: "2 hrs 20 mins (chill time)",
    servings: 4,
    difficulty: "Medium",
    nutrition: {
      calories: 330,
      fat: "25g",
      carbs: "30g",
      protein: "4g",
    },
    tags: ["dessert", "Italian", "creamy"],
    author: "Pastry Chef Luca",
    tips: [
      "Allow the panna cotta to set completely before serving.",
      "Strain the raspberry sauce to remove seeds.",
    ],
    instructions: [
      "1. In a small bowl, dissolve gelatin in cold water and let sit for 5 minutes.",
      "2. Heat the heavy cream, milk, and sugar in a saucepan over medium heat until sugar dissolves.",
      "3. Add the gelatin mixture and vanilla extract, stirring until smooth.",
      "4. Pour the mixture into molds and refrigerate for at least 2 hours.",
      "5. For the sauce, blend raspberries with a little sugar, then strain.",
      "6. Once panna cotta is set, serve with raspberry sauce.",
    ],
  },
];
