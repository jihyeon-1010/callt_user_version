const express = require('express');  // express라는 서버를 사용하기 위한 프레임워크 받아오기
const app = express();  // express 사용
const bodyParser = require('body-parser');
const port = 8080;  // 포트넘버 설정

app.use(bodyParser.json());

app.post('/api', (req, res) => {
  let name = req.body.name;
  console.log(name);
  res.send('서버 생성');
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 경로는 이거입니다.`);
})

