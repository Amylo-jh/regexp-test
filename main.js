let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=1451733a&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
`

const regexp = /fox/gi
console.log(regexp.test(str))
str = str.replace(regexp, 'AAAA')
console.log(str)