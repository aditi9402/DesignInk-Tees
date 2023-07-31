import { proxy } from "valtio";

const state=proxy({
    intro:true, //are we on the home page
    color: '#EFBD48',
    isLogoTexture:true, //are we displaying logo on the shirt
    isFullTexture:false,
    logoDecal:'../../public/threejs.png',
    fullDecal:'../../public/threejs.png',

})

export default state;