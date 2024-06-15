import "server-only";

import type { UserLevel } from "@/types/dbTypes";

export function calculateLevelUp(
  userLevel: UserLevel,
  gainedExp: number,
): UserLevel {
  const { level, currentExp, neededExp } = userLevel;

  // Leveling up user
  let newLevel = level; // 1
  let newCurrentExp = currentExp + gainedExp;
  let newNeededExp = neededExp; // Initialize with current neededExp

  // check if user level up
  if (newCurrentExp >= neededExp) {
    newLevel = level + 1; // User levels up
    newNeededExp = 100 * newLevel; // New neededExp formula
  }

  return {
    level: newLevel,
    neededExp: newNeededExp,
    currentExp: newCurrentExp,
  };
}
