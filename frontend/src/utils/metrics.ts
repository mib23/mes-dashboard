export function calcRate(actual: number, target: number) {
  if (target <= 0) {
    return 0;
  }

  return (actual / target) * 100;
}

export function calcAverage(values: number[]) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function calcOee(availability: number, performance: number, quality: number) {
  return (availability * performance * quality) / 10000;
}
