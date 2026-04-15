export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function randomInt(min: number, max: number) {
  return Math.floor(randomBetween(min, max + 1));
}

export function chance(probability: number) {
  return Math.random() < probability;
}

export function pickOne<T>(items: T[]): T {
  return items[randomInt(0, items.length - 1)];
}
