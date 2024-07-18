// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities/")
const regValidate = require('../utilities/account-validation')

// Route to build account view
router.get("/login", utilities.handleErrors(accountController.buildLogin));

// Route to register account view
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Route to register new user
router.post("/register", regValidate.registationRules(), regValidate.checkRegData, utilities.handleErrors(accountController.registerAccount))
// Process the login attempt
// router.post("/login", regValidate.loginRules(), regValidate.checkLoginData, utilities.handleErrors((req, res) => {res.status(200).send('login process')}))
router.post("/login", regValidate.loginRules(), regValidate.checkLoginData, utilities.handleErrors(accountController.accountLogin))

// Route to account view once login
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.accountManagment));
// Process the login request
router.post(
    "/login",
    regValidate.loginRules(),
    regValidate.checkLoginData,
    utilities.handleErrors(accountController.accountLogin)
  )

module.exports = router;