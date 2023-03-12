# 정규표현식 (RegExp)

정규식, Regular Expression

## 역할

- 문자 검색 (Search)
- 문자 대체 (Replace)
- 문자 추출 (Extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 옵션 g : 정규표현식이 검색하는 것에서 일치하는 모든 것
//옵션 i : 검색할때 대소문자를 가리지 않음
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=1451733a&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
`
```

## 메소드

| 메소드 | 문법 | 설명 |
|--|--|--|
| test | `정규식.text(문자열)` | 일치 여부(Boolean) 반환 |
| match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) | 
| replace | `문자열.replace(정규식 대체문자)` | 일치하는 문자를 대체 |
