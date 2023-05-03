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

AULA 2
VAMOS INSTALAR: npm i --save-dev gulp-imagemin@7.1.0

NO gulpefile.js TEMOS:
const imagemin = require('gulp-imagemin')

function images() {
  return gulp
    .src("./src/images/** /*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

NO DEFAULT TEMOS QUE SUBSTITUIR POR:
exports.default = gulp.parallel(styles, images)

APÓS TEMOS QUE RODAR npm run build 

VAMOS NO main.scss E VAMOS CRIAR OS PADRÕES QUE VÃO SER USADOS NO NOSSO PROJETO, PODEMOS CRIAR MIXINS PARA ALGUNS DOS PADRÕES

NO package.json VAMOS CRIAR UM SCRIPT PARA RODAR O WATCH
    "dev": "gulp watch",

NO CONSOLE: npm run dev

VAMOS CRIAR UM NOVO ARQUIVO EM src/styles/_hero.scss O HERO É COMO SE FOSSE UM BANNER

AULA 4

PARA PROGRAMAR OS BOTOES TEMOS QUE ADICIONAR ALGUNS PARAMETROS NO HTML
DE:
<section class="shows">
    <nav class="shows__tabs">
      <button class="shows__tabs__button shows__tabs__button--is-active">Em breve</button>

PARA:
<section class="shows">
    <nav class="shows__tabs">
      <button data-tab-button='em_breve' class="shows__tabs__button shows__tabs__button--is-active">Em breve</button>

E NA UL TEMOS QUE ADICIONAR TEMOS QUE ADICONAR NAS 3, MAS O ID VAI SER DIFERENTE:
DE:
<ul class="shows__list shows__list--is-active">

PARA:
<ul data-tab-id='em_breve' class="shows__list shows__list--is-active">

CRIAR O ARQUIVO main.js E COMEÇAMOS COM A FUNÇÃO QUE ACOMPANHA QUANDO O DOM TERMINOU DE CARREGAR
document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]')
})
SELECIONAMOS TODOS OS BOTOES NA FORMA DE ARRAY, AGORA VAMOS ADICIONAR UM EVENTO A ESSES BOTOES

document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]');
  
  for{let i=0; i<buttons.length; i++}{
    buttons[i].addEventListener('click', function(botao))
  }
})

AULA 5 - CRIANDO A LISTAGEM DE PLANOS

PODEMOS TRANSFERIR A CONFIGURAÇÃO GENERICA DO BOTÃO QUE ESTAVA NO __hero.scss PARA main.scss

PARA SELECIONAR UM DETERMINADO ELEMENTO TEMOS O ATRIBUTO nth-child(2)

AULA 8 - CRIANDO O FAQ
PARA DEIXAR O CONTEUDO DAS RESPOSTAS INVISIVEL
 &__answer {
        height: 0;
        overflow: hidden;
      }

O COMPORTAMENTE DE ABRIR E FECHAR DO FAQ É REALIZADO COM JS

CRIAMOS UMA CONSTANTE QUE VAI SELECIONAR [data-faq-question]
const questions = document.querySelectorAll('[data-faq-question]')

TEMOS QUE COLOCAR ESSE ATRIBUTO NO HTML
        <div class="faq__questions__item__question" data-faq-question>

DEPOIS VAMOS ADICIONAR O COMPORTAMENTO DE CLIQUE
for (let i=0; i <question.length; i++){
  questions[i].addEventListener('click', abreOuFechaResposta)
}


PARA ADICONAR O COMPORTAMENTO DO CABEÇALHO, VAMO ADICIONAR UMA CLASSE HIDDEN A ALGUNS ELEMENTOS E DEPOIS VAMOS REMOVER ESSA CLASSE COM JAVASCRIPT, NOSSA IDEIA É QUE A PARTIR DA SECTION HERO OS OUTROS BOTOES APAREÇAM, PORTANTO TEMOS QUE SELECIONAR A SECTION HERO
const heroSection = document.querySelector('.hero')

PARA SABER QUANDO A ROLAGEM DA PÁGINA PASSOU PELO .hero NOS PRECISAMOS SABER A ALTURA DELE, PARA PEGAR A ALTURA DE UMA ELEMENTO USAMOS A PROPRIEDADE .clientHeight

const alturaHero = heroSection.clientHeight;

PARA IR ACOMPANHANDO A ROLAGEM DA PAGINA QUE O USUÁRIO VAI REALIZAR NO NOSSO SITE TEMOS EM EVENTO
window.addEventListener('scroll'), function(){
  console.log(window.scrollY)
}

  AGORA TEMOS QUE REALIZAR UMA VERIFICAÇÃO, QUANDO O VALOR FOR MAIOR QUE A ALTURA DO HERO, PORTANTO QUANDO O VALOR FOR MAIOR QUE A NOSSA VARIAVEL alturaHero  OS OUTROS ELEMENTOS VÃO APARECER, 
window.addEventListener('scroll'), function(){
  const posicaoAtual = window.scrollY

  if (posicaoAtual < alturaHero){
    console.log('esconde elementos')
  }
}
COM ESSE IF TEMOS QUE QUANDO A posicaoAtual FOR MENOR QUE A alturaHero NOS ESCONDEMOS OS ELEMENTOS E ELES SÓ VÃO APARECER QUANDO FOR MAIOR QUE A alturaHero

AGORA VAMOS APAGAR AS OPÇÕES DE hidden QUE COLOCAMOS NO CSS E HTML, E CRIAR OUTRAS COISAS

AGORA VAMOS CRIAR UMA FUNÇÃO QUE VAI ADICIONAR A CLASSE NO HEADER --is-hidden
function ocultaElementosDoHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden')
}

TEMOS QUE CHAMAR ESSA FUNÇÃO QUANDO A posicaoAtual < alturaHero, PORTANTO VAMOS SUBSTITUIR:
DE:
 window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      console.log("esconde elementos");
    }
  });

  PARA:
   window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    }else{
      exibeElementosDoHeader()
    }
  });


  CRIAMOS A FUNÇÃO exibiElementosDoHeader
  function ocultaElementosDoHeader(){
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden')
}
 */
