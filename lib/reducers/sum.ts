export function sum(source: Iterable<number>): number {
  let [result, hasElements] = [0, false];

  for (const element of source) {
    [result, hasElements] = [result + element, true];
  }

  return hasElements ? result : undefined;
}
