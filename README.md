## Drunk Orchestra

Make sure node is installed. You can get it [here](https://nodejs.org/en/download/).

To run [the local web server](https://github.com/tapio/live-server), run `npm install` and then run:

```
node server.js
```

[`nodemon`](https://github.com/remy/nodemon), `watch-views` and `watch-css` scripts run when you launch the web server.

### Handlebars Build Tool

#### Sample folder structure:

```
cwd/src/views
|_layouts
|__base.hbs
|_partials
|__blog
|___post.hbs
|_templates
|__index.hbs
```

**Notes:**

- `cwd` is the base project path.
- `/templates` should always contain an `index.hbs` file.

#### Layouts:

```
<!-- cwd/src/views/layouts/base -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns#">
  <head>
    <title>Title</title>
    <link type="text/css" href="/styles/main.css" rel="stylesheet">
  </head>

  <body>
  {{> @partial-block }}
  </body>
</html>
```

#### Templates:

```
<!-- cwd/src/views/templates/index.hbs -->
{{#> base}}
  {{> blog/post}}
{{/base}}
```

#### Building:

In `package.json` there is the following block run when you do `node server.js`:

```
scripts: {
  ...
  "build-views": "node build/build.js -d cwd -p \"src/views/partials/**/*.hbs\" -l \"src/views/layouts/**/*.hbs\" -t \"src/views/templates/**/*.hbs\" -v",
  "watch-views": "nodemon -e hbs -x \"npm run build-views\""
}
```

This compiles `.hbs` files from the `/templates` folder to `.html` files and outputs them to the `cwd`, mapping subfolders within `/templates`.

### Sass Build Tool

The `watch-css` script outputs a compiled `.css` file to `/styles/main.css`. This stylesheet is imported into the `base` layout above.
