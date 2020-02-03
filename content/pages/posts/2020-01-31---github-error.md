---
title: Github CRLF 오류 해결 방법
date: "2020-01-31T23:41:32.169Z"
template: "post"
draft: false
slug: "GitHub error"
category: "GitHub error"
tags:
  - "Github"
  - "CRLF"
description: "CRLF 문제 해결 방법"
socialImage: ""
---

## Github CRLF 문제 해결 방법

- 운영체제 별로 개행문자 다르게 인식
- Windows 에서는 line ending으로 CR(Carriage-Return, \r)및 LF(Line Feed, \n) 사용
- Unix or Mac OS 는 LF만 사용

1. git global 설정

- Windows
  git config --global core.autocrlf true
- Unix or Mac OS
  git config --global core.autocrlf input

2. gitattributes 파일 이용

- git root폴더(.git폴더 있는 곳)에 .gitattributes파일 생성
- 아래 코드 입력 후 저장

```
# Auto detect text files and perform LF normalization
*        text=auto

*.cs     text diff=csharp
*.java   text diff=java
*.html   text diff=html
*.css    text
*.js     text
*.sql    text

*.csproj text merge=union
*.sln    text merge=union eol=crlf

*.docx   diff=astextplain
*.DOCX   diff=astextplain

# absolute paths are ok, as are globs
/**/postinst* text eol-lf

# paths that don't start with / are treated relative to the .gitattributes folder
relative/path/*.txt text eol-lf
```

#### 사진 자료 및 사이트 출처

- https://www.lesstif.com/pages/viewpage.action?pageId=20776404
- https://qvil.github.io/git/git-os-line-endings/

```

```
