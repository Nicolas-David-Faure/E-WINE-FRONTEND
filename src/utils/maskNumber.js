export default function maskNumber(number) {

  const firstEightAsterisks = "************";
  const lastFour = number.slice(11);

  return firstEightAsterisks + lastFour;
}