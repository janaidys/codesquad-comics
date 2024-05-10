const passport = require('passport');
const bcrypt = require('bcrypt');

const loginLocalFailed = (request, response, next) => {
    response.status(401).json({error: {message: "Username or password is incorrect."}, statusCode: 401,
});
};

const logoutRequest = (request, response, next) => {
    try{
    if(200) {
        response.status(200).json({
success: {message: "User logged out!"}, statusCode:200, 
})
}
} catch (error) {
    response.status(400).json({error: {message: "Something went wrong!"}, statusCode:400,   
});
};
};

const signupRequest = (request, response, next) => {
  const {firstName, lastName, username, password}  = request.body
}