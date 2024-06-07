const BASE_EXP = 2; // 10 pts for each correct answer

export function calculateExperiencePoints(
  numberOfCorrectQuestons: number,
  userLv: number,
) {
  let modifier: number = 1;

  switch (!!userLv) {
    case userLv >= 1 && userLv < 4:
      modifier = 1;
      break;
    case userLv >= 4 && userLv < 8:
      modifier = 0.5;
      break;
    case userLv >= 8 && userLv < 12:
      modifier = 0.3;
      break;
    case userLv >= 12:
      modifier = 0.1;
      break;
    default:
      modifier = 0;
      break;
  }

  return numberOfCorrectQuestons * BASE_EXP * modifier;
}
