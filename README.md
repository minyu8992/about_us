## How to run
### Step 1: Set up
#### Install yarn to create package.json
    yarn
### Step 2: Preprocess
#### 1. Compile .pug to .html
    yarn pug3 ./src/index.pug -o ./trg/ -P --watch
#### 2. Compile .sass to .css
    yarn node-sass ./src/index.sass -o ./trg/ -P --watch
#### 3. Compile .ts to .js
    yarn babel ./src/index.ts --out-dir ./trg/ --extensions ".ts" --watch
### Step 3: Result
#### Open up the browser to check out the result
<https://merry.ee.ncku.edu.tw/~minyu/preprocessor/trg/index.html>
