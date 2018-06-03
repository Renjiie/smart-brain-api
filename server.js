const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg', 
  connection: {
    host : '127.0.0.1',
    user : 'Renjiie',
    password : 'rennie!95',
    database : 'smart_brain'
  }
});

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{res.send(database.users)})

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,bcrypt,db)})

app.post('/register',(req,res)=>{register.handleRegister(req,res,bcrypt,db)})

app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})

app.put('/image',(req,res)=>{image.handleImage(req,res,db)})

app.post('/imageUrl',(req,res)=>{image.handleApiCall(req,res)})

app.listen(process.env.PORT || 3000, ()=>{
	console.log(`app is running in ${process.env.PORT}`);
})

//  /  -->res = this is working
// /signin --> POST =success/fail
// /register --> POST = user
//  /profile/:userId -->GET =user
//   /image -->PUT = user