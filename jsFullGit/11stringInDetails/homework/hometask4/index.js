// input: string, substring;
// output: number;
// 1. вник в суть задания, выявил инпут и аутпут
// 2. если просто, надо вывести сколько раз в string мы найдем substring

const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  return text.split(str).length - 1;
};
const text = 'sasasasfasasasa';
const str = 'as';
console.log(countOccurrences(text, str));
