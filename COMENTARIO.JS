/**
 
AULA 1

PRIMEIRO VAMOS CRIAR UM REPOSITÓRIO NO GITHUB E DEPOIS CLONAR ESSE REPOSITÓRIO VAZIO

NO TERMINAL
git clone https://github.com/rscaldo/close_disneyplus.git

UMA PASTA VAI SER CRIADA ./close_disneyplus, VAMOS ABRIR ESSA PASTA PARA TRABALHAR.

PARA A AUTOMAÇÃO DESSE PROJETO VAMOS USAR O GULP, PARA INICIAR A CONFIGURAÇÃO:

npm init --yes 

--yes >PULA AQUELA ETAPA QUE TEMOS QUE FICAR DANDO YES NAS OPÇÕES

UM ARQUIVO package.json VAI SER CRIADO, AGORA TEMOS QUE INSTALAR:
npm i --save-dev gulp gulp-sass sass
UM ARQUIVO package-lock.json FOI CRIADO


VAMOS CRIAR O .gitignore E COLOCAR O node_modules

VAMOS CRIAR O gulpfile.js E VAMOS CRIAR UMAA TAREFA DE TESTE PARA VER SE ESTA FUNCIONANDO CORRETAMENTE
function testeGupl(cp){
  console.log('Olá Gulp')
  cb()
}

exports.default = testeGulp;

ANTES DO TESTE TEMOS QUE IR EM package.js E INCLUIR NO SCRIPT:
"build":"gulp"
AGORA TEMOS QUE TESTAR:
nom run build
RETORNO:
$ npm run build

> close_disneyplus@1.0.0 build
> gulp

[15:31:21] Using gulpfile ~\Desktop\Ebac\21-land page disney\close_disneyplus\gulpfile.js
[15:31:21] Starting 'default'...
Olá Gulp
[15:31:21] Finished 'default' after 4.51 ms

AGORA QUE TEMOS O GULP FUNCIONANDO TEMOS QUE REALIZAR A CONFIGURAÇÃO DO SASS, VAMOS CRIAR UMA PASTA src/styles/main.css

NO INICIO DO ARQUIVO gulpfile.js:
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

APOS TEMOS QUE CRIAR UMA FUNÇÃO QUE VAI RECUPERAR OS ARQUIVOS SASS QUE ESTÃO NA PASTA SRC
function styles(){
  return gulp.src('./src/styles/*.scss')
}

AGORA TEMOS QUE ACRESCENTAR AO CÓDIGO COMO VAI SER O ESTILO DE SAIDA DO NOSSO DOCUMENTO
function styles(){
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({outoutStyle: 'compressed'}))
}

AGORA TEMOS QUE ENVIAR ESSE ARQUIVO CSS JÁ COMPRIMIDO PARA UMA PASTA:
function styles(){
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({outoutStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

POR FIM NO DEFAULT TEMOS QUE COLOCAR styles
function styles(){
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({outoutStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}
exports.default = styles;

AGORA TEMOS QUE TESTAR:
npm run build

AGORA VAMOS CONFIGURAR O watch PARA ACOMPANHAR O ARQUIVO, É UMA FUNÇÃO QUE VAI FICAR OBSERVANDO DETERMINADOS ARQUIVOS
exports.watch = function(){
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

APOS TEMOS QUE RODAR:
npm run build watch

NO .gitignore PODEMOS IGNORAR TAMBEM A PASTA dist

TEMOS QUE IMPORTAR O ARQUIVO CSS NO HTML, IMPORTAR O ARQUIVO QUE ESTA NO DIST
 */
