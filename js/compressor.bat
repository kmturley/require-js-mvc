java -classpath plugins/js.jar;plugins/compiler.jar org.mozilla.javascript.tools.shell.Main plugins/r.js -o app.build.js
java -classpath plugins/js.jar;plugins/compiler.jar org.mozilla.javascript.tools.shell.Main plugins/r.js -o cssIn=../css/app/Main.css out=../css/Main.css optimizeCss=Default
pause