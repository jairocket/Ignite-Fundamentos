# Bundlers and Compilers

Nem sempre os navegadores vão suportar a versão mais atualizadas do javascript que estamos utilizamos.
Para isto foram criados os _bundlers_ e _compilers_.

## Compilers

São compiladores de código. Compiladores convertem o código de um formato para outro.
O mais famoso é o _Babel_, que converte sintaxes mais atualizadas do javascript para sintaxes mais antigas,
porém compatíveis com grande maioria dos browsers.

## Bundlers

As aplicações, em geral são construídos de forma modular.
Quase sempre, cada módulo é construído em um arquivo, cujo conteúdo é exportado e importado por outros módulos.
Todos estes modulos, reunidos, formam a aplicação. No entanto, por muito tempo, os browsers não suportavam múltiplos arquivos.
A solução encontrada foi juntar todos os arquivos em apenas um antes de realizar deploy.
A ferramenta responsável por este papel são os _bundlers_. O mais famoso é o _Webpack_.
Atualmente, os browsers já suportam EcmaScript Modules, e, por esta razão, novas ferramentas surgiram, como o _Vite_ e o _Snowpack_,
que não realizam bundling e possuem compiladores nativos.

# DOM (Document Object Model)

Representação do HTML por meio do javascript.

# Imports

## Default Exports

Podemos nomear o módulo exportado na importação.

## Named Exports

O módulo é nomeado na exportação. Se tentarmos renomeá-lo a aplicação não funciona.

# Componentes

Blocos de código que podem ser reutilizados e, por serem pequenos, são mais fáceis de manter.
São sempre são nomeados com letra maiúscula.

# Propriedades

São informações que podem ser passadas para os componentes. São sempre passadas como objeto.

# Escopo CSS

Em React usamos Scoped CSS, ou seja, o CSS é exclusivo para o componente.
Para evitar conflitos, CSS modules, SAAS e Styled-Components criam um hash que torna o nome da classe
único. Evitando conflitos.
