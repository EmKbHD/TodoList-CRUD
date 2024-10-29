// Features import 
import {	PresentationChartLineIcon} from '@heroicons/react/24/solid'
import {ShieldCheckIcon} from '@heroicons/react/24/solid'
import {ClockIcon} from '@heroicons/react/24/solid'
import {NewspaperIcon} from '@heroicons/react/24/solid'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
// banners import
import Dashboard from "../assets/admin-dashboard.png"
import carteVote from "../assets/carte-de-vote.png"
// testimonials import 
import photo1 from "../assets/photo-1.png"
import photo2 from "../assets/photo-2.png"
import photo3 from "../assets/photo-3.png"

export const NavbarMenu = [
 {
  id:1,
  title:"Home",
  link:"/"
 },
 {
  id:2,
  title:"Pricing",
  link:"#"
 },
 {
  id:3,
  title:"About us",
  link:"#"
 },
 {
  id:4,
  title:"Contact",
  link:"#"
 },
 
]

export const FeaturesData = [
 {
  id:1,
  title:"Real-time Result",
  desc:"Follow the results of the vote/poll in real time.",
  link:"/",
  icon:PresentationChartLineIcon,
  button:{
   desc:"Read More",
   link:"/",
   icon:ChevronRightIcon,
  },
  delay:0.5,
 },
 {
  id:2,
  title:"Secured Elections",
  desc:"Robots and VPN users are excluded from voting.",
  link:"/",
  icon:ShieldCheckIcon,
  button:{
   desc:"Read More",
   link:"/",
   icon:ChevronRightIcon,
  },
  delay:0.7,
 },
 {
  id:3,
  title:"Planned Elections",
  desc:"Set the starting and ending dates for your votes.",
  link:"/",
  icon:ClockIcon,
  button:{
   desc:"Read More",
   link:"/",
   icon:ChevronRightIcon,
  },
  delay:0.8,
 },
 {
  id:4,
  title:"Advanced Inquiry",
  desc:"Get the people's opinion using the voting system.",
  link:"/",
  icon:NewspaperIcon,
  button:{
   desc:"Read More",
   link:"/",
   icon:ChevronRightIcon,
  },
  delay:0.9,
 },
]

export const BannersData = [{
  id:1,
  title:"Vote Dashboard Data",
  description:"Get the real-time results of the elections...Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin.",
  img_url:Dashboard,
  button:{
   desc:"Read on",
   link:"#",
   icon:ChevronRightIcon,
  },
  delay:0.9,
},
{
  id:2,
  title:"Cards vote page",
  description:"Card or bulletin board of candidates and button to initiate the vote...Aliquam convallis sollicitudin purus. Praesent aliquam, enim.",
  img_url:carteVote,
  button:{
   desc:"Read on",
   link:"#",
   icon:ChevronRightIcon,
  },
  delay:0.9,
},
]

export const TestimonialsData = [{
  id:1,
  name:"John Doe",
  role:"CEO / Company",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, officiis, et, repellat repudiandae quae fugit nemo tempore rerum quas laboriosam.",
  img:photo1,
  rating:'⭐⭐⭐⭐⭐',
},
{
  id:2,
  name:"Bruce Lee",
  role:"Engineer / Company",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, officiis, et, repellat repudiandae quae fugit nemo tempore rerum quas laboriosam.",
  img:photo2,
  rating:'⭐⭐⭐⭐' 
},
{
  id:3,
  name:"Kali Mwendo",
  role:"Designer / Company",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, officiis, et, repellat repudiandae quae fugit nemo tempore rerum quas laboriosam.",
  img:photo3,
  rating:'⭐⭐⭐⭐⭐'
},
]

//Pricing Plans data

export const planMonthly = [
    {
        category: "Free",
        price: "0$ / Month",
        features: [
            "Créer 3 Votes",
            "5 candidats",
            "50 électeurs",
            "Créer 2 Sondages",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "1 essai gratuit forfait Pro (30jrs)"
        ],
        buttonText: "Commencez"
    },
    {
        category: "Professional",
        price: "13$ / Mois",
        features: [
            "Créer 20 Votes",
            "7 candidats",
            "Illimité électeurs",
            "Créer 4 Sondages",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "Sondage par Etoile",
            "Sondage par Emojis",
            "1 essai gratuit du forfait Premium"
        ],
        buttonText: "Acheter Maintenant",
        recommended: true
    },
    {
        category: "Premium",
        price: "20$ / Mois",
        features: [
            "Illimité de vote",
            "Illimité candidats",
            "Illimité électeurs",
            "Illimité de sondage",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "Sondage par graphique",
            "Sondage par emoji",
            "Sondage par notation (0-10)",
            "Sondage par Image",
            "Sondage par Etoile"
        ],
        buttonText: "Acheter Maintenant"
    }
];

export const planAnnual = [
    {
        title: "Free",
        price: "0$ / Year",
        features: [
            "Créer 3 Votes",
            "5 candidats",
            "50 électeurs",
            "Créer 2 Sondages",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "1 essai gratuit forfait Pro (30jrs)"
        ],
        buttonText: "Try"
    },
    {
        title: "Professional",
        price: "120$ / Year",
        features: [
            "Créer 20 Votes",
            "7 candidats",
            "Illimité électeurs",
            "Créer 4 Sondages",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "Sondage par Etoile",
            "Sondage par Emojis",
            "1 essai gratuit du forfait Premium"
        ],
        buttonText: "Buy Now",
        recommended: true
    },
    {
        title: "Premium",
        price: "200$ / Year",
        features: [
            "Illimité de vote",
            "Illimité candidats",
            "Illimité électeurs",
            "Illimité de sondage",
            "Sondage Choix unique",
            "Sondage par Question/Réponse",
            "Sondage par graphique",
            "Sondage par emoji",
            "Sondage par notation (0-10)",
            "Sondage par Image",
            "Sondage par Etoile"
        ],
        buttonText: "Buy Now"
    }
];