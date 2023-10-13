import image1 from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image8.png'
import image2 from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image5.png'
import image3 from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image6.png'
import image4 from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image7.png'
import * as Icon from 'react-native-heroicons/outline'
export const items=[
    {
        "image":image1,
        "discount":"Discount All Excelsa",
        "percent":"20% in all stores",
        "date":"20/04/2020-20/06/24"
    },
    {
        "image":image2,
        "discount":"Discount All Liberica",
        "percent":"20% in all stores",
        "date":"20/04/2020-20/06/24"
    },
    {
        "image":image3,
        "discount":"Discount All Santorini",
        "percent":"20% in all stores",
        "date":"20/04/2020-20/06/24"
    },
    {
        "image":image4,
        "discount":"Discount All Ibiza",
        "percent":"20% in all stores",
        "date":"20/04/2020-20/06/24"
    }
]

const color='black'
export const Bott=[
    <Icon.HomeIcon stroke={'dodgerblue'} strokeWidth={2}/>,
    <Icon.BuildingStorefrontIcon stroke={color}/>,
    <Icon.QueueListIcon stroke={color}/>,
    <Icon.UserCircleIcon stroke={color}/>
]