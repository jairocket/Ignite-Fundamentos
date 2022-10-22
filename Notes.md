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

# Componentes

- Quando trecho de código se repete muito no código

- Pode remover parte de componente maior sem interromper o seu funcionamento. A ideia é compartibililizar código para que seja possível
  dar manutenção nas partes específicas.

# Programação imperativa

O que deve ser feito, passo a passo. Ex. Receita de bolo.

# Programação declarativa

Quais as condições para obter o resultado final.

# 3 momentos em que um componente é renderizado novamente:

- Quando o estado é alterado;
- Quando a propriedade altera;
- Quando um componente pai renderiza novamente.

_keys servem para criar referências para os itens da lista renderizada. Deste modo, quando o componente é rerenderizado, o React compara as keys que já faziam parte da lista e renderiza apenas os itens com keys novas. Por esta razão, as keys precisam ser únicas._

O índice do array não deve ser utilizado, apesar de ser único, pois, se por algum motivo, for necessário trocar a posição dos itens do array, os índices não serão atualizados. Isso gera rerenderização desnecessária, pois o React interpreta como alteração.

Sempre for atualizar uma informação e a nova informação depende do estado anterior desta informação, é bom criar uma arrow function. Desta forma, é possível manipular a versão mais recente do estado da informação.

```js
function Comment(props) {
  const [likes, setLikes] = useState(0);
  //se na chamada de setLike, passássemos like + 1, ao chamarmos a função várias vezes, o react manipularia a versão antiga do estado e a função aumentaria o número de likes de um em um. Utilizando a sintaxe abaixo, handleLike aumentará o número de likes de dois em dois.
  function handleLike() {
    setLike((state) => state + 1);
    setLike((state) => state + 1);
  }
}
```
