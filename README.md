# AI Dev Academy

Bem-vindo ao repositório do AI Dev Academy! Este projeto React oferece uma simulação envolvente de uma instituição de ensino, onde os professores são criados virtualmente através da IA. Você pode escolher seu professor ideal, inclusive entre personalidades famosas, como Elon Musk, Morgan Freeman e Bill Gates.

## Sobre o Projeto

O AI Dev Academy é uma plataforma inovadora que oferece cursos e recursos para aqueles interessados em aprender e explorar as fascinantes interseções entre desenvolvimento de software e inteligência artificial.

## Principais Destaques

Neste projeto, destaco algumas técnicas e recursos principais:

### Landing Page Responsiva

A estrutura da página foi habilmente dividida em seções para uma organização simplificada e facilidade de manutenção futura.

### Responsividade de Ponta a Ponta

O foco principal foi garantir que a experiência do usuário seja excelente, independentemente do dispositivo utilizado. A página se adapta com perfeição, desde telas pequenas de 300px até telas extra largas de mais de 1200px.

### Roteamento Eficiente

Para uma navegação suave, utilizei um sistema de rotas usando o componente principal AppRouter no arquivo index.js. Este sistema também inclui uma página de erro 404 para lidar com rotas não encontradas.

### Estilização Coerente

A estilização global foi cuidadosamente planejada, permitindo mudanças futuras sem a necessidade de ajustar cada elemento individual. A atualização das cores no nível raiz(root) afeta todo o estilo, simplificando a manutenção.

### Organização Modular

Cada seção da página é representada por um componente dedicado, o que simplifica o desenvolvimento e a manutenção do projeto. Os componentes incluem:

- Header
- Banner
- Section1
- Section2
- Section3
- Section4
- Section5
- Section6
- Section7
- Form
- Footer

### Experiência de Navegação Aprimorada

- O header inclui o logo da empresa e links para seções específicas. O header se torna opaco ao interagir com o mouse para melhorar a legibilidade.
- O logo do header aumenta de tamanho e brilha quando passa o mouse sobre ele.
- Os links do header mudam de cor e exibem um sublinhado quando interagidos.
- O efeito de smooth scroll foi implementado usando o react-scroll para uma navegação suave entre as seções. Em telas menores, um menu "burger" foi implementado.

### Design Atrativo

- A seção do banner apresenta uma imagem de plano de fundo e um título com efeito de digitação automática, alternando frases de forma contínua em um loop.
- A seção de destaques inicia com um botão CTA (Call to Action), direcionando os usuários para o formulário ao final da página. Essa seção apresenta texto e um vídeo, adaptando-se a diferentes tamanhos de tela.

### Personalização de Contato

- O componente de botão de contato recebe parâmetros para determinar se o link leva a uma âncora interna ou a uma URL externa, facilitando sua reutilização.

### Abordagem Didática

- As seções dos "3 Passos" guiam os visitantes através dos primeiros passos na jornada de aprendizado. Imagens usam o efeito "snake", uma linha que percorre as bordas das imagens, adicionando um toque interativo.
- Vídeos incorporados do YouTube são usados para apresentar informações de forma visual.

### Pilares Destacados

- A seção dos "4 Pilares" enfatiza os diferenciais da empresa, exibindo cartões com informações armazenadas em JSON e renderizadas com um mapeamento(map).
- Os cartões apresentam um efeito de sombra ao passar o mouse, proporcionando interatividade.

### Formulário e Validações

- O formulário de contato inclui campos de entrada para nome, e-mail e número de telefone, juntamente com um botão de envio.
- As validações incluem garantir um mínimo de caracteres para o nome, verificação de e-mail válido e confirmação de telefone com 11 dígitos. Em caso de erro, mensagens claras de aviso são exibidas.
- Após a confirmação bem-sucedida, um efeito de carregamento é exibido antes de se transformar em um "check" de confirmação.

### Rodapé e Copyright Dinâmico

- O rodapé exibe ícones de redes sociais e o copyright exibe automaticamente o ano atual.
- A frase "Desenvolvido por edtech1985" finaliza a página, dando créditos à equipe.

## Acompanhamento e Feedback

Esperamos que esta descrição tenha fornecido uma visão detalhada das principais técnicas e recursos do AI Dev Academy. Estou entusiasmado com o projeto e ansioso por receber seu feedback.

## Demonstração Online

Para uma experiência completa, visite [https://ai-dev-academy.vercel.app/](https://ai-dev-academy.vercel.app/).

## Explicações Técnicas

A estrutura da Landing Page foi dividida em seções, para facilitar a organização, bem como alterações futuras.

O foco principal foi em responsividade, abrangendo desde telas extremamente pequenas como 300px até telas extra largas como acima de 1200px.

Para organizar a página utilizei o sistema de rotas a partir do componente principal do index.js que é o AppRouter. que conta inclusive com uma rota 404 de página não encontrada. Além disso, utilizei o estilo global que facilita alterações futuras, sem precisar alterar cada item, alterando apenas as cores do root.

As imagens estão na pasta assets.

Na pasta pública estão os logos responsivos, bem como as configurações das tags SEO html. Há também um arquivo sitemap.xml para indexação.

Cada seção é representada por um componente, como mostro abaixo:

- Header
- Banner
- Section1
- Section2
- Section3
- Section4
- Section5
- Section6
- Section7
- Form e Footer.

O Header que é a barra de navegação possui o logo da empresa e os links para as respectivas seções. Quando o mouse está em cima do header ele deixa de ser transparente e fica opaco para melhor visualização. O logo quando em hover possui um efeito de zoom e brilho. Já os links o efeito de troca de cor concatenado com um sublinhado.

No Header foi utilizado o hook UseState, para gerenciar os estados e o react-scroll para criar um efeito ao selecionar o item do menu de navegação. Além disso, foi utilizado um burger menu para telas menores.

A primeira seção é o banner com uma imagem de background e um título com efeito de escrever onde a frase fica trocando automaticamente em loop. Foi definida uma altura mínima para o título para que o conteúdo abaixo não ficasse oscilando de altura. Esse conteúdo fica à direita em telas maiores e em telas menores ocupa a largura da tela.

O efeito de escrita utilizado foi o react-simple-typewriter, com um array com as frases escolhidas.

A seção seguinte começa com um botão CTA (call to action) que direciona para o formulário no final da página. Nessa seção, temos o texto e um vídeo que conforme a tela ou ficam um ao lado do outro ou um em cima e outro embaixo. Configuração que se repete ao longo do projeto.

O componente de contact button recebe as props e faz uma verificação se o link é uma âncora ou uma url, assim é possível usá-lo tanto para navegar entre as seções da página como para direcionar ao Whatsapp.

As próximas seções são os 3 passos para iniciar a jornada de estudos, onde nas imagens foi utilizado o efeito que chamo de snake, que é uma linha percorrendo a borda das imagens. No final dessas seções há um botão que direciona para o Whatsapp.

Os vídeos armazenados no YouTube são renderizados através da tag iframe. A animação snake utiliza keyframes para manipular a posição onde começa e termina a animação.

A seção seguinte é a seção dos 4 pilares, que são o diferencial da empresa. Há primeiramente e logo após 4 cards que têm suas informações armazenadas em um json e são exibidas através de um map. Os cards possuem um efeito de shadow (sombra) ao ativar o hover. E por fim novamente um botão CTA.

A seção 7 (section7) representa os 3 caminhos a serem seguidos pelos alunos (frontend, backend e fullstack). Nessa seção, além do map no json, ainda há um modal que é aberto ao clicar no card da stack escolhida, onde são exibidos 10 itens relacionados à stack.

Logo após, temos um form, que conta com 3 campos input (nome, email e whatsapp) e com um botão de submit. O form possui efeito de hover luminoso. Nesse form, são feitas validações de mínimo de caracteres para o nome, email válido e telefone com 11 dígitos. Ao clicar no botão, um modal é aberto confirmando os dados. Após clicar em confirmar, é acionada uma animação de loading de 3 pontinhos e ao final vira um “check”, exibindo um toast de sucesso e fechando o modal. Os dados são enviados para o console.

No form, foi utilizado o useState para iniciar os input como vazio (“”). Para validar os campos do form, utilizei a condicional if retornando um erro via toast. No submit button, o useState é utilizado para gerar o efeito de loading junto com o keyframes.

A última seção é o footer que conta com os ícones das redes sociais e a frase de copyright, onde o ano é atualizado dinamicamente. Por fim, há a frase de “desenvolvido por edtech1985”.

Para obter o ano dinamicamente, foi utilizado o `new Date().getFullYear()`.
