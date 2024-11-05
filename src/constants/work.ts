import wrench from '../assets/wrench.png';
import hammer from '../assets/hammer.png';

export interface WorkInterface {
  id: number;
  name: string;
  imgSrc: string;
  income: number;
  energySpent: number;
  description: string;
}

export const items: WorkInterface[] = [
  {
    id: 0,
    name: '기계 조립',
    imgSrc: wrench,
    income: 50,
    energySpent: 30,
    description: '기계를 조립하여 50원의 수익을 얻는다.',
  },
  {
    id: 1,
    name: '주택 건설',
    imgSrc: hammer,
    income: 60,
    energySpent: 45,
    description: '주택을 건설하여 60원의 수입을 얻는다.',
  },
];
