import { API } from '../API';

class MarketRepository {
  // 아이템 다 불러와야 할 듯
  get() {
    return API.get('/market');
  }

  buy(dto: { userId: string; stockName: string; count: number }) {
    return API.post('/buy_stocks', dto);
  }

  sell(dto: { userId: string; stockName: string; count: number }) {
    return API.post('/sell_stocks', dto);
  }
}

export const marketRepository = new MarketRepository();
