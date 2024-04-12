export function currentYear(): number {
  return new Date().getFullYear();
}

export function getMyAge(): number {
  const birthDate: Date = new Date(2004, 9, 2);
  const dateDiff: number = Date.now() - birthDate.getTime();
  const ageDiff: Date = new Date(dateDiff);
  return Math.abs(ageDiff.getUTCFullYear() - 1970);
}

export function getMyArticle(): string {
  const age: number = getMyAge();
  return [8, 11, 18].includes(age) ? "An" : "A";
}
