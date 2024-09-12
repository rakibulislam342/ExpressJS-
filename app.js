// First Express Application Create ----------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(re,res){
//     res.send('Hello ExpressJS')
// })

// app.listen(2020,function(){
//     console.log('Server run sucessfully')
// })

// ExpressJS Routing ------------------------------------------>
// var Express = require('express')
// var App = Express()
// var Port = 5050

// App.get('/',function(re,res){
//     res.send('Home Page')
//     res.end()
// })

// App.get('/about',function(re,res){
//     res.send('About Page')
//     res.end()
// })

// App.get('/contact',function(re,res){
//     res.send('Contact Page')
//     res.end()
// })

// App.get('/services',function(re,res){
//     res.send('Services Page')
//     res.end()
// })

// App.listen(Port,function(){
//     console.log('Port: 5050')
// })


// ExpressJS Routing with Postman ------------------------------------->
// var Express = require('express')
// var App = Express()
// var Port = 5050

// App.post('/',function(re,res){
//     res.send('Home Page')
//     res.end()
// })

// App.put('/about',function(re,res){
//     res.send('About Page')
//     res.end()
// })

// App.post('/contact',function(re,res){
//     res.send('Contact Page')
//     res.end()
// })

// App.get('/services',function(re,res){
//     res.send('Services Page')
//     res.end()
// })

// App.listen(Port,function(){
//     console.log('Port: 5050')
// })


// ExpressJS Response Status Code -------------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     res.status(401)
//     res.status(200)
//     res.status(201)
//     res.end()
// })
// app.listen(4040)



// ExpressJS JSON Response ---------------------------------->
// var Express = require('express')
// var App = Express()

// App.get('/',function(req,res){
//     let MyJSONArray = [
//         {
//             name:'Rakibul islam Rafi',
//             class:'Eight',
//             School:'JUSC',
//             city:'Savar/Dhaka',
//         },
//         {
//             name:'Rakibul islam Rafi',
//             class:'Eight',
//             School:'JUSC',
//             city:'Savar/Dhaka',
//         },
//         {
//             name:'Rakibul islam Rafi',
//             class:'Eight',
//             School:'JUSC',
//             city:'Savar/Dhaka',
//         }
//     ]
//     res.json(MyJSONArray)
// })
// App.listen(6060)


// ExpressJS Download Response ------------------------------->
// var Express = require('express')
// var App = Express()

// App.get('/',function(req,res){
//     res.download('Ex.js')
// })
// App.listen(9090)

// ExpressJS Response Redirect ------------------------------------------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     res.send('Home')
//     res.end()
// })

// app.get('/Bangladesh',function(req,res){
//     res.redirect('http://localhost:7070/India')
//     res.end()
// })

// app.get('/India',function(req,res){
//     res.send('This is India')
//     res.end()
// })
// app.listen(7070,function(){
//     console.log('Server run Sucessfully!')
// })


// ExpressJS Response Header ------------------------------------------>
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     res.append('name','Rakibul islam')
//     res.append('class','Eight')
//     res.append('City','Dhaka')
//     res.send('Hello World!')
//     res.end()
// })
// app.listen(3030)


// ExpressJS Response Cookie ------------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     res.cookie('name','Rafi')
//     res.cookie('City','Dhaka')
//     res.cookie('Age','15')
//     res.end('Cookie Set Sucess!')
// })
// app.listen(8080)


// ClearCookie
// var Express = require('express')
// var app = Express()

// app.get('/',function(req,res){
//     res.clearCookie('name')
//     res.clearCookie('City')
//     res.clearCookie('Age')
//     res.end('Clear Cookie Sucess!')

// })
// app.listen(4040)


// ExpressJS URL Query ------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     let FirstName = req.query.FirstName;
//     let LastName = req.query.LastName;

//     res.end(FirstName +" "+ LastName)
// })

// app.listen(5050)


//  Get Request Header ---------------------------->
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     var FirstName = req.header('FirstName')
//     var LastNameName = req.header('LastNameName')
//     res.end(FirstName +" "+ LastNameName)

// })
// app.listen(5050,function(){
//     console.log('Server Run Sucess!')
// })


// Simple Post Request --------------------->
// var express = require('express')
// var app = express()

// app.post('/',function(req,res){
//     res.send('This is Simple Post Request')
//     res.end()
// })

// app.listen(3030)


// Request With URL Query ------------------------>
// var express = require('express')
// var app = express()

// app.post('/',function(req,res){
//     let firstname = req.query.firstname;
//     let lastname = req.query.lastname;

//     res.end(firstname +" "+ lastname)
// })
// app.listen(2020)


// Post Request With Header ------------------------>
// var express = require('express')
// var app = express()

// app.get('/',function(req,res){
//     let username = req.header('username')
//     let password = req.header('password')

//     res.end('User Name:'+username+'password'+password)
// })
// app.listen(5050)


// Post Request with JSON Body ----------------------------->
// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()

// app.use(bodyParser.json())

// app.post('/',function(req,res){
//     let JsonData = req.body;
//     let JsonString = JSON.stringify(JsonData)
//     res.end(JsonString)

// })
// app.listen(4040)

// Multipart Form Data ------------------------>
// var express = require('express')
// var multer = require('multer')

// var multer = multer()
// var app = express()

// app.use(multer.array())
// app.use(express.static('public'))

// app.post('/',function(req,res){
    
//     let JsonData = req.body;
//     res.send(JSON.stringify(JsonData))

// })
// app.listen(5050)

//  File Upload ------------------------------>
// var express = require('express')
// var multer = require('multer')
// var app = express()

// var storage = multer.diskStorage(
//     {
//         destination:function(req,file,callback){
//             callback(null,'./uploads')
//         },
//         filename:function(req,file,callback){
//             callback(null,file.originalname)
//         }
//     }
// )

// var upload = multer({storage}).single('myfile')

// app.post('/',function(req,res){
//     upload(req,res,function(error){
//         if(error){
//             res.send('File Upload Fail')
//             res.end()
//         }
//         else{
//             res.send('File Upload Sucess')
//             res.end()
//         }
//     })
// })
// app.listen(4040)


//  Middleware ----------------------------->
// var express = require('express')
// var app = express()


// app.use(function(req,res,next){
//     console.log('I am Application level Middle')
//     next()
// })


// app.get('/',function(req,res){
//     res.send('This is Home Page')
//     res.end()
// })

// app.get('/about',function(req,res){
//     res.send('This is About Page')
//     res.end()
// })

// app.get('/contact',function(req,res){
//     res.send('This is Contact Page')
//     res.end()
// })
// app.listen(3030)


// Route Middleware ---------------------------------------------->
// var express = require('express')
// var app = express()


// app.get('/',function(req,res){
//     res.end('Home')
// })

// app.use('/about',function(req,res,next){
//     console.log('I am About Middleware')
//     next()
// })

// app.get('/about',function(req,res){
//     res.end('About')
// })

// app.get('/contact',function(req,res){
//     res.end('Contact')
// })

// app.listen(8080,function(){
//     console.log('Server Run Sucessfully!')
// })

