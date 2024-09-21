# Working with Templates

In Express.js, templates are used to generate dynamic HTML pages by combining static content with data. Templates provide a convenient way to separate the presentation logic from the application logic.

## Template Engines

Express.js supports various template engines, such as EJS, Pug (formerly Jade), and Handlebars. These template engines allow you to write HTML templates with embedded JavaScript code.

### EJS

EJS (Embedded JavaScript) is a popular template engine for Express.js. It allows you to embed JavaScript code within HTML templates using `<% %>` tags. Here's an example of an EJS template:

```ejs
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <h1>Welcome <%= username %></h1>
</body>
</html>
```

In the above example, the `<%= username %>` expression is replaced with the value of the `username` variable when the template is rendered.

### Pug

Pug (formerly Jade) is another template engine for Express.js. It uses indentation and tags to define the structure of the HTML template. Here's an example of a Pug template:

```pug
doctype html
html
  head
    title My App
  body
    h1 Welcome #{username}
```

In the above example, the `#{username}` expression is replaced with the value of the `username` variable when the template is rendered.

## Rendering Templates

To render a template in Express.js, you need to set the template engine and specify the path to the template file. Here's an example of rendering an EJS template:

```javascript
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { username: 'John' });
});
```

In the above example, the `app.set('view engine', 'ejs')` line sets EJS as the template engine. The `app.set('views', path.join(__dirname, 'views'))` line specifies the directory where the template files are located. The `res.render('index', { username: 'John' })` line renders the `index.ejs` template and passes the `username` variable to the template.

## Exercise: Render a Template

1. Create a new EJS template file called `profile.ejs` in the `views` directory.
2. Add HTML content to the `profile.ejs` template, including placeholders for the user's name and email.
3. Update the route handler for the `/profile` route to render the `profile.ejs` template and pass the user's name and email as variables.
4. Test the route by visiting `http://localhost:3000/profile` in your browser.

## Conclusion

Working with templates in Express.js allows you to generate dynamic HTML pages by combining static content with data. Template engines like EJS and Pug provide a convenient way to separate the presentation logic from the application logic.
```

I hope this helps you with your Express.js project! Let me know if you need any further assistance.