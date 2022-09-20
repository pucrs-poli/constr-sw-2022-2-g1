# Construção de Software - Grupo 1 - 2022

Trabalho 1 de Construção de Software.

## Como Executar

Clone o repositório, abra um terminal no diretório do projeto e execute o comando a seguir:

```sh
docker compose up
```

Esse comando irá subir o contâiner do Keycloak (porta 8080) e o do backend (porta 3000).

## Configurações Necessárias

Para que o projeto funcione corretamente, é necessário que algumas configurações sejam feitas:

### No Painel Administrativo do Keycloak:

- Criar um Realm.
- Ajustar as configurações do Realm para aquelas vistas em aula.
- Criar um Client.
- Criar um usuário administrador (com permissões de Realm Management) no novo Realm.

### No Backend:

Dentro do arquivo `src/config.ts`, altere o valor das variáveis `REALM_NAME` e `CLIENT_SECRET` de acordo com o nome que você deu ao seu Realm e o segredo de seu client.
