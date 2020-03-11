# Alguns algoritmos de IC em TypeScript compilados para JavaScript utilizando node.

### Algumas configurações para melhorar o desenvolvimento em TypeScript.

`yarn tsc --init` .

Esse comando irá gerar o *tsconfig.json* com algumas configurações pré-setadas.

Em *tsconfig.json* na linha *"outDir":"./"*, será a configuração onde os seus arquivos compilados JavaScripts irão. Crie um novo diretório para facilitar mais o entendimento do código. *"outDir":"./dist"* por exemplo.

(Nota: dentro do tsconfig.json existem diversas configurações, caso queira utiliza-las consulte a documentação do [TypeScript](https://www.typescriptlang.org/docs/home) para mais informações).

Para compilar o arquivo *TypeScript* para *JavaScript* basta rodar o comando `yarn tsc`.




### Ts-node-dev
Para não ficar recarregando a página sempre que ouver uma alteração (*é opcional(mais recomendável para servers)*), pode-se instalar o `yarn add ts-node-dev --dev`. Para mais informações sobre, consulte a [documentação da NPM](https://www.npmjs.com/package/ts-node-dev) a respeito.

No *package.json* adicione as seguintes linhas:

"scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly src/index.ts"
  },



### Sucrase e Nodemon
Para compilar o arquivo TypeScript mais rapidamente, basta usar instalar o *Sucrase* com o *Nodemon*

Para instalar o *Sucrase*:
rode `yarn add --dev sucrase ` ou  `npm install --save-dev sucrase`.

Para mais informações, consulte a [documentação do Sucrase](https://github.com/alangpierce/sucrase).

Logo após adicione o *Nodemon*:
rode `yarn add nodemon -dev` ou `npm install --save-dev nodemon`

Crie um novo arquivo chamado *nodemon.json*, nele ponha as seguintes configurações:

{
    "watch": ["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/index.ts"
    }
}

No arquivo *package.json* altere a seguinte linha:

"scripts": {
    "dev": "nodemon src/index.ts"
  },


### Scanf
Para a entrada de informações por meio do console rode:
`yarn add scanf`

### Filas
Para facilitar a busca em largura
`yarn add queue-typescript`