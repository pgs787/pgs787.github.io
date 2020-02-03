---
title: Instagram 클론 (HTML+CSS+JavaScript)
date: "2020-01-31T23:41:32.169Z"
template: "post"
draft: false
slug: "Instagram html css javascript"
category: "Instagram html css JavaScript event객체 css"
tags:
  - "html"
  - "css"
  - "javascript"
  - "instagram"
  - "event객체"
  - "wecode"
description: "(1/31 - 2/3) Wecode study 4-6일차"
socialImage: ""
---

## JavaScript 추천 가이드

- [Airbnb 가이드 사이트](https://github.com/airbnb/javascript) ⭐추천⭐  
  **Airbnb는 프론트엔드 쪽에서 세계적으로 영향력이 크고 컨퍼런스도 자주 개최**
- [GitHub 가이드 사이트](https://google.github.io/styleguide/htmlcssguide.html)
- [프론트엔드 개발자 김종민 포트폴리오](https://docs.google.com/presentation/d/1a691zZsgQMZBftHI3RJpgy8CqYtTQi8ZSe3SMgU6Tac/edit#slide=id.g75ac57a38d_0_63)  
  **프론트엔드 분야에서 영향력이 큰 인물**  
  **자바스크립트 시각화 기술력이 상당함**

### 리액트의 function component vs class component 차이

- **<u>function component는 렌더 당시의 값을 기억하고 사용</u>** ❗❗

#### - function component

```
function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
```

#### - class component

```
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
```

- setTimeout을 이용하여 네트워크에 요청을 보내고 응답을 돌려받는 코드
- props.user가 Dan이라면 이코드는 ‘Followed Dan’ 이라는 메시지를 3초 호출
- arrow function을 쓰는 것과 함수 선언을 하는 것이 이 예시에서는 아무런 차이 없음
- arrow function 대신 function handleClick()을 써도 정확히 같은 방식으로 동작

## <u>차이점 설명</u> ❗❗❗❗

![1](https://overreacted.io/386a449110202d5140d67336a0ade5a0/bug.gif)

- ⭐ <u>**function 방식이 옳은 방식**</u>⭐
- 팔로우 한 뒤 다른 사람의 프로필로 이동했다면 리액트 <u>component는 내가 팔로우한 대상을 헛갈려서는 안 됨</u>
- <u>**class의 이러한 작동 방식은 버그**</u>

```
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };
```

- this.props.user를 가져와 읽는다
- this는 <u>언제나 변하지만 props는 리액트에서 불변</u>
- showMessage 콜백은 어떠한 렌더에도 묶여 있지 않아 setTimeout이 this.props를 불러오도록 하는것은 그 관계를 망침

### ✅function component가 없이 Class compoenet로 해결책!!

```
class ProfilePage extends React.Component {
  showMessage = (user) => {
    alert('Followed ' + user);
  };

  handleClick = () => {
    const {user} = this.props;
    setTimeout(() => this.showMessage(user), 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

- 렌더와 props 그리고 showMessage 콜백간의 관계를 props가 도중에 길을 잃지 않도록 고침
- <u>this.props를 이벤트 발생 초기에 읽고, 이 값을 timeout 함수에 넘기는 방법</u>
- **하나의 prop이상을 사용해야 할때나 state를 함께 사용해야 할 때 this.props나 this.state를 인자로 줘야 함**

```
class ProfilePage extends React.Component {
  render() {
    // Capture the props!
    const props = this.props;
    // Note: we are *inside render*.
    // These aren't class methods.
    const showMessage = () => {
      alert('Followed ' + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
  }
}
```

- 이는 만약 당신이 한번 props나 state를 지정한다면, 당신은 언제나 변하지 않는 그 값에 접근할 수 있다는 의미
- **props를 렌더가 되는 시점에 잡으면 됨** => 특정 렌더에 해당하는 props를 의미

## currentTarget vs target

- currentTarget : 이벤트가 바인딩 상위 요소 리턴
- target : 선택된 해당 요소를 리턴

## url 링크 열기

1. a태그의 href="" 이용
2. onclick 이용  
   "location.href="" => 현재 페이지에서 오픈  
   window.open("") =>target=\_blank와 같은 효과 (새로운창)

## word-break, word-wrap

- word-break : 텍스트가 길어 지는 경우 줄 바꿈 제어 (단어 분리)
  break-all - 글자 기준, keep-all - 단어 기준
- word-wrap : 띄어쓰기가 없는 긴 단어를 어떻게 처리할지 정함 (줄 바꿈 설정)
  break-word - 보통 안 바꿔지는 단어들을 한 줄에서 대신 줄을 바꿀 만한 지점이 없을 시 임의의 지점에서 줄을 바꿈

## 뷰포트와 미디어쿼리 관계❓❓

### 아무리 미디어 쿼리를 설정하더라도 뷰포트를 설정하지않으면, 미디어 쿼리가 정상적으로 작동하지 않는다

- 미디어 쿼리는 기기의 width(가로)에 반응하여 작동
- 뷰포트를 설정하지 않으면 스마트폰으로 접속시에도 가로 길이가 PC처럼 큰 값으로 측정되기 때문

## text-overflow 조건

1. width 또는 height가 고정적일 것
2. overflow: hidden; 을 사용해 영역을 감출 것
3. 아래줄로 내려가는 것을 막기위해 white-space: nowrap 등이 필요

---

#### 사진 자료 및 사이트 출처

- https://www.hamadevelop.me/reactfunctionclassdiff/
  리액트 컴포넌트 차이

```

```
