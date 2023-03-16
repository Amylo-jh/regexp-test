let str = `
010-1234-5678
thesecon@gmail.com.
https://www.omdbapi.com/?apikey=1451733a&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
http://localhost:1234
동해물과백두산ㅇ_마르고닳 도롪 ㅇㅇㅇ ㅏㅏㅏ
`

console.log(
    str.match(/(?<=@).{1,}/g)
)