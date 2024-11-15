import chalk from 'chalk';
import readlineSync from 'readline-sync';
// 전역 스코프 모음
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
const mon_img = [
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠿⠛⠿⠿⠿⢿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⢿⢟⡁⠀⠀⠀⠀⠀⢏⢙⣷⡌⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠗⢱⣿⣇⣠⠀⠀⠀⢀⡀⠙⢿⠟⠀⠇⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠂⠀⠘⣿⠿⠿⠀⠀⠁⠔⠀⠀⠆⣀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠇⠀⠀⠂⠀⠂⢀⠄⠈⠀⢀⣂⣀⣀⡀⠀⠀⠢⡀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡟⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⣀⣀⣈⠉⠓⢦⠀⠐⡄⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠀⠀⠀⠀⠐⠀⠀⡔⠀⣰⠊⣩⠥⣍⠙⣆⠈⣧⠀⢡⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣟⡀⠀⠀⠀⠂⠀⠀⡇⠀⡇⢸⠁⢀⣸⠇⣸⠀⣼⠀⠸⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⠀⠀⠀⠘⡀⠀⣧⠀⢣⣈⠳⠬⠥⠖⢁⡴⠋⢠⢃⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣤⠀⠀⠀⠈⢄⠈⠳⣤⣙⠳⠶⠶⠖⠋⢀⠔⣡⠞⠉⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣷⣤⡀⠀⠀⠉⠢⠄⠈⠀⠀⠤⠐⣈⣰⣾⣷⣄⠀⠀⠀⠈⠿⠿⠛⠛⠻⠿⠛⠻⠿⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⣶⡤⠤⠤⢤⣤⣶⣮⣡⣄⡙⠿⡛⡉⠣⠀⡀⠠⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠈⠹⣿⣿⣿⣿⣷⣍⠐⠡⠅⡆⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠈⢿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠈⠉⠓⠘⠧⠄⠒⠒⠒⠲⠖⠂⠀⠀⠀⣼
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣴⣦⣀⣠⣦⣤⣶⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠙⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠈⠟⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠉⠀⠀⢂⠒⠠⢄⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⡤⢄⠊⠈⠘⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠿⡟⠀⠀⠀⡐⠀⠀⠀⠑⡀⠀⠀⢁⠀⠡⠄⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣤⡌⠠⠀⠀⠇⠀⠀⠀⠀⠇⠀⠀⢻⠤⢄⠀⠀⣀⣀⡘⠙⣿⣿⣿⣿⣿⡿⢟⡫⠟⠒⣰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠁⠆⠀⢀⠀⠤⠀⠀⡠⠀⠁⠀⠀⠀⠀⠀⠀⡀⠒⢒⠼⣿⣿⣿⠝⠃⠁⠀⠀⠀⢻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠁⡀⠀⠀⠀⠀⠀⢈⡄⠀⠀⠀⠈⠁⠀⡀⠈⠀⢰⡌⠻⠏⡟⠁⠀⠀⠀⠐⠒⣺⣿⣿⣿⣿⣿
⣿⣿⣿⣷⢆⡤⣅⠀⠀⠨⠐⡀⠈⠣⠀⠀⠀⠀⠀⠈⠀⠀⠀⣮⠀⠀⡌⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡿⣾⣿⣮⡓⢠⠀⡄⢳⣿⣶⣮⣾⣢⡀⠀⠇⢦⡄⢸⠃⣠⣴⠡⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡜⣿⣿⣿⣦⣍⡇⢐⣽⣿⣿⣿⣟⣇⠡⢼⣎⣔⣷⣾⣿⣽⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⠛⠾⠿⠷⠿⠿⠿⣾⣿⣿⣿⣿⣿⣷⡥⠀⠀⠂⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡻⣿⣿⣿⡟⡀⠂⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣯⠅⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⢹⣿⣿⣿⣷⠀⣼⣷⣄⠀⣰⣦⣤⣈⣹⣿⣿⣿⣿⣿⣧⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣷⡌⢻⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣷⣤⣍⡹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠉⢻⣿⣿⣿⠿⠛⣿⣿⣿⣿⣿
⣿⣿⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠻⠿⠙⠛⠉⠀⠤⠄⢠⠀⣀⡴⠂⠀⡀⠁⠀⠀⣼⣿⣿⣿⣿
⣿⣿⡀⠀⠈⠻⢿⣿⣿⣿⣿⠿⠛⠉⠁⢀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠙⡲⠊⠀⠀⠀⣼⣿⣿⣿⣿⣿
⣿⣿⣿⣆⠀⠀⠀⠈⢛⠟⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠈⠀⠀⠀⢀⡼⢟⢩⣿⣿⣿⣿
⣿⣿⣿⣿⣧⠀⠀⡀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⢀⡂⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠁⠉⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠈⠉⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⢹⣿⣿⣿⣿⣿⣿
⣿⣿⠏⠠⠁⠀⠀⠀⠀⣀⣢⣤⣤⣤⣤⣤⣤⣀⡀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠃⠀⢸⣿⣿⣿⣿⣿⣿
⣿⡏⠀⠀⠀⢀⣴⡖⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠄⡀⠀⠀⠀⠀⣠⣾⣿⠀⠀⢸⢿⣿⣿⣿⣿⣿
⣿⠀⠀⢀⣽⣿⣿⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠠⣤⣾⣿⣿⣿⠀⠀⠆⠀⠙⢿⣿⣿⣿
⣿⣦⣰⣿⣿⣿⣿⡆⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣧⡄⣬⢀⣀⠀⠀⠈⣻⣿
⣿⣿⣿⣿⣿⡿⣱⣿⣦⣀⣀⣿⣿⣿⠿⡿⠿⢿⣿⣿⣷⣤⣄⣤⣴⣿⣿⣿⣿⣿⣿⢭⣿⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⡿⣵⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⡸⠿⣿⣯⡿⡿⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢉⣛⣭⣷⣾⣿⣴⣤⣌⣉⣉⣴⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣠⣀⡀⠀⠀⢀⣠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠛⢿⡿⡿⠛⠛⣻⣿⡟⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡇⠀⠀⠙⠂⠀⠀⠑⠏⢨⢶⡟⠿⣿⣿⠟⢛⣽⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠈⠑⠀⠀⠀⠀⠀⡌⠀⢫⡈⠡⠀⠉⠀⣠⣺⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠣⠀⠀⢃⠀⢀⣀⠨⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⡿⠀⠀⢀⠀⠀⠀⢀⡀⢠⣾⣯⡄⣁⡀⠩⠐⠒⠢⢀⡈⠆⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⣧⣄⡀⡀⠤⣁⡀⡠⠐⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⡧⣴⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡁⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣤⣤⣴⣶⡀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⣛⠭⠉⠉⠹⠿⠿⠟⡳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣷⣦⣀⢻⣿⣿⣿⣿⣿
⣿⣿⣿⡯⡠⠊⢀⠠⢤⠀⠀⠀⠀⣠⣂⣤⣶⣷⣤⣀⠀⡀⠀⠀⠀⡀⢀⣠⣴⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⢱⠁⠠⡗⠙⠁⣀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⢸⠀⠀⠀⢀⠊⡘⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣃⢢⠀⠀⠢⠐⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣗⢿⡰⠀⠰⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠫⠉⠩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⠛⢻⣯⣼⣷⣦⣀⣀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⡿⠫⠃⠁⠈⠀⠀⠀⠀⠀⠉⠉⠛⠇⠟⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠯⠞⠁⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠂⠀⠀⠁⠻⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢯⠃⠀⠀⠀⠀⠀⢀⢂⠀⠀⠀⠠⠀⠀⠁⠀⠀⠀⡀⠄⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣄⠀⠀⠀⢄⠀⠐⢔⠁⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣷⣤⠤⢑⢲⡽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠋⠀⠀⢭⢾⢣⠠⠀⢢⣾⣿⣿⣿⣿⠛⠉⠉⠉⠙⢿⣿⣿⣿⣧⣿⣎⣛⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠎⡁⠚⠊⣦⣴⣷⣾⣿⣿⣿⣿⡿⣿⢿⢶⣦⣀⠀⠀⠉⠻⠋⢿⣿⡿⢫⣛⡿⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⢙⣠⡤⠾⢿⠻⡟⠛⠛⠻⡿⣿⣿⡿⢸⣷⣾⣾⣭⣵⣶⣶⣤⣜⢿⣾⣿⣿⣷⣷⣬⢻⣿⣿⣿
⣿⣿⣿⣿⣷⣬⣭⣶⣶⣾⣤⣾⣿⣿⣿⣷⣬⣟⣳⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⡿⠿⢟⣻⣟⡻⠧⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⢿⡟⠛⠛⠛⢿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡿⠛⣡⣼⣶⣄⣀⣀⣴⣶⣶⣦⣬⣙⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⢏⠄⠒⠈⠉⠉⠙⠛⢿⢿⣿⣿⣿⣿⣿⣿⣦⣍⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣮⣟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠀⠀⠀⠈⡀⢀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⠷⣑⣯⣽⣦⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡆⠂⠀⡀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣾⣿⣿⣿⣿⣟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⡈⠀⠐⠀⠁⠀⠑⠀⠀⠀⢀⠀⠀⠀⠀⢀⠀⠀⠙⠛⠿⣿⣿⣿⣿⣯⣿⣶⣶⣶⣾⣿⣯⣉⠿⠛⠿⣿
⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⠉⠛⠛⠻⢿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣶⣤⣄⠠⠀⠂⠀⠀⠐⠀⠀⠀⠈⠐⠠⠀⠀⠀⡨⠁⠀⠀⠀⠀⠀⠀⠀⠘⠛⢻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣷⣷⣤⣀⡀⠄⠀⢁⢢⡄⣄⠄⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⢭⣶⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣧⣶⣤⣤⣀⣀⠀⢀⠀⠀⠀⣀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠉⠙⢿⣿⠟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠍⠱⠔⠈⠉⠉⡍⠀⡀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠁⠿⡀⠂⣠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⡐⡾⡟⠀⠀⣈⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣠⠤⠤⠤⠀⠊⠀⠀⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⠛⠈⠀⢢⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠐⣀⠉⡗⠀⢨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠀⢀⠀⡈⠀⠈⠀⠀⠀⠀⠘⠛⠻⠛⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠐⠕⠀⠐⠀⠀⠁⠀⠀⠀⠀⠀⠠⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠀⡈⡀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠁⠐⡟⢻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢡⠀⠀⠈⠀⠀⠀⠀⠰⠀⠈⠀⠀⠀⠀⠀⠠⠤⡘⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⣿⡟⠛⣇⡘⠄⠤⠀⡈⠂⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠠⠁⡿⠛⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠑⠌⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠠⡱⠀⠀⠀⠈⠛⡿⣿⣿
⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⠁⠀⠈⣐⠀⠐⠤⠉⠀⠙⢛⡉⡀⠒⠤⠚⢵⠃⠐⠒⠄⣀⣀⣤⣽⣿
⣿⡿⠁⠀⣀⣀⣀⣀⣀⣠⣄⣦⣾⣿⡷⠂⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠉⠚⠀⠓⣠⡀⠀⠀⠀⠈⠙⢿⣿⣿
⣿⣧⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠃⢀⣀⡀⠀⠀⢠⣄⣾⣿⣶⣦⣄⣤⣀⣀⣙⣿⣿⣶⣶⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⡻⠃⠀⠁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣝⣻⣿⣿⣿⡿⠃⣀⠐⠐⠻⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣌⢹⠛⢋⣮⠀⡀⡀⠍⡰⡀⠁⠀⠀⠀⠀⠣⠟⠋⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣟⡿⡆⡒⡸⢀⠡⠕⠂⡅⢁⣤⠀⠀⡀⠀⡠⠤⠀⠘⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⠁⠃⢒⠽⠇⠄⠀⢀⡤⠞⠏⠃⡐⠚⠑⠀⡠⣶⣾⣿⣿⣿⣿⣿⣿⡿⠋⣻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡦⢢⣴⢠⢀⠀⠀⠙⠂⠀⠀⠀⢈⠠⠐⠸⠀⢼⣿⣿⣿⣿⣿⢹⠟⠁⠀⣠⣼⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣷⣺⣿⠟⢃⠌⣰⣿⣦⣄⠀⡆⡀⠀⠀⢀⡠⢺⣿⣿⣿⣿⡏⠀⠀⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⣀⣿⣿⡿⢻⣷⠀⠀⠀⠀⠈⠀⢸⣿⡿⠛⠉⠱⢾⣷⡶⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡻⠇⣤⢈⣾⣿⣿⡇⢸⣧⠀⠀⠀⠀⡀⠀⣾⣿⠃⣀⡠⠒⠈⢦⠨⡻⣿⡿⠟⢻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣟⣿⣿⣶⣾⣿⣿⣿⣟⣿⠇⠀⠈⠉⠉⠁⢠⡟⠀⠀⣈⠢⡴⢊⡎⠛⢲⣿⠁⢻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢹⡟⠀⠀⠀⠀⠀⡃⢎⠉⠲⡎⢘⡃⣅⣾⣷⣏⠉⣾⣤⣽⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡅⠀⠀⠀⠀⢁⠡⠸⠂⠴⠈⡝⢠⣿⣿⣿⣇⠀⢽⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠈⢀⣖⢢⠐⢨⣴⣾⣿⣿⣿⣿⠈⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣀⡀⠔⠈⠀⣀⣤⣽⣿⣿⣿⣿⠓⠎⢩⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠠⠠⠁⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣐⣀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣼⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠛⠻⠉⠉⢻⡉⠉⣿⣿⣿⣿⣿⣿⣿⣟⣟⣿⣿⠟⣉⡼⠓⢉⣡⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣟⠁⢁⢄⠀⢀⢈⠉⠀⠄⠽⣿⣿⣿⠿⠻⠟⠉⠹⠿⠟⠩⣽⡲⠿⠛⠋⠢⣽⣿⠿⠛⠋⣹⣻⡿⠿⣿⣿⣿
⣿⣿⣷⣤⣀⡠⠰⡠⣴⠘⠅⠋⠁⠀⠀⠀⠀⠀⢀⠤⢑⠋⣼⠅⡀⠀⠰⠟⠛⣠⣤⠶⠋⠁⠁⣀⣬⣍⣛⣿
⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢋⡀⠀⠨⠀⣰⣿⣷⣧⣦⣄⣀⣀⣤⣶⣶⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⢢⠀⣤⡛⢻⡿⠛⠛⠿⠿⢿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠁⠠⠠⢲⡰⠈⠀⠀⠀⠀⣤⣤⡀⠀⠀⡴⠂⠁⠈⠀⠁⢈⡀⢚⠛⠄⠠⣼⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣷⣶⣤⣤⣤⣠⣀⠀⣲⣾⣿⣿⣿⣦⣀⠈⠋⠀⡤⠁⠃⢔⢁⡈⢀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣌⠇⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⣀⣴⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠹⠑⠄⠀⠸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡿⠟⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠃⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢕⠞⠁⠠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠃⠀⠀⠀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣇⣶⣶⠖⠀⠀⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠏⠀⠀⠄⠠⡀⠀⠀⠀⠀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣠⣦⣄⠀⠀⠀⠉⠛⢿⡟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⣼⣿⣿⣿⣿
⣿⣿⠿⢿⣿⡿⠟⠻⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣄⣀⣀⣄⣼⣿⣿⣿⣿⣿
⣿⡏⠀⠈⢻⣆⠀⠀⠸⣿⣿⣿⣿⣿⡿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡟⠦⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡤⠀⠀⠀⠁⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣆⠀⠁⠀⠀⠀⠀⠀⢀⣶⣾⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⣴⣶⣤⣀⣴⣴⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠑⠀⠤⡠⠄⠂⠠⡄⠀⠙⡿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣧⣶⣶⠀⠸⣷⣶⣤⣠⠀⠠⠀⠈⠉⠉⠛⣫⣬⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠄⠂⠉⣻⣿⣿⣤⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
];

let logs = [];
//30프로 에서 100프로 사이의 공격
let ph = parseInt(Math.random() * 10);
let ps = parseInt(Math.random() * 3) + 3;
let pd = parseInt(Math.random() * 2) + 2;
// 키워드 성공
let plus_dmg = 0;
//Class 생산자
class Player {
  constructor(hp, str, def, equi) {
    this.hp = hp;
    this.str = str;
    this.def = def;
    this.equi = equi;
  }

  // 플레이어의 공격
  attack(player, monster) {
    let dmg = Math.round(player.str * (1 - Math.random() * 0.7));
    logs.push(chalk.blue(`${dmg}의 데미지를 입혔습니다.`));
    monster.hp -= dmg;
  }
  // 연속 챔질 구현
  maAtk(player, monster) {
    // 플레이어의 연속 행동
    let numAtk = Math.round(Math.random() * 10);
    let numAtkDmg = Math.round(0.7 * player.str * numAtk);
    if (numAtk !== 0) {
      monster.hp -= numAtkDmg;
      logs.push(chalk.blue(`${numAtk}회(총 ${numAtkDmg} 데미지) 챔질 성공했습니다.`));
    } else {
      logs.push('공격에 실패했습니다.');
    }
  }

  // 뜰채 사용 구현 코드
  endStg(stage, player, monster) {
    let proStg = Math.floor((10 * stage + 10) / monster.hp);
    if (proStg > 0) {
      if (Math.random() > 0.5) {
        monster.hp = 0;
      } else {
        player.equi -= 100 / player.def;
        logs.push('뜰채질에 실패했습니다.');
      }
    } else {
      logs.push('뜰채 사용에 실패했습니다.');
    }
  }

  // check(){
  //   if(player.def > monster.atk){

  //   }else{

  //   }
  // }
  // run(){}
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
    logs.push(chalk.red(`${monster.str}의 데미지를 입었습니다.`));
  }

  resist(monster, player, stage) {
    let equi_dmg = Math.round(Math.random() * 4);
    let mon_dmg = Math.round(monster.hp / 20);
    if (monster.hp > player.hp) {
      player.equi -= equi_dmg;
      logs.push(chalk.red(`물고기의 몸부림으로 ${equi_dmg}의 낚시대에 데미지를 입었습니다.`));
    } else {
      player.equi -= equi_dmg;
      monster.hp -= mon_dmg;
      logs.push(
        chalk.red(
          `물고기의 몸부림으로 스스로에게 ${mon_dmg} 데미지, ${equi_dmg}의 낚시대에 데미지를 입었습니다.`,
        ),
      );
    }
  }

  // 새로운 동작 만들기
}

// Fucntion
// function stop(){
//   break;
// }

function displayInputarrow(stage, player) {
  const ranArrow = [87, 65, 83, 68];
  let arrows = [];

  console.clear();

  for (let i = 0; i < stage + 1; i++) {
    var randomValues = ranArrow[Math.floor(Math.random() * ranArrow.length)];
    arrows.push(String.fromCharCode(randomValues));
  }
  console.log(
    chalk.red(`W,A,S,D 키를 순서대로 입력해주세요 (성공시 공격력 1.2배 / 실패시 공격력 0.8배)`),
  );
  const a = readlineSync.question('아무키나 입력하면 랜덤 키 입력이 진행됩니다.');
  const begin = new Date().getSeconds();
  const ket_a = readlineSync.question(`${arrows} 키를 순서대로 입력해주세요!`);
  let end = new Date().getSeconds();
  if (end < begin) {
    end += 60;
  }
  let time_end = end - begin;
  let ket_aU = ket_a.toUpperCase();
  let splitStr = [...ket_aU];

  if (time_end <= 2 + 0.4 * stage && JSON.stringify(arrows) === JSON.stringify(splitStr)) {
    const ket_b = readlineSync.question(`입력시간 : ${time_end}초 / 성공!`);
    plus_dmg = 1.2;
    player.str *= plus_dmg;
    player.str = Math.round(player.str);
  } else {
    const ket_b = readlineSync.question(`입력시간 : ${time_end}초 / 실패!`);
    plus_dmg = 0.8;
    player.str *= plus_dmg;
    player.str = Math.round(player.str);
  }

  // const key = readlineSync.prompt();
  // setTimeout(stop,3000);
  // if (ket_a.toUpperCase === arrows.values) {
  //   logs.push('정답!');
  // }
  // if(arrow == )
}
function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(`| 플레이어 정보 `) +
      ` 현재체력 : ${player.hp} 공격력 : ${player.str} 장비 강도 : ${player.def} 장비 내구도 : ${player.equi}` +
      chalk.redBright(`
           | 물고기 정보 | ${mon_name[stage - 1]}`) +
      ` 체력 : ${monster.hp} 공격력 : ${monster.str} 방어력 ${monster.def}`,
  );
  console.log(chalk.magentaBright(`=====================\n`));
  console.log(
    chalk.blue(`${mon_img[stage - 1]}
`),
  );
}

function displayNext(stage, player) {
  player.hp += ph;
  player.str += ps;
  player.def += pd;
  player.equi = 100;
  console.log(chalk.cyan(`=============================================================`));
  console.log(chalk.magentaBright(`\n                   === Game announce ===`));
  console.log(chalk.cyanBright(`             | Stage: ${stage}를 클리어하셨습니다!! | \n`));
  console.log(chalk.cyan(`=============================================================\n`));
  console.log(`                   hp가 ${ph}만큼 증가했습니다.`);

  console.log(`                 공격력이 ${ps}만큼 증가했습니다.`);

  console.log(`                 정신력이 ${pd}만큼 증가했습니다.`);
  const next = readlineSync.question(chalk.red('\n                  아무키나 입력해 주세요!'));
}

const battle = async (stage, player, monster) => {
  while (player.hp > 0 && monster.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);
    logs.forEach((log) => console.log(log));

    console.log(chalk.green(`\n1. 챔질하기 \n2. 연속 챔질하기 \n3. 뜰채 사용`));
    const choice = readlineSync.question('당신의 선택은? ');

    switch (Number(choice)) {
      case 1:
        logs.splice(0, logs.length);
        logs.push(chalk.cyan(`=============================================================`));
        logs.push(chalk.green(`${choice}를(을) 선택하셨습니다.`));
        player.attack(player, monster);
        if (Math.random() > 0.3) {
          if (monster.hp > 0) {
            monster.attack(monster, player);
          } else {
            break;
          }
        } else {
          if (monster.hp > 0) {
            monster.resist(monster, player);
          } else {
            break;
          }
        }
        break;
      case 2:
        logs.splice(0, logs.length);
        logs.push(chalk.cyan(`=============================================================`));
        logs.push(chalk.green(`${choice}를(을) 선택하셨습니다.`));
        player.maAtk(player, monster);
        monster.attack(monster, player);
        break;
      case 3:
        logs.splice(0, logs.length);
        logs.push(chalk.cyan(`=============================================================`));
        logs.push(chalk.green(`${choice}를(을) 선택하셨습니다.`));
        player.endStg(stage, player, monster);
        monster.attack(monster, player);
        break;
      case 4:
        break;
    }

    // 플레이어의 선택에 따라 다음 행동 처리
    // logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }
  // 스테이지 증가에 따른 스탯 증가
  console.clear();
};

export async function startGame() {
  console.clear();
  const player = new Player(100, 10, 10, 100);
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(
      stage * 30,
      Math.floor(stage * 0.8) + 1,
      Math.floor(stage * 0.8) + 1,
    );
    displayInputarrow(stage, player);
    await battle(stage, player, monster);
    // 스테이지 클리어 및 게임 종료 조건
    if (player.hp < 0) {
      logs.splice(0, logs.length);
      break;
    } else {
      logs.splice(0, logs.length);
      displayNext(stage, player);
      stage++;
    }
    // await stopstage();
  }
  //승리시
  if (stage >= 10) {
    console.clear();
    console.log(`

──────────────────────────────────────────────────
──────────────────────────────────────────────────
───────────────────────░──────────────░░──────────
───░───────░░░─────░░░▒▒───░░░▒░───░░▒▒▒░──────░░░
─░░▒░────░░▒▒▒░────░░▒▒▒───░▒▒▒░───▒▒▒▒▒░────░░▒▒▒
░▒▒░░───░░▒▒▒▒░────░▒▒▒░───░▒▒▒░───░▒▒▒▒▒░───░░▒▒▒
░▒▒▒▒───░▒▒▒▒▒░────░▒▒▒░───░▒▒▒░───░▒▒▒▒▒▒───░▒▒▒▒
░░▒▒▒───░▒▒▒▒▒▒░──░░▒▒▒────░▒▒▒░───▒▒▒▒▒▒▒░──░▒▒▒▒
░░▒▒▒──░▒▒▒▒▒▒▒░──░▒▒▒▒────░▒▒▒░───▒▒▒▒▒▒▒░──░▒▒▒▒
░░▒▒▒░─░▒▒▒▒▒▒▒░░─░░▒▒░────▒▒▒░░───▒▒▒▒▒▒▒▒░─░▒▒▒░
░░▒▒▒░─░▒▒▒▒▒▒▒▒░─▒▒▒▒░───░▒▒▒░───░▒▒▒▒▒▒▒▒▒░▒▒▒▒░
─░▒▒▒░░▒▒▒▒▒▒▒▒▒▒─░▒▒▒░───░░▒▒░───░░▒▒▒░▒▒▒▒░▒▒▒▒░
─░▒▒▒░░▒▒▒▒░░▒▒▒▒▒░▒▒▒░───░░▒▒░───░░▒▒▒─░▒▒▒▒▒▒▒▒░
─▒▒▒▒░▒▒▒▒░░░▒▒▒▒▒░▒▒▒────░░▒▒░───░░▒▒▒──▒▒▒▒▒▒▒▒░
─▒░▒▒▒▒▒▒▒░──░▒▒▒▒▒▒▒▒────▒░▒▒░───░░▒▒▒──░▒▒▒▒▒▒▒░
─▒░▒▒▒▒▒▒▒───░▒▒▒▒▒▒▒░────▒░▒▒░───░░▒▒▒───░▒▒▒▒▒▒░
─░░▒▒▒▒▒▒░────░▒▒▒▒▒▒░────▒░▒▒░───░░▒▒▒───░▒▒▒▒▒▒░
─░░▒▒▒▒▒▒░─────░▒▒▒▒▒░────▒▒▒▒░───░░▒▒▒────▒▒▒▒▒▒░
─░░▒▒▒▒▒░───────░▒▒▒▒░────▒▒▒▒░───░░▒▒▒────░▒▒▒▒▒░
─░▒▒▒▒░░─────────░▒▒▒▒────▒░▒▒░───░░▒▒▒────░░▒▒▒░░
──▒▒▒░░──────────░▒▒▒░────░░▒▒░───░░▒▒░─────░░░░░─
──░░░░───────────░░░░░─────░░░─────░░░───────░────
─────────────────░────────────────────────────────
──────────────────────────────────────────────────
──────────────────────────────────────────────────
`);
  } else {
    //패배시
    console.log(`

  ▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▒░░░▒▓▓▒▒▒▒▒░▒▒░░░░▒▒▒▒▒▒░──░░▓▒░░░░░░▒▒░▓▓▓▓▓▓
  ▓▓▓▒░░▒▒▒▓▓▒▒▒▒▒▒░░░░─░▒▒▒░──────░▓░░░░▒▒▒▒░▒▓▓▓▓▓
  ▓▓▓▒░▒▒▒▒▓▓▒▒▒▒░░░░░───░▒▒░──────░▒░░░▒▒▒▒▒▒▒▓▓▓▓▓
  ▓▓▓░▒▒▒░▒▓▓▒▒▒░░▒░░░░───░▒───░░░░░▒░░▒▒░░░░░▒▓▓▓▓▓
  ▓▓▓░▒▒▒░░▓▓▒▒░░▒░░░░░░──░░░──░▒░░░▒░▒▒▒░░░░░░▓▓▓▓▓
  ▓▓▓▒▒▒▒▒░▓▓▒░░░▒▒░▓▓▓░──░▒▒───░░░▒█░▒▒▒▒▒▒░▒█▓▓▓▓▓
  ▓▓▓▓▒▒▒▓▒▓▓▓░░░▒▒▓▓▓▒░──░▓▓▒░░░░░░▓░▒▒▒▒▒▒▒▒▓▓▓▓▓▓
  ▓▓▓▓▒▒▒▓▓▓▓▓░░░░▓▓▓▒▒░──░▓▓▓▓▓░░░▒▓░▒▒▒▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▒▒▒▒▒▒▒▒░░──░▓▓▒░───▓▓▒░▒▓▓░▒▒▒░▒▒▒▒▒▒▒▓▓▓▓▓▓▓
  ▓▓▓▒▒▒▒▒░░░▒▒░─────────░▓▒░░░░░▒▒▒▓░▒▒▒▒▒▒░▒▓▓▓▓▓▓
  ▓▓▓▒▒▒▒░░░░▒▒▒░───────░▒▒▒░░░░▒▒▒▒▒░▒▒▒▒▒░░▒▒▓▓▓▓▓
  ▓▓▓▒▒░░░░░░░▒█▒░░░─░░▒▒▒▒▓▒░░▒▒▒▒▒▒░▒▒▒░░░░▒▒▓▓▓▓▓
  ▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▒▒▒▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒░
  `);
  }
}
