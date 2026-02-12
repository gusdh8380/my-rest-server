# my-rest-server

바이브코딩으로 REST Server 만들기 (Claude)

## 사용한 프롬프트

> Node.js + Express로 REST API 서버를 만들어줘.
> - 포트: 3000
> - 엔드포인트: /api/todos (GET, POST, PUT, DELETE)
> - 데이터는 메모리에 저장 (DB 불필요)
> - 응답은 JSON
> - package.json 포함해서 npm start로 실행되게 해줘

이 한 번의 프롬프트로 Claude가 전체 프로젝트(`app.js`, `package.json`)를 생성했습니다.

## 소개

Claude를 활용한 바이브코딩으로 만든 Todo CRUD REST API 서버입니다.
Express.js 기반으로 동작하며, Todo 항목에 대한 생성/조회/수정/삭제 기능을 제공합니다.

## 기술 스택

- Node.js
- Express.js

## 실행 방법

```bash
npm install
npm start
```

서버가 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트

| Method | URL | 설명 |
|--------|-----|------|
| GET | `/api/todos` | 전체 Todo 목록 조회 |
| GET | `/api/todos/:id` | 단건 Todo 조회 |
| POST | `/api/todos` | Todo 생성 |
| PUT | `/api/todos/:id` | Todo 수정 |
| DELETE | `/api/todos/:id` | Todo 삭제 |

## 요청/응답 예시

### Todo 생성

```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "바이브코딩 해보기", "completed": false}'
```

```json
{
  "id": 1,
  "title": "바이브코딩 해보기",
  "completed": false
}
```

### 전체 목록 조회

```bash
curl http://localhost:3000/api/todos
```

### Todo 수정

```bash
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### Todo 삭제

```bash
curl -X DELETE http://localhost:3000/api/todos/1
```
