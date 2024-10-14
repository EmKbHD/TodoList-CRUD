import {	PresentationChartLineIcon} from '@heroicons/react/24/solid'
import {ShieldCheckIcon} from '@heroicons/react/24/solid'
import {ClockIcon} from '@heroicons/react/24/solid'
import {NewspaperIcon} from '@heroicons/react/24/solid'
import {ChevronRightIcon} from '@heroicons/react/24/solid'

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