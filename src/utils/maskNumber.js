export default function maskNumber(number) {

  const firstEightAsterisks = "********";
  const lastFour = number.slice(8);

  return firstEightAsterisks + lastFour;
}