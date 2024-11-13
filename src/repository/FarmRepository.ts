import { API } from '../API';

class FarmRepository {
  sleep({ userId }: { userId: string }) {
    return API.post('/sleep', { userId });
  }

  work({ userId, workId }: { userId: string; workId: number }) {
    return API.post('/work', { userId, workId });
  }

  harvest({
    id,
    farmId,
    money,
  }: {
    id: string;
    farmId: string;
    money: number;
  }) {
    return API.post('/harvest', { id, farmId, money });
  }

  plant({
    id,
    farmId,
    itemId,
  }: {
    id: string;
    farmId: string;
    itemId: string;
  }) {
    return API.post('/plant', { id, farmId, itemId });
  }
}

export const farmRepository = new FarmRepository();
