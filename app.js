const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // important command to set view engine to recognize the ejs template lang that will be used throughout the app.

//Whatever page or javascript code that needs to be used must first be written in the app.js file inside the app.get method(middleware) as shown below before it can be ran by node command and appear in the browser


app.get('/', (req, res) => {
    const blogs = [
        {title: "first blog", snippet: "lorem holt randler"},
        {title: "second blog", snippet: "lorem holt randler" },
        {title: "third blog", snippet: "lorem holt randler"}
    ]
    res.render( 'index', {title : "Home",  blogs})
  })

  app.get('/views/about.ejs', (req, res) => {
    res.render('about')
  })

  app.get('/views/footer.ejs', (req, res) => {
    res.render('footer')
  })

//The code runs from top to bottom and if a page isn't found at any point, the app.use method, wgich has to be at the very bottom of all the app.get methods is called and whaterever is pass in it(in this case a 404 page) is called and that is what is served in the browser.

  app.use('/views/404.ejs', (req, res) =>{

    res.status(404).render('404', {title: 404})
  })

  app.use(express.static('public')) // allows for express to have access to the public folder in order for static files like styles.css to work on the frontend

  //the app.use middleware is never ran after a response, it can only be ran after a request and before a response. So if it was placed inbetween 2 page app.get, it will not run after the the first page is gotten as a response


  //next() is a function that is used to a allow a middleware move to the next middleware 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})