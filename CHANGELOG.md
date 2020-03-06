# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [v1.0.0](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/v1.0.0) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/v1.0.0-rc4...v1.0.0))

### Misc
- Adicionado sonar e fortify | Feature/stk718 ([259d2fc](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/259d2fc9c7ed9aa80553698f0330a4a7c70bf3d6)).
- Ajustes no processo de cancelamento de pedido no orquestrador ([d3acdbc](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d3acdbc8fd4436cecd9801e0224493aa0e14fff7)).
- Correção de nome da classe Methods para Method ([50d3de2](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/50d3de246ab946ae1db5c7caf26850d254b2f3dc)).
- Correção do caminho do import BranchEntity ([10b0d93](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/10b0d9389516ed786794585c1645e9dc0d59d09b)).
- Inclusão de comentário no método de chamada do módulo de cancelamento ([e2add8c](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/e2add8ca3469da5467eaa09fb2ab60694ad28b69)).
- Melhorias no processo de cancelamento de pedido ([dd27224](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/dd272246b049d2ad28d37b5b4a750e5b6ccb40a1)).
- Readequação do contrato de post e inclusão de log de chamada para o módulo de cancelamento ([5322dec](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/5322dec42321ff703cde3f898046cd035076fad5)).
- Validação das informações do objeto de formas de pagamento ([c220db1](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/c220db151aae18091400984af675ffe6738b3939)).


## [v1.0.0-rc4](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/v1.0.0-rc4) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/v1.0.0-rc3...v1.0.0-rc4)) - 2020-01-29

### Misc
- Adicionado CurrencyTransformer para valores numéricos não serem tratados como string ([d66da03](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d66da03af02037ae9fc4e1684d0a896e54541965)).
- Alteração de nome de classe e organização dos imports no OrderModule ([7839559](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/7839559195f33592211149ddbce0f8b9e8cf2110)).
- Alteração do path para cancelamento do pedido ([1baf351](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/1baf351d6ac4e1b069eb421d6068a2915e443b7c)).
- Atualizando o README ([51ecc61](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/51ecc61937e19e6f7a91f633611b949179edee5c)).
- Criação da controller e dto referente ao cancelamento do pedido ([0568931](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/05689314eb626a992b5059ff311bf1c8068ff1ab)).
- Criação da service e http-service responsaveis pelo cancelamento do pedido ([a239727](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/a23972753c0d9aee7d1df9421d28414c86db926b)).
- Exclusão de classes desnecessárias ([d69bd93](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d69bd93025aebdadfb52c8bbcce33bc4b50473d3)).
- imagens do projeto ([8bcceed](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/8bcceedc5d7c3f52aebfbf4d5d699ce8021b9c39)).
- testes da consulta de filial ([408ae64](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/408ae64f2be2da9dfdced6e39fd15e401cfc9f95)).
- testes dos endpoints de filial ([9ae1b21](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/9ae1b2136846547f469818f1e2f0263534e577b1)).


## [v1.0.0-rc3](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/v1.0.0-rc3) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/v1.0.0-rc2...v1.0.0-rc3)) - 2020-01-29

### Misc
- Adicionado rota de pin e health da aplicação ([314c391](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/314c39182863257f8a4ceebcb3cf36d923c15bfb)).
- Alterado transaction service para validar o retorno da consulta de forma de pagamento ([799f58d](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/799f58d4505d1cf6f5a2f817b5e3c0aec3dcb241)).
- Alteração do nome da propriedade origin_code no banco de dados ([e584b8e](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/e584b8eb57c77e70af05faa5dc6a527d6e52acb4)).


## [v1.0.0-rc2](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/v1.0.0-rc2) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/v1.0.0-rc1...v1.0.0-rc2)) - 2020-01-28

### Added
- Add Procfile ([bcd7c40](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/bcd7c40a1404d896fd0110ef2a461f9150fe2838)).


## [v1.0.0-rc1](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/v1.0.0-rc1) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/release.test.deploy...v1.0.0-rc1)) - 2020-01-28

### Misc
- adicionando response padronizado ([da6c582](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/da6c582486aa798425d750ca365c6a11ec3fafb7)).
- Alterado http-exception para retornar no 'padrão' do labs ([aaea38a](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/aaea38a77ec754c925544c5e7a832a53c589d9f3)).
- correção de nomeclatura ([04ae381](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/04ae38166a0e465987cf394e204fd3f1c783a1f7)).
- Correção do gitlab CI/CD ([2777da8](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/2777da8e4dcf81ccc4f00b503d441318d682029a)).
- Corrigido nome de pasta 'branch' e implementado regra para carregar o branchIdModule ([a3b98ef](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/a3b98ef8630d7199131d2bdee20dc832946a742a)).
- corrigindo testes para o novo modelo de resposta ([2bd4f3c](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/2bd4f3cc6c13e9e56c75b52520ea497ddfdab63b)).
- Criação dos testes referentes ao customer ([0dc1437](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/0dc14373a7680879f6415624c39274d681d7f3f6)).
- Criação inicial da estrutura para API de cancelamento de pedido ([b2d2144](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/b2d21446bde63812c62f29c7204ffceb4433b876)).
- Feature/bug87 ([a6b78f5](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/a6b78f543b6bb1e544439767bc891e27174f9d74)).
- STK742 Adicionar middleware de retorno quando sucesso ([f722843](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/f7228439bc30561686d20653cc832466aa4f3aa8)).
- STK756 Ajustar middleware do retorno de sucesso ([cf0dda1](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/cf0dda14f176bd544cd45ca08e8a57cb7acf7900)).


## [release.test.deploy](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/tags/release.test.deploy) ([compare](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/compare/255001a2502e1cf9a67f46d268998c380ba870ef...release.test.deploy)) - 2020-01-24

### Added
- Add README.md ([255001a](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/255001a2502e1cf9a67f46d268998c380ba870ef)).

### Removed
- Removendo arquivo duplicado ([782efa4](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/782efa4ca3b7b9c6569460d2d0760ab292f8f1f8)).

### Misc
- [STK7226] Consumo da api do módulo marisa + testes ([3ffd5b5](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/3ffd5b544ec01669a06ec8d620278bbbfc47e9da)).
- Adicionado script de test e2e no  package.json ([c22c935](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/c22c935073caced673660925bbdf794beb0c0e5e)).
- Adicionar HttpModule aos modulos de transação ([fc80f8c](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/fc80f8ca8dfcbebf515dde991ccb5d753a374e2d)).
- Adicionar nock e modo debug nos testes ([574adc7](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/574adc7ccdcd8deb99858f9b137f045039c95b7b)).
- Ajuste identaçao ([1b2bb86](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/1b2bb865fc2def4d632e5401bc65683c540c9075)).
- Alteracao para coverage ([5f25107](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/5f25107cf68423b0cc8e5788eda519d88d626010)).
- Alteracao script no package.json ([fb27ec1](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/fb27ec168d84d9988709ccd84a2ee3df047831b9)).
- Alterado CI/CD ([bd18e47](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/bd18e4716ad4d970653f124a56f40f9b4760b1de)).
- Alterado CI/CD e adicionado script de deploy em stage ([a10e26d](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/a10e26d67dc40a44c90dcf5ac4e8b2601a24e09a)).
- Alterado entidade de branch para transaction ([751099e](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/751099e57b03fe273c9bfef20250b273c109205a)).
- Alterado estrutura básica da entidade Transaction para atender os métodos de create e update ([5879ac7](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/5879ac7d45772a4bbdf14afbee831fd6b800bddd)).
- Alterando endpoint de filiais ([d81bc22](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d81bc22289a114ef5ef19755015359dde5d6e112)).
- Alterando endpoint de filiais ([d009bff](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d009bff534c45ad446d0d45ee11356aea817ba60)).
- Alteraçao CI/CD ([89d98a3](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/89d98a3bbcbfb6e9c67de6d8622fbd2200cbda47)).
- Alteração do parâmetro authorizerId para paymentFormCode e remoção de funções desnecessárias. ([24bf9c3](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/24bf9c3fcf456ef9d4b929764bbf85635a9571d3)).
- Consulta de Filial ([2705475](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/27054756142d7e18d361813ea3a65dac17b8fbad)).
- Consulta de Filial ([7c9ceab](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/7c9ceabc9438885764451b61cb0816550fcc8f5d)).
- Correcao conflitos ([e0f4d53](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/e0f4d53cfcaacee4428e26e353ba1826a9702d1a)).
- Correcao de conflitos ([b50ecb6](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/b50ecb61f32401635cf93e844c33412919864432)).
- Corrigido mensagem de erro para concatenar propriedade correta ([296e9c1](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/296e9c1ec3045255d35298e3a76236761b43418c)).
- Criado consumo modulo, testes e adicionado novo status ([303705a](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/303705ad7416f7c9e0edf9de993d9bab3db19601)).
- Criado endpoint de criação de transação e histórico de transação ([3a4548a](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/3a4548af266095f960eb75a4e1945c23973814e8)).
- Criado estrutura básica de entidades e modelagem de banco ([2c24f57](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/2c24f57d6286eb836a7a2fac986edd83996eb272)).
- Criado estrutura básica do projeto Dewey Largo Api ([8e0b797](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/8e0b797e9146d21621b7ebee9b71d6e350aec76f)).
- Criado metodo de cancelamento ([2780f74](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/2780f74c892dab7e1829607c54ccae62a8e0204f)).
- Criado metodo de cancelamento ([63685f4](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/63685f445cd23483566853fe36a85afbc0b2cfed)).
- Criado metodo de cancelamento de transacao ([9a61206](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/9a6120600c120dd38bca967371133257929af9b7)).
- Criado na estrutura comum do projeto classe de requisição http ([db743f3](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/db743f3bacc836e6d5390ca0e2d70836e6ad019e)).
- Criado testes de unidade para método de create e correção de update quando resposta com erro ([c74f810](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/c74f810acdf4401740032f0a87830ee71ea53745)).
- Criação do método para buscar forma de pagamento da autorizadora. ([f7e4620](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/f7e462078e372d0758e46d5d8d47e2c3b3181607)).
- Criação inicial do modulo customer ([9031335](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/9031335eb01f2a657dd6dd4d363df525acb40df1)).
- endpoint de consulta do de para de filial ([0ca4b32](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/0ca4b32f004effcce9fef087da2eff9fc9299d32)).
- feature/STK698 - Adicionar endpoint de confirmação de transação ([7bca902](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/7bca90267fa995723f634aa32a738094a2f29292)).
- Melhoria nas mensagens de exceções. ([b10edec](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/b10edec5a1bfd7404776d00ead119be974b3d569)).
- Melhorias no processo para realizar busca das informações referentes a forma de pagamento. ([3f37360](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/3f3736034273d83cf8f19bd5886c9c696f48d785)).
- renomeando arquivo de teste ([9cbbdd3](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/9cbbdd30059c6e6365a6b4a517242aa7f03c6212)).
- resolução de conflito ([d4d0458](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d4d0458b055e2ef8b813ee897d1d0ef2cac7742b)).
- testes das consultas relacionadas a filial ([2344d71](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/2344d7145a18f8ac5f8942ea61fe3f0fecb7b7b0)).
- testes das consultas relacionadas a filial ([f12ed30](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/f12ed305167b86f5336d9e49321952b04b2397ec)).
- Voltar ao normal o response de cancelamento ([d79cbfd](https://gitlab.luizalabs.com/luizalabs/squad-checkout-lojas/commit/d79cbfd1894b724aee9293a6b80e0c2429b8c77c)).


