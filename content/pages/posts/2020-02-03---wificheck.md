---
title: 접속했었던 WiFi 비밀번호 알아내기
date: "2020-01-31T23:45:32.169Z"
template: "post"
draft: false
slug: "wifi password 비밀번호"
category: "wifi password 비밀번호"
tags:
  - "wifi"
  - "cmd"
  - "password"
description: "와이파이 비밀번호 알아내기 꿀팁"
socialImage: ""
---

## Github CRLF 문제 해결 방법

### 1. 명령프롬프트(cmd) 실행

### 2. 접속했었던 WIFI 리스트 확인

```
netsh wlan show profiles
```

### 3. 비밀번호 알아내기

```
netsh wlan show profiles name="와이파이 이름" key=clear
```

### 4. 입력후 보안 설정란에 키 콘텐츠 확인하면 끝!!
