export function currentYear(): number {
  return new Date().getFullYear();
}

export function getMyAge(): number {
  const birthDate: Date = new Date(2004, 10, 1);
  const today: Date = new Date();
  let age: number = today.getFullYear() - birthDate.getFullYear();
  return age;
}
