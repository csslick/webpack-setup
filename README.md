# webpack-boilerplate
웹팩으로 개발하기 위한 기본 설정파일 및 예제  

``` 
  빌드 npx webpack --watch  
    또는 package.json > "scripts": { 'build': "webpack" }  
      -> npm run build
```

babel 추가 참고: https://babeljs.io/setup#installation  

## 웹팩 플러그인
1. build시 dist에 html(template) 생성
  https://webpack.kr/plugins/html-webpack-plugin/
2. 빌드경로 초기화  
  https://www.npmjs.com/package/clean-webpack-plugin