# 포켓피싱 vs man

## 기본 기획

1. player가 물에 사는 포켓몬을 낚시로 제압하는 컨셉을 가진 로그라이크 게임입니다
2. 단계별로 능력치가 더 높은 포켓몬을 상대로 전투를 진행하여 전설의 포켓몬을 잡는 것으로 마무리된다.
3.
4.

## 전투 기획

1. 플레이어에게는 세가지 선택지가 주어진다.
   (챔질, , 방어, 도망 등…)
   1. 저킹 - 100% 확률로 공격 성공, 몬스터에게 피격
   2. 연속저킹 - 75%확률로 70%공격력으로 1~4번 공격 성공, 몬스터에게 피격
   3. 방어 - 일정확률로 방어 성공, 몬스터에게 60%의 공격력으로 반격
   4. 도망 - 일정 확률로 해당 스테이지 클리어
2. 플레이어의 공격력은 최소공격력과 최대공격력이 존재하며, 최소공격력은 정수이고 최대공격력은 플레이어가 가지고 있는 최대 공격력 배율에 따라 달라진다.
3. 스테이지 클리어 시, 아래의 능력치가 정해진 수치내에서 랜덤으로 증가한다. 증가하는 능력치는 아래와 같다.
   - 체력 20~50
   - 공격력 5~20
   - 장비 내구도 100으로 회복
   - 장비 강도 3~10
4. 스테이지 클리어 시, 체력이 일정수치 회복된다.
5. 기본 전투형태는 턴제 형식으로 진행된다.
6. 스테이지가 진행될 수록 몬스터의 체력과 공격력도 강해진다
7. 스테이지 진행 전 랜덤한 AWSD 키입력을 진행하고 3초내 올바른 키를 입력한 경우 공격력이 1.2배 증가하는 버프를 받게된다.
