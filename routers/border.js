const router = require("express").Router();
const { isLogin } = require("../middleware/login");
const { BorderMain, borderView, borderDel, createBorder, updataBorder } = require("../controllers/borderController");
const { post } = require("./signUp");


// login 페이지를 넘어가면 isLogin으로 로그인 유무 확인, BorderMain을 실행

// 로그인이 완료되면 루트경로가 호출되고, 
// 해당 루트경로에 따라 로그인된 유저의 정보를 보여주는 BorderMain이 실행되며
// main.ejs가 노출된다. 
router.get('/',isLogin,BorderMain);

// main.ejs에서 '등록 글 보러가기'를 클릭하면 /view/:id로 이동되고 
// 해당 유저가 작성한 글을 보여주는 함수인 borderView가 실행된다.
router.get('/view/:id', isLogin, borderView);

// main.ejs에서 input에 작성됭 글 내용으로 post 요청을 받으면
// createBorder가 실행되며 Post 테이블에 글이 추가된다.
router.post('/create_border', isLogin, createBorder);

// border.ejs에서 각 글마다 있는 수정 input에 수정할 값을 입력하고,
// '수정'버튼을 클릭하면 해당 updataBorder 함수를 이용하여 게시글이 수정된다.
router.post('/view_update/:id', isLogin, updataBorder);

// border.ejs에서 각 글마다 있는 '삭제'버튼을 클릭하면
// borderDel함수를 이용하여 해당 게시글이 삭제된다.
router.get('/del/:id', isLogin, borderDel);

module.exports = router;