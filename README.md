# 공부 내역

## HTML5 커스템 데이터 속성

> data-\* 속성을 이용해서 다른 조작을 하지 않고 의미론적 표준 HTML 요소에 추가 정보 저장 가능

### 특징

1. 속성의 시작은 data-
1. 하나의 태그에 사용할 수 있는 개수 제한은 없음
1. 브라우저들은 해석하지 않고 건너뜀 -> 보여지는 화면에 영향없음 -> 접근 가능해야하는 내용은 데이터 속성에 저장하지 않는 것이 좋음
1. JS, CSS에서도 커스텀 데이터의 속성 정보 사용 가능

## require vs import

> 둘다 외부 라이브러리를 불러오는 키워드

- require: NodeJS에서 사용되고 있는 CommonJS키워드
- import: ES6에서 새롭게 도입된 키워드

```javascript
1. const moment = require("moment");
2. import moment from "moment";
```

MomentJS 라는 라이브러리를 불러오는 동일한 작업을 수행 중

- CommonJS 방식을 따른 첫번째 줄의 코드는 여타 다른 변수를 할당하듯 모듈을 불러옴 (변수명의 라이브버리랑 동일하게 할 필요 없음)
- ES6 방식을 따른 두번째 줄의 코드는 좀 더 명시적으로 모듈을 불러오고 있음

import가 많이 사용되고 있지만 100% 대체되어 사용될 수 없음.

Babel과 같은 ES6 코드를 변환해주는 도구를 사용할 수 없는 경우에는 require 키워드를 사용해야함
