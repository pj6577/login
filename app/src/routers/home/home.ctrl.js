"use strict";



const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
     login : (req, res) => {
        res.render("home/login");
    },

};

const users = {
    id: ["박재현", "테스트1", "테스트2"],
    psword : ["1234", "12345", "12345"],
};

const process = {
    login : (req, res) =>{
        const id = req.body.id,
        psword = req.body.psword;
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                    msg : "로그인에 성공하셨습니다",
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하셧습니다",
        });
    },
};

module.exports = {
  output,
  process,
};

