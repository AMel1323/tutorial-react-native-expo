# Comandos Úteis
-npx create-expo-app@latest --template //cria o projeto React Native com Expo

# Comandos Expo

-npm start (roda o projeto no expo)
-npx expo start --tunnel


# comandos do Git

git config --global user.name "Melissa Alves"
git config --global user.email "alves.melissa1@aluno.ifsp.edu.br"

# Perguntas que pode cair na Prova
- quais os tipos de navegação posso usar com o expo Router?

     (Stack ="pilhas de páginas",
     Tabs ="barra fixa com ícones de navegação'ao pé do App'",
     Drawer =" barra lateral"
     Modal ="janela que abre na frente"
     )
  
  -  O que são Hooks?
     (são funções auxiliares/complementares da biblioteca react, todos começam com a palavra "use", eles só podem ser usado a baixo da criação da função do componente (função do componente) )

   - useEffect ( dispara  uma função sempre que ocomponente é exibido ou algum estado é alterado)

const [count, setCount] = useState(0)
const [nome, setNome] = useState("Melissa")
const [email, setEmail] = useState("alves.melissa1 @aluno.ifsp.edu.br")



**Tópicos que pode cair na prova**

- O que é React Native
- O que é Expo
- Criação de um projeto Expo
- Como testar o App na web (Navegador)
- componentes básicos do React Native(View, Text, StyleSheet, textInput,Image)
- Para que servem os componentes
- Como criar um componente
- Como estilizar um componente
- O estilo no React Native é igual do CSS da Web
- O que são propriedades dos componentes
- Navegação com Expo Router

Framework: framework é uma estrutura que fornece um conjunto de ferramentas, código reutilizável e diretrizes para simplificar e acelerar o processo de criação de aplicações.

 react é nucleo/base (core) do react native
 react native é o framework
 expo é uma plataforma que facilita o desenvolvimento com react native


Cache: É uma área de memória de alta velocidade onde dados frequentemente acessados são armazenados para acesso rápido, como em navegadores web, sistemas operacionais e bancos de dados. Acelera o acesso a informações.



Emuladores: é um software ou hardware que permite que um sistema se comporte como outro, executando programas e utilizando dispositivos projetados para o sistema emulado.



Qual a vantagem de um aplicativo nativo do que um browser?



A principal vantagem de um aplicativo nativo sobre um aplicativo web (acessado via navegador) é o desempenho e a experiência do usuário otimizados.


useState fazem parte da biblioteca React e são usados para gerenciar o estado em componentes funcionais. Eles permitem que você adicione e atualize o estado local dentro de um componente, possibilitando a criação de interfaces interativas e dinâmicas.

useEffect dispara uma função sempre que o componente é exibido ou algum estado é alterado. É usado para lidar com efeitos colaterais, como chamadas de API, manipulação de eventos e atualizações do DOM.

expo Image é um componente usado para exibir imagens em aplicativos React Native desenvolvidos com Expo. Ele oferece suporte a várias fontes de imagem, como URLs remotas, arquivos locais e imagens embutidas no aplicativo, além de otimizações automáticas para desempenho e carregamento eficiente.

componentes : são funções ou classes que retornam elementos React, permitindo a criação de interfaces de usuário reutilizáveis e modulares.

como criar um componente?
cria um arquivo .js  ou .jsx


function MeuComponente() {
  return (
    <View>
      <Text>Olá, eu sou um componente!</Text>
    </View>
  );
}


jsx é difente de um HTML porque ele é uma sintaxe que permite escrever código semelhante ao HTML dentro do JavaScript, facilitando a criação de componentes de interface de usuário no React.

como estilizar um componente?
usando o StyleSheet do react native

css-in-js é igual ao css da web?
não, no css-in-js você cria um objeto javascript com as propriedades de estilo, enquanto no css da web você escreve regras de estilo em um arquivo separado usando a sintaxe CSS tradicional.

o que são propriedades dos componentes?
propriedades (props) são parâmetros passados para componentes React, permitindo a personalização e configuração do comportamento e aparência dos componentes.


### Próximos tópicos

- Scrollview x Flatlist 
- AsyncStrorage

# perguntas para a prova
- qual a diferença de Scrollview x Flatlist ?
  resposta: ScrollView carrega todos os itens de uma vez, adequado para listas pequenas, enquanto FlatList carrega itens sob demanda, ideal para listas grandes e otimizadas (tipo Instagram).
  
- qual bibilioteca que usa Scrollview x Flatlist ?
  resposta: A biblioteca React Native fornece ambos os componentes, ScrollView e FlatList, para gerenciar a rolagem de listas de forma eficiente.

  # Avaliação 2: 08/12

  --------------------------------------ZUSTAND-----------------------------------------------
    - ESTADOS GLOBAIS COM ZUSTAND

        Zustand é uma biblioteca leve e flexível para gerenciamento de estado em aplicações React. Ela permite criar estados globais de forma simples e eficiente, utilizando uma API intuitiva e sem a necessidade de context API ou providers.

    - O QUE EU POSSO GUARDAR NO ZUSTAND?

        Você pode guardar qualquer tipo de dado no Zustand, incluindo objetos, arrays, strings, números, booleanos e funções. Ele é flexível o suficiente para armazenar estados complexos e gerenciar a lógica de negócios da sua aplicação.

    - O QUE EU POSSO CRIAR NO STORE?

        No Store do Zustand, você pode criar estados globais, ações para modificar esses estados, seletores para acessar partes específicas do estado e até mesmo middlewares para adicionar funcionalidades extras, como persistência de dados ou logging.

    - O QUE ACONTECE QUANDO ALGUM ESTADO DO  ZUSTAND É ALTERADO?

        Quando um estado do Zustand é alterado, todos os componentes que estão utilizando esse estado são automaticamente re-renderizados para refletir a mudança. Isso garante que a interface do usuário esteja sempre sincronizada com o estado atual da aplicação.

 --------------------------------------SCROLLVIEW X FLATLIST----------------------------------
    - SCROLLVIEW X FLATLIST

       ScrollView é um componente que permite rolar o conteúdo vertical ou horizontalmente, enquanto FlatList é otimizado para listas grandes, carregando itens sob demanda.

    -  PARA QUE SERVE?

        ScrollView é usado para listas pequenas ou conteúdo fixo, enquanto FlatList é ideal para listas grandes e dinâmicas, como feeds de redes sociais.

    - QUAL A DIFERENÇA ENTRE ELES?

        Uso de ScrollView para listas pequenas e conteúdo fixo, e FlatList para listas grandes e dinâmicas, onde o desempenho é crucial.

--------------------------------------ASYNCSTORAGE--------------------------------------------
    - ASYNCSTORAGE
      AsyncStorage é um sistema de armazenamento de dados chave-valor para React Native, permitindo que os desenvolvedores salvem dados localmente no dispositivo do usuário.
      as informações ficam guardadas no navegador na web, ou no app que fica guardado no aparelho.
      persistir (ou salvar) dados localmente no dispositivo do usuário, mesmo após o aplicativo ser fechado ou reiniciado.

    - PARA QUE SERVE O ASYNC STORAGE?

      Ele é usado para armazenar informações persistentes, como preferências do usuário, tokens de autenticação e dados de sessão, que precisam ser mantidos mesmo após o aplicativo ser fechado.
    
    - OS DADOS DAS ASYNC STORAGE SÃO DE QUE TIPO?
      
      Os dados armazenados no AsyncStorage são do tipo string. Se você precisar armazenar objetos ou arrays, é necessário convertê-los para strings usando JSON.stringify() antes de salvá-los, e depois convertê-los de volta para o formato original usando JSON.parse() ao recuperá-los. tipo chave-valor, onde tanto a chave quanto o valor são strings.
      base de dados do tipo chave-valor.

    - POSSO SALVAR QUALQUER TIPO DE DADOS NO ASYNC STORAGE?

      Não, o AsyncStorage só pode armazenar dados do tipo string. Se você precisar salvar outros tipos de dados, como objetos ou arrays, deve convertê-los para strings usando JSON.stringify() antes de salvá-los, e depois convertê-los de volta para o formato original usando JSON.parse() ao recuperá-los.
    
--------------------------------------AXIOS---------------------------------------------------
   - AXIOS PARA REQUISIÇÕES AUTENTICADAS NA API
      Axios é uma biblioteca de cliente HTTP baseada em Promises para o navegador e para Node.js. Ela é comumente usada para fazer requisições a APIs RESTful e pode ser configurada para incluir tokens de autenticação em cabeçalhos de requisição.

   - PARA QUE SERVE O AXIOS?
      Ele é usado para simplificar o processo de fazer requisições HTTP, lidar com respostas e gerenciar erros de forma mais eficiente. O Axios também suporta a configuração de interceptores, que permitem modificar requisições e respostas antes que sejam tratadas pelo then ou catch.
       envviar requisições HTTP para APIs que exigem autenticação, como incluir tokens JWT (JSON Web Tokens) nos cabeçalhos de requisição para acessar recursos protegidos.

      FETCH: nativo do JavaScript para fazer requisições HTTP, mas não possui suporte nativo para interceptores ou configuração global de cabeçalhos.
      AXIOS: biblioteca de terceiros que simplifica o uso de requisições HTTP, oferecendo recursos adicionais como interceptores e configuração global de cabeçalhos.

  - QUAIS AS VANTAGENS EM RELAÇÃO AO FETCH?

      Axios oferece uma API mais simples e intuitiva, suporte a interceptores para modificar requisições e respostas, configuração global de cabeçalhos, tratamento automático de JSON e suporte a cancelamento de requisições, tornando-o mais poderoso e flexível em comparação ao Fetch.
       reutilização de código, melhor tratamento de erros e suporte a recursos avançados como interceptores e cancelamento de requisições.
       facilita manutenção e além disso permite criar interceptores para adicionar tokens de autenticação automaticamente em todas as requisições.