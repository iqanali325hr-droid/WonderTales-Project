import indexHome from './components/indexHome.vue'
import harryPotter from './components/harryPotter.vue'
import guaridanOfLord from './components/guaridanOfLord.vue'
import hippoPlay from './components/hippoPlay.vue'
import hairCut from './components/hairCut.vue'
import fireFly   from './components/fireFly.vue'
import boyCriedWolf from './components/boyCriedWolf.vue'
import gemmaStroy from './components/gemmaStroy.vue'
import circketCrips from './components/circketCrips.vue'
import soloarStory from './components/soloarStory.vue'
import lunaAndLostStar from './components/lunaAndLostStar.vue'
import AhmadAndtheWhisperingNight from './components/AhmadAndtheWhisperingNight.vue'
import MagicStory from './components/MagicStory.vue'
import wisperUnderBed from './components/wisperUnderBed.vue'
import princessKIndness from './components/princessKIndness.vue'
import lilaMagicSeeds from './components/lilaMagicSeeds.vue'
import adminPannel from './components/adminPannel.vue'

import { createRouter, createWebHistory } from 'vue-router'

// const routes=[
//     {
//         name:'indexHome',
//         component: indexHome,
//         path:'/'
//     },
//    {
//     path: '/harryPotter/:id', 
//     name: 'harryPotter',      
//     component: harryPotter
//   },
//      {
//         name:'guaridanOfLord',
//         component:guaridanOfLord,
//         path:'/guaridanOfLord'
//     },
//       {
//         name:'hippoPlay',
//         component:hippoPlay,
//         path:'/hippoPlay'
//     },
//       {
//         name:'hairCut',
//         component:hairCut,
//         path:'/hairCut'
//     },
//        {
//         name:'fireFly',
//         component:fireFly,
//         path:'/fireFly'
//     },
//   {
//         name:'boyCriedWolf',
//         component:boyCriedWolf,
//         path:'/boyCriedWolf'
//     },
//       {
//         name:'gemmaStroy',
//         component:gemmaStroy,
//         path:'/gemmaStroy'
//     },
//         {
//         name:'circketCrips',
//         component:circketCrips,
//         path:'/circketCrips'
//     },
//            {
//         name:'soloarStory',
//         component:soloarStory,
//         path:'/soloarStory'
//     },
//               {
//         name:'lunaAndLostStar',
//         component:lunaAndLostStar,
//         path:'/lunaAndLostStar'
//     },
//                 {
//         name:'AhmadAndtheWhisperingNight',
//         component:AhmadAndtheWhisperingNight,
//         path:'/AhmadAndtheWhisperingNight'
//     },
//                   {
//         name:'MagicStory',
//         component:MagicStory,
//         path:'/MagicStory'
//     },
//                       {
//         name:'wisperUnderBed',
//         component:wisperUnderBed,
//         path:'/wisperUnderBed'
//     },
//                         {
//         name:'princessKIndness',
//         component:princessKIndness,
//         path:'/princessKIndness'
//     },
//                             {
//         name:'lilaMagicSeeds',
//         component:lilaMagicSeeds,
//         path:'/lilaMagicSeeds'
//     },
// ]
const routes = [
    { name: 'indexHome', component: indexHome, path: '/' },
    { name: 'harryPotter', component: harryPotter, path: '/harryPotter/:id' },
    { name: 'guaridanOfLord', component: guaridanOfLord, path: '/guaridanOfLord' },
    { name: 'hippoPlay', component: hippoPlay, path: '/hippoPlay' },
    { name: 'hairCut', component: hairCut, path: '/hairCut' },
    { name: 'fireFly', component: fireFly, path: '/fireFly' },
    { name: 'boyCriedWolf', component: boyCriedWolf, path: '/boyCriedWolf' },
    { name: 'gemmaStroy', component: gemmaStroy, path: '/gemmaStroy' },
    { name: 'circketCrips', component: circketCrips, path: '/circketCrips' },
    { name: 'soloarStory', component: soloarStory, path: '/soloarStory' },
    { name: 'lunaAndLostStar', component: lunaAndLostStar, path: '/lunaAndLostStar' },
    { name: 'AhmadAndtheWhisperingNight', component: AhmadAndtheWhisperingNight, path: '/AhmadAndtheWhisperingNight' },
    { name: 'MagicStory', component: MagicStory, path: '/MagicStory' },
    { name: 'wisperUnderBed', component: wisperUnderBed, path: '/wisperUnderBed' },
    { name: 'princessKIndness', component: princessKIndness, path: '/princessKIndness' },
    { name: 'lilaMagicSeeds', component: lilaMagicSeeds, path: '/lilaMagicSeeds' },
    { path: '/adminPannel', name: 'adminPannel', component: adminPannel }
]
const router=createRouter({
   history: createWebHistory(),
    routes
})

export default router