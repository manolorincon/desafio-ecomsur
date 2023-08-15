export const getTextBetweenStrings = (
  input: string,
  startString: string,
  endString: string
): string[] => {
  const regexPattern = new RegExp(`${startString}(.*?)(?=${endString})`, 'g');
  const matches = input.match(regexPattern) || [];
  console.log(matches)
  return matches.map((match) => match.substring(startString.length));
}
