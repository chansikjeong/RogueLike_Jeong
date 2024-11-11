import chalk from 'chalk';
import readlineSync from 'readline-sync';

const mon_name = [
  '개구리',
  '송사리',
  '금붕어',
  '배스',
  '가물치',
  '고등어',
  '참치',
  '삼치',
  '민어',
  '청새치',
];

class Player {
  constructor(hp, str, def) {
    this.hp = hp;
    this.str = str;
    this.def = def;
  }

  attack(player, monster) {
    // 플레이어의 공격
    monster.hp -= player.str;
  }
}

class Monster {
  constructor(hp, str, def) {
    this.hp = hp;
    this.str = str;
    this.def = def;
  }

  attack(monster, player) {
    // 몬스터의 공격
    player.hp -= monster.str;
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(`| 플레이어 정보 `) +
      ` 현재체력 : ${player.hp} 공격력 : ${player.str} 방어력 : ${player.def}` +
      chalk.redBright(`
           | 물고기 정보 | ${mon_name[stage - 1]}`) +
      ` 체력 : ${monster.hp} 공격력 : ${monster.str} 방어력 ${monster.def}`,
  );
  console.log(chalk.magentaBright(`=====================\n`));
  console.log(
    chalk.blueBright(`
　　／⌒ヽ
　／　　　＼
　/　　　　丶＼
( /　　　　 丶　)
/　　　　　丶”
f　　　　　　i
| ●　　●　 ｜
|　 ▽　　　｜
ヽ＿＿ 　 　ノ
丿ﾉﾉ丁丁￣l＼
く(_(_(＿L＿)ノ
`),
  );
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while (player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(chalk.green(`\n1. 챔질하기 \n2. 뜰채 사용`));
    const choice = readlineSync.question('당신의 선택은? ');

    switch (Number(choice)) {
      case 1:
        player.attack(player, monster);
        logs.push(chalk.green(`${choice}를(을) 선택하셨습니다.`));
        logs.push(chalk.blue(`${player.str}의 데미지를 입혔습니다.`));
        monster.attack(monster, player);
        logs.push(chalk.red(`${monster.str}의 데미지를 입었습니다.`));
        break;
      case 2:
        logs.push(chalk.green(`${choice}를(을) 선택하셨습니다.`));
        break;
    }

    // 플레이어의 선택에 따라 다음 행동 처리
    // logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }
};

export async function startGame() {
  console.clear();
  const player = new Player(100, 10, 10);
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(
      stage * 30,
      Math.floor(stage * 0.8) + 1,
      Math.floor(stage * 0.8) + 1,
    );
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건

    stage++;
  }
}
