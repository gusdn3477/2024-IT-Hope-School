import potatobag from '../assets/potatobag.png';
import grownPotato from '../assets/grown_potato.png';
import sweetPotatobag from '../assets/sweetpotatobag.png';
import grownSweetPotato from '../assets/grown_sweetpotato.png';
import carrotbag from '../assets/carrotbag.png';
import grownCarrot from '../assets/grown_carrot.png';
import melonbag from '../assets/melonbag.png';
import grownMelon from '../assets/grown_melon.png';
import tomatobag from '../assets/tomatobag.png';
import grownTomato from '../assets/grown_tomato.png';

export interface ItemInterface {
  id: string;
  name: string;
  bagImgSrc: string;
  price: number;
  day: number;
  count: number;
  description: string;
}
export const items = {
  '0': {
    id: '0',
    name: 'NDIVIA',
    bagImgSrc: potatobag,
    grownImgSrc: grownPotato,
    price: 50,
    day: 1,
    count: 60,
    description: '미국 AI 붐에 탑승할 수 있는 주식',
  },
  '1': {
    id: '1',
    name: 'MACROSOFT',
    bagImgSrc: sweetPotatobag,
    grownImgSrc: grownSweetPotato,
    price: 60,
    day: 1,
    count: 60,
    description: '매크로소프트 주식',
  },
};
