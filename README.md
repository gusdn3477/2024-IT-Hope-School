# IT 희망학교 프로젝트

IT 희망학교 프로젝트는 프론트엔드 / 백엔드로 구성되어 있습니다.

## 프론트엔드 개발 서버 구동

- yarn을 활용하여 패키지를 설치해 주시면 됩니다.
- npm i -g yarn (yarn이 설치되어 있지 않은 경우)
- yarn 명령어를 사용하여 패키지를 설치합니다.
- 간혹 특정 라이브러리 설치에 많은 시간이 소요되어 타임아웃 이슈가 발생합니다.
- 그 경우 yarn install --network-timeout 6000000 명령어로 패키지를 설치해주시면 됩니다.
- yarn dev로 개발 서버를 실행시킵니다.

## 백엔드 서버 구동 방법

- 파이썬을 실행할 수 있는 환경에서 backend.py 파일을 실행시키면 됩니다.

## 시나리오 (12월 6일 기준. 추후 수정 가능)

1. 우선 회원가입을 합니다.

2. 로그인을 합니다. 잘못된 정보를 입력한 경우 에러 메시지가 뜨는데, 이 부분을 넣어도 좋을 것 같습니다.

3. 아이템을 구매합니다. 여러 종류의 아이템을 한 번의 액션으로 구매하는 모습을 보여주면 더 좋습니다.

4. 아이템 구매 시에 현재 가진 돈보다 더 많이 구매하는 모습을 넣어도 좋을 것 같습니다. 이런 경우 에러 메시지가 뜨며 구매되지 않습니다.

5. 농장 클릭 이벤트를 보여줍니다. 빈 농장의 경우 '심기' 이벤트가 가능하고, 아직 열매를 맺지 못한 농장의 경우 아무 이벤트도 진행할 수 없습니다. 열매를 맺은 농장의 경우 '수확' 이벤트가 가능합니다.

6. 수확하면 돈을 얻는데, 가격이 랜덤값이므로 같은 씨앗을 심어도 다른 수확금을 얻는 모습을 보여줍니다.

7. 로그아웃 후에 재 로그인 하여 로그아웃 전에 가지고 있던 돈, 농장의 상태 등이 유지되었는지 보여줍니다.