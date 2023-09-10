export function ageCalculation(data) {
  const today = new Date();
  const born_at = new Date(data);

  const timeInMilSec = today - born_at;
  const ages = timeInMilSec * 3.2 * 10 ** -11;

  return Math.floor(ages);
}
