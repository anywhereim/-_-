# ⭐프로젝트 소개

- 프로젝트 명 : tooltip 만들기
- 프로젝트 소개 : 커스텀하여 사용할 수 있는 tooltip 입니다.


<br><br>

# 💻 TECH STACKS

<h3>Environment</h3> 
<div><img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></div>

<h3>Framework</h3>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=nextjs&logoColor=white">

<h3>Development</h3> 
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<br>

# 💡커스텀 가능한 기능
|NO|기능|설명|
| :---: | :---: | :---: | 
|1|Tooltip Content| 툴팁에 표시될 내용|
|2| Position| 툴팁의 위치|
|3| Children| 툴팁을 트리거할 요소|
|4| Children Class Name| 트리거 요소에 적용될 클래스 이름|
|5| Tooltip Class Name| 툴팁에 적용될 클래스 이름|
|6| Event| 툴팁에 이벤트(button, link등)가 포함되는지 여부|
|7| Delay Time| 툴팁이 사라지기 전에 대기하는 시간|
|8| Start Delay| 툴팁이 표시되기 전에 대기하는 시간|
|9| Disable| 툴팁을 비활성화할 수 있는 버튼 표시 여부|
|10| Disable Class Name| 비활성화 버튼에 적용될 클래스 이름|

<br>

# 📖사용방법
## 1. Tooltip Content
- 타입: React.ReactNode
- 설명: 툴팁에 표시될 내용입니다. 다양한 리액트 요소가 포함될 수 있습니다. <br>
- 필수 여부: 필수
  
사용예제:
```
<Tooltip
  tooltipContent={
    <div>
      <h3>툴팁 제목</h3>
      <p>툴팁 내용입니다.</p>
    </div>
  }
>
  {children}
</Tooltip>
```
<br><br>
## 2. Position
- 타입: TooltipPosition(커스텀 타입)
- 설명: 툴팁의 위치를 설정합니다. position prop을 통해 전달합니다.
- 필수 여부: 필수
   
사용예제:
```
<Tooltip tooltipContent={<p>툴팁 내용</p>} position="top-left">
  <button>버튼</button>
</Tooltip>
```

|NO|TOP 가능한 값|
|:---:|---|
|1|top-left|
|2|top-middle|
|3|top-right|

|NO|LEFT가능한 값|
|:---:|---|
|1|Left|left-top|
|2|left-middle|
|3|left-bottom|

|NO|RIGHT 가능한 값|
|:---:|---|
|1|right-top|
|2|right-middle|
|3|right-bottom|

|NO|BOTTOM 가능한 값|
|:---:|---|
|1|bottom-left|
|2|bottom-middle|
|3|bottom-right|

|툴팁 위치 이미지|
|---|
|<img src="https://github.com/anywhereim/terra-coding-test/assets/134301942/b3d39421-c08d-4d27-994b-50c7a62ba2db" style="width:1000px" />| 
<br><br>

<br><br>
## 3. Children
- 타입: React.ReactElement
- 설명: 툴팁을 트리거할 요소입니다. 보통 버튼이나 텍스트와 같은 리액트 요소가 됩니다.
- 필수 여부: 필수
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 4. Children Class Name
- 타입: string
- 설명: 트리거 요소에 적용될 클래스 이름입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  childrenClassName="trigger-class"
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 5. Tooltip Class Name
- 타입: string
- 설명: 툴팁에 적용될 클래스 이름입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  tooltipClassName="tooltip-class"
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 6. Event
- 타입: boolean
- 설명: 툴팁에 이벤트가 포함되는지 여부를 설정합니다. 기본값은 false입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  event={true}
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 7. Delay Time
- 타입: number
- 설명: 툴팁이 사라지기 전에 대기하는 시간을 밀리초(ms) 단위로 설정합니다. 기본값은 0입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  delaytime={1000}
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 8. Start Delay
- 타입: number
- 설명: 툴팁이 표시되기 전에 대기하는 시간을 밀리초(ms) 단위로 설정합니다. 기본값은 0입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  startDelay={1000}
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 9. Disable
- 타입: boolean
- 설명: 툴팁을 비활성화할 수 있는 버튼을 표시할지 여부를 설정합니다. 기본값은 false입니다.
- 필수 여부: 선택 사항
    
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  disable={true}
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 10. Disable Class Name
- 타입: string
- 설명: 비활성화 버튼에 적용될 클래스 이름입니다.
- 필수 여부: 선택 사항
  
사용예제:
```
<Tooltip
  tooltipContent={<p>툴팁 내용</p>}
  position="top-left"
  disable={true}
  disableClassName="disable-button-class"
>
  <button>버튼</button>
</Tooltip>
```

<br><br>
## 종합예제
모든 커스텀 가능한 기능을 사용하는 예제입니다.
```
import React from "react";
import Tooltip from "./components/ToolTip";

function App() {
  return (
    <div>
      <Tooltip
        tooltipContent={<div><h3>이용약관을 참조해주세요.</h3><link>이동하시겠습니까?</link></div>}
        position="top-left"
        childrenClassName="trigger-class"
        tooltipClassName="tooltip-class"
        event={true}
        delaytime={1000}
        startDelay={500}
        disable={true}
        disableClassName="disable-button-class"
      >
        <p>글 작성하기</p>
      </Tooltip>
    </div>
  );
}

export default App;
```
<br><br>
#⚙️프로젝트 설정 및 실행 방법

1. 레포지토리 클론:
```
git clone https://github.com/anywhereim/terra-coding-test.git
cd terra-coding-test
```

2.  의존성 설치:
```
yarn install

*yarn이 없는 경우
npm install
```

3.  개발 서버 실행:
```
yarn start

*yarn이 없는 경우
npm start
```
