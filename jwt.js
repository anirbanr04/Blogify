
const jwt=require ("jsonwebtoken");
const secret="anirban@125";
// to Set token in cookie-------
const setuser=(user)=>{
    return jwt.sign({
        name: user.Name,
        email: user.Email,
    },secret)

}
// For authentication verify----------
const getuser=(token)=>{
return jwt.verify(token,secret);
}

module.exports={
    setuser,
    getuser,
}