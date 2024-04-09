const express = require("express"); // Express 프레임워크 및 body-parser 미들웨어를 가져옵니다.
const bodyParser = require("body-parser");
const app = express(); // Express 애플리케이션을 생성합니다.
const port = process.env.PORT || 5000; // 서버가 실행될 포트를 설정합니다. 환경 변수 PORT가 설정되어 있지 않으면 기본값으로 5000을 사용합니다.
const fs = require('fs');

// 요청의 본문을 JSON 형식으로 파싱합니다.
app.use(bodyParser.json());
// 요청의 본문을 URL-encoded 형식으로 파싱합니다. 확장된 구문 분석을 사용하도록 설정합니다.
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = (require)('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

// GET 요청에 대한 라우트 핸들러를 정의합니다. "/api/hello" 경로에 대한 GET 요청이 수신되면 "Hello Express!" 메시지를 반환합니다.
app.get("/api/customers", (req, res) => {
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

// Express 애플리케이션을 지정된 포트에서 실행합니다.
app.listen(port, () => console.log(`Listening on port ${port}`));