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