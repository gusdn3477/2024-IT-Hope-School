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
    id: 'NDVA',
    name: '엔디비아',
    bagImgSrc: ndivia,
    description: '미국 AI 붐에 탑승할 수 있는 주식',
  },
  '1': {
    id: 'DSL',
    name: '매크로소프트',
    bagImgSrc: macrosoft,
    description: '매크로소프트 주식',
  },
};
