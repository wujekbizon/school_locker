interface UserLevel {
  level: number;
  currentExp: number;
  neededExp: number;
}

export function calculateLevelUp(
  userLevel: UserLevel,
  recalculatedExp: number,
): UserLevel {
  const { level, currentExp, neededExp } = userLevel;

  // Leveling up user
  let newLevel = level;
  let newCurrentExp = currentExp + recalculatedExp;
  let newNeededExp = neededExp - newCurrentExp;
  // check if user level up
  if (newCurrentExp >= neededExp) {
    newLevel = level + 1; // user level up
    newNeededExp = neededExp * 2; // temporary multiplier , need to find a proper way of handling this
  }

  return {
    level: newLevel,
    neededExp: newNeededExp,
    currentExp: newCurrentExp,
  };
}
