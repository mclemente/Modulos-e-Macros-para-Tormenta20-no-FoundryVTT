# Módulos e Macros para Tormenta20 no FoundryVTT
Lista pessoal de módulos e macros do FoundryVTT para Tormenta 20

# Módulos
## Organização

- **Adventure Importer / Exporter** - Exporta conteúdo do seu mundo para um arquivo que pode ser importado para outros mundos. Exemplo: todas as tabelas de recompensa do T20 podem ser importadadas desse [arquivo](https://github.com/mclemente/Modulos-e-Macros-para-Tormenta20-no-FoundryVTT/outros/Tabela_de_Recompensas_T20.fvttadv) (Agradecimentos ao MestreArieltonC#4492 por compartilhar esse arquivo).
- **Compendium Folders** - Adiciona pastas ao diretório de compêndios.
- **Health Estimate** - Mostra uma estimativa de quantos PV uma criatura ainda tem (exemplo: machucado, morrendo, etc). Para o T20, use esta versão `https://github.com/mclemente/healthEstimate/releases/latest/download/module.json`.
- **Illandril's Token HUD scaler**  - Aumenta o tamanho dos botões quando um token é selecionado. Perfeito para quem acha o menu de condições muito pequeno.
- **Macro Folders** - Adiciona pastas ao diretório de macros.
- **Monk's Little Details** - Coletânea de diversas mudanças pequenas. A principal é adicionar o [texto nas condições](https://raw.githubusercontent.com/ironmonk88/monks-little-details/main/screenshots/TokenHUDUpdates.PNG).
- **Monk's Tokenbar** Adiciona uma [barra de personagens](https://raw.githubusercontent.com/ironmonk88/monks-tokenbar/main/screenshots/TokenBar.png) do lado da barra de macros, além de permitir pedir rolagens, fazer rolagens contestadas, etc.
- **Permission Viewer** - Adiciona um ícone para mostrar quem tem visão das entidades (atores, itens, etc).
- **Tidy UI - Game Settings** - Melhora a interface do sistema. A maior mudança é na página de Configuração de Módulos
- **Token Alt Tooltip** - Segure Alt e veja várias informações dos personagens. Importe essa linha de texto para ter várias informações: [link](https://raw.githubusercontent.com/mclemente/Modulos-e-Macros-para-Tormenta20-no-FoundryVTT/main/token-alt-tooltip.txt).

##  Chat

- **Cautious Gamemaster's Pack** - Evita que o mestre fale como personagem de um jogador.
- **Chat Images** - Você pode colocar o link de uma imagem e ela aparece no chat.
- **Dice Tray** - Adiciona uma bandeja de dados abaixo do chat. Bom para quem pede rolagens de dado além das rolagens da ficha.
- **Hide GM Rolls** - Esconde as rolagens de Mestre.
- **Illandril's Chat Enhancements** - Mostra com qual token você está falando e mostra o nome do jogador ao lado do nome do personagem fazendo as ações.
- **Polyglot** - Permite enviar mensagens no chat usando idiomas.

## Efeitos Audiovisuais

- **FXMaster** - Adiciona 11 opções de clima e um botão no lado esquerdo. Também adiciona suporte a macro de efeitos, mas a maioria é do Patreon deles.
- **Playlist Importer** - Importa playlists em vez de ter que adicionar uma por uma. A playlist que eu uso: https://mega.nz/folder/IXBhlAYZ#pHkhA4C0m4MacnMxz9oywg

## Mapa
- **Perfect Vision** - Melhora a iluminação dos mapas e a visão para mestres. A regra de visão do Tormenta20 é igual à padrão do Foundry, mas eu indico colocar "Bright Light (monochrome)" na opção "Bright Vision in Darkness" para facilitar que seus jogadores com visão no escuro/penumbra saibam quando uma área está realmente iluminada.
- **Zoom/Pan Options** - Melhora MUITO o zoom.
- **Universal Battlemap Importer** - Importa mapas criados no Dungeondraft ou DungeonFog com paredes e tudo. Às vezes algumas portas e paredes aparecem em lugares que não deviam, mas nada que uma rápida edição pelo Foundry não resolva.

## Opcionais

- **Autocomplete Whisper** - Quando você digitar "/w" no chat ele vai mostrar uma lista dos jogadores. É possível substituir com uma macro.
- **Dice So Nice!** - Dados 3D são rolados na tela. Obs: Quando o jogador mudar de aba no navegador, todos os dados que foram lançados desde o momento que ele alternou de aba aparecerão ao mesmo tempo.
- **Ficha de Loot T20** - Adiciona uma ficha de tesouros/loja para a ficha de NPC.
- **Pings** - Segure o botão esquerdo do mouse no mapa e um ping aparece no local.
- **Drag Ruler** - Mostra a distância que o token irá percorrer ao movê-lo com o mouse. O atributo para o deslocamento base é `actor.data.data.attributes.movement.walk`.
- **Touch VTT** + **Mobile Improvements** - Adiciona suporte para telas de toque. Essencial para jogar através do celular.
- **Wall Height** - Você pode definir uma altura para uma parede, permitindo que personagens acima da altura consigam enxergar através dela.

## Nível Avançado

- **Macro Marker** - Permite criar automações para macros.
- **Multilevel Tokens** - Crie teleportes, mova jogadores para outro mapa, etc.
- **Vehicles and Mechanisms** - Crie veículos que movem os tokens dentro deles (precisa do Multilevel Tokens).
