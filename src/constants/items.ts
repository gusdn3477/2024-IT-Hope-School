import ndivia from '../assets/ndiviia.png';
import macrosoft from '../assets/macrosoft.png';

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
    bagImgSrc: ndivia,
    price: 50,
    day: 1,
    count: 60,
    description: '미국 AI 붐에 탑승할 수 있는 주식',
  },
  '1': {
    id: '1',
    name: 'MACROSOFT',
    bagImgSrc: macrosoft,
    price: 60,
    day: 1,
    count: 60,
    description: '매크로소프트 주식',
  },
};
