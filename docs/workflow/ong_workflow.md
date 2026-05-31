```mermaid
flowchart TD

    %% Categorias
    subgraph Categorias
        TC["Todas as Causas"]
        MA["Meio Ambiente"]
        ED["Educação"]
        SA["Saúde"]
        DH["Direitos Humanos"]
    end

    %% Navegação principal
    Home["Home"]
    Sobre["Sobre"]
    Causas["Causas"]
    Transparencia["Transparência"]
    Login["Login"]

    %% Perfil/Menu
    subgraph Perfil
        Sair(("Sair"))
        Config(("Configurações"))
    end

    ConfigPage["Configurações"]

    %% Fluxo inicial
    Home --> Sobre
    Home --> Causas
    Home --> Transparencia
    Home --> Login

    Home --> Perfil
    Config --> ConfigPage

    %% Explorar ONGs
    TC --> Causas
    MA --> Causas
    ED --> Causas
    SA --> Causas
    DH --> Causas

    Causas -- "Explorar Causas" --> PerfilONG["Perfil de uma ONG"]

    %% Restrição para ONG
    Causas -- "Doar para o nosso fundo" --> Restricao["Você não pode porque está logado como ONG"]

    %% Login
    Login -- "Fez o login" --> PerfilProprio["Perfil da sua ONG"]

    %% Área da ONG
    PerfilProprio --> Apoio["Solicitar Apoio Emergencial"]
    PerfilProprio --> Relatorio["Página do Relatório"]
    PerfilProprio --> Doadores["Doadores"]
    PerfilProprio --> Campanhas["Campanhas"]

    %% Relatórios
    Relatorio --> Exportar["Exportar como PDF"]

    %% Doadores
    Doadores --> ListaDoadores["Ver lista de doadores"]
    Doadores --> Mensagens["Enviar mensagens"]

    %% Campanhas
    Campanhas --> SuasCampanhas["Suas Campanhas"]
    Campanhas --> CriarCampanha["Criar uma campanha"]

    %% Transparência
    Transparencia --> Solicitacoes["Solicitação de Apoio Emergencial"]

    %% Fluxo não autenticado
    Relatorio -. "Caso não esteja logado" .-> Login

    %% Estilos
    classDef naoImplementado fill:#ff5a36,color:#fff;
    classDef poucoImplementado fill:#f7c948,color:#000;
    classDef parcial fill:#5fd0c7,color:#000;
    classDef completo fill:#4aa3ff,color:#fff;

    class ConfigPage naoImplementado;
    class Login poucoImplementado;
    class PerfilProprio,Apoio,Relatorio,Doadores,Campanhas,Solicitacoes parcial;
    class Home,Sobre,Causas,Transparencia completo;

```