// import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';
const uniqId = uuidv4();
const smallId = uniqId.slice(0, 8);


const projectData = [
    {
        id : "",
        projectName : "Why Ultratech",
        image : "why-ultra-tech.png",
        url : "https://avais1021.github.io/shape-your-career-public",
        sourceCode : 'https://github.com/avais1021/shape-your-career-public',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Life At Ultratech",
        image : "life-at-ultratech.png",
        url : "https://avais1021.github.io/Life-at-UltraTech/",
        sourceCode : 'https://github.com/avais1021/Life-at-UltraTech',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Jobs At Ultratech",
        image : "Jobs-at-UltraTech.png",
        url : "https://avais1021.github.io/Jobs-at-UltraTech/",
        sourceCode : 'https://github.com/avais1021/Jobs-at-UltraTech',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Early Career",
        image : "Early-Career.png",
        url : "https://avais1021.github.io/Early-Career/",
        sourceCode : 'https://github.com/avais1021/Early-Career',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Ultratech Header",
        image : "ultra-header.png",
        url : "https://avais1021.github.io/Ultratech_header_responsive/#",
        sourceCode : 'https://github.com/avais1021/Ultratech_header_responsive',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Ultratech Homebuilding",
        image : "Home-buildin-section.png",
        url : "https://avais1021.github.io/ultratect-section-All-Responsive/",
        sourceCode : 'https://github.com/avais1021/ultratect-section-All-Responsive',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Future Generali Section",
        image : "Future_Generali.png",
        url : "https://avais1021.github.io/Future_Generali_section/",
        sourceCode : 'https://github.com/avais1021/Future_Generali_section',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Weight Loss",
        image : "weight-lose.png",
        url : "https://avais1021.github.io/Weight-Loss-food/",
        sourceCode : 'https://github.com/avais1021/Weight-Loss-food',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Healthy Food",
        image : "healthy-food.png",
        url : "https://avais1021.github.io/healthy-food-All-Responsive/",
        sourceCode : 'https://github.com/avais1021/healthy-food-All-Responsive',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "Zero Waste",
        image : "zero-waste.png",
        url : "https://avais1021.github.io/Fifth-Task-All-responsive/",
        sourceCode : 'https://github.com/avais1021/Fifth-Task-All-responsive',
        category : 'html',
        model : 'Latest'
    },
    {
        id : "",
        projectName : "HDFC Page",
        image : "hdfc.png",
        url : "https://avais1021.github.io/fourth-Task-All-respnsive/",
        sourceCode : 'https://github.com/avais1021/fourth-Task-All-respnsive',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "House Of Vehicles",
        image : "car-page.png",
        url : "https://avais1021.github.io/Third-task-responsive/",
        sourceCode : '',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Iffko Tokio Family",
        image : "iffco-tokio.png",
        url : "https://avais1021.github.io/second--task-desktop-mobile/",
        sourceCode : 'https://github.com/avais1021/Third-task-responsive',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Iffko Tokio Policy",
        image : "iffko-tokio-policy.png",
        url : "https://avais1021.github.io/first-task-only-desktop-view/",
        sourceCode : 'https://github.com/avais1021/first-task-only-desktop-view',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "My Online Meal",
        image : "my-online-meal.png",
        url : "https://avais1021.github.io/my-online-meal-All-Responsive/",
        sourceCode : 'https://github.com/avais1021/my-online-meal-All-Responsive',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "The Food You Love",
        image : "food-you-love.png",
        url : "https://avais1021.github.io/the-food-you-love-All-Responsive/",
        sourceCode : 'https://github.com/avais1021/the-food-you-love-All-Responsive',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Shopping Page",
        image : "black-friday.png",
        url : "https://avais1021.github.io/shopping-website-only-desktop-view/",
        sourceCode : 'https://github.com/avais1021/shopping-website-only-desktop-view',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Cofee Page",
        image : "starBuck.png",
        url : "https://avais1021.github.io/starbuks-clone-only-desktop-View/",
        sourceCode : 'https://github.com/avais1021/starbuks-clone-only-desktop-View',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Appointment Page",
        image : "appointment-page.png",
        url : "https://avais1021.github.io/clinic-only-desktop-view/#",
        sourceCode : 'https://github.com/avais1021/clinic-only-desktop-view',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Portfoli Page",
        image : "portfoli-page.png",
        url : "https://avais1021.github.io/portfolio-only-desktop-view/",
        sourceCode : 'https://github.com/avais1021/portfolio-only-desktop-view',
        category : 'html',
        model : 'old'
    },
    {
        id : "",
        projectName : "Purchasing Books",
        image : "purchase-book.png",
        url : "https://avais1021.github.io/Content-Kingdom/",
        sourceCode : 'https://github.com/avais1021/Content-Kingdom',
        category : 'js',
    },
    {
        id : "",
        projectName : "App For Medical",
        image : "find-item.png",
        url : "https://avais1021.github.io/Find-Items/",
        sourceCode : 'https://github.com/avais1021/Find-Items',
        category : 'js',
    },
    {
        id : "",
        projectName : "Monthly Budget Tracker",
        image : "monthly-budget.png",
        url : "https://avais1021.github.io/income-management/",
        sourceCode : 'https://github.com/avais1021/income-management',
        category : 'js',
    },
    {
        id : "",
        projectName : "Search your favourite developer",
        image : "search-functionality.png",
        url : "https://avais1021.github.io/Search_functionality/",
        sourceCode : 'https://github.com/avais1021/Search_functionality',
        category : 'js',
    },
    {
        id : "",
        projectName : "Search Weather",
        image : "search-weather.png",
        url : "https://avais1021.github.io/Weather-App/",
        sourceCode : 'https://github.com/avais1021/Weather-App',
        category : 'js',
    },
    {
        id : "",
        projectName : "Cart Page",
        image : "cart-page.png",
        url : "https://avais1021.github.io/e-comerce-cart-page/",
        sourceCode : 'https://github.com/avais1021/e-comerce-cart-page',
        category : 'js',
    },
    {
        id : "",
        projectName : "To-Do List",
        image : "todolist.png",
        url : "https://avais1021.github.io/TO-DO-LIST/",
        sourceCode : 'https://github.com/avais1021/TO-DO-LIST',
        category : 'js',
    },
    {
        id : "",
        projectName : "Notes Taking App",
        image : "notes-taking.png",
        url : "https://avais1021.github.io/Notes-Taking-App/",
        sourceCode : 'https://github.com/avais1021/Notes-Taking-App',
        category : 'js',
    },
    {
        id : "",
        projectName : "Match the Images",
        image : "match-image.png",
        url : "https://avais1021.github.io/Match-the-images-game/",
        sourceCode : 'https://github.com/avais1021/Match-the-images-game',
        category : 'js',
    },
    {
        id : "",
        projectName : "Car Game",
        image : "carGame.png",
        url : "https://avais1021.github.io/Car-game-js/",
        sourceCode : 'https://github.com/avais1021/Car-game-js',
        category : 'js',
    },
    {
        id : "",
        projectName : "Tic Tac Toe Game",
        image : "tic-toe.png",
        url : "https://avais1021.github.io/Tic_Tac_Toe_Game/",
        sourceCode : 'https://github.com/avais1021/Tic_Tac_Toe_Game',
        category : 'js',
    },
    {
        id : "",
        projectName : "Word Scramble Game",
        image : "word-scramble.png",
        url : "https://avais1021.github.io/Word-Scramble-Game/",
        sourceCode : 'https://github.com/avais1021/Word-Scramble-Game',
        category : 'js',
    },
    {
        id : "",
        projectName : "Password Generator",
        image : "password-generator.png",
        url : "https://avais1021.github.io/password-generator/",
        sourceCode : 'https://github.com/avais1021/password-generator',
        category : 'js',
    },
    {
        id : "",
        projectName : "Quiz",
        image : "quiz.png",
        url : "https://avais1021.github.io/Quiz/",
        sourceCode : 'https://github.com/avais1021/Quiz',
        category : 'js',
    },
    {
        id : "",
        projectName : "Interview",
        image : "interview.png",
        url : "https://avais1021.github.io/Interview/",
        sourceCode : 'https://github.com/avais1021/Interview',
        category : 'js',
    },
    {
        id : "",
        projectName : "E-comerce Website",
        image : "ecomerce.png",
        url : "https://react-ecommerce-nu-silk.vercel.app/",
        sourceCode : 'https://github.com/avais1021/react-ecommerce',
        category : 'react',
    },
    {
        id : "",
        projectName : "Check Wheather",
        image : "check_wheather.png",
        url : "https://avais1021.github.io/check-weather-REACT/",
        sourceCode : 'https://github.com/avais1021/check-weather-REACT',
        category : 'react',
    },
    {
        id : "",
        projectName : "Todo List",
        image : "react-todo-list.png",
        url : "https://react-to-do-list-six-mu.vercel.app/",
        sourceCode : 'https://github.com/avais1021/react-to-do-list',
        category : 'react',
    },
    {
        id : "",
        projectName : "Search Funtionality",
        image : "search-two.png",
        url : "https://search-functionality-tau.vercel.app/",
        sourceCode : 'https://github.com/avais1021/react-search-functionality',
        category : 'react',
    },
    {
        id : "",
        projectName : "Random Color",
        image : "random-color.png",
        url : "https://random-color-delta.vercel.app/",
        sourceCode : 'https://github.com/avais1021/react-random-color',
        category : 'react',
    },
    
  
]
console.log(projectData,'projectData');
// console.log(projectData.slice(0,8),'projectData');

export default projectData;