# Keycloak API

API REST que interage com o Keycloak para gerenciar usuários.

## Configurações Necessárias

Para que o projeto funcione corretamente, é necessário que algumas configurações sejam feitas:

### No Painel Administrativo do Keycloak

- Criar um Realm.
- Ajustar as configurações do Realm para aquelas vistas em aula.
- Criar um Client.
- Criar um usuário administrador (com permissões de Realm Management) no novo Realm.

### No Docker Compose

Dentro do arquivo `docker-compose.yaml`, na raiz do projeto, altere o valor das variáveis de ambiente `REALM_NAME` e `CLIENT_SECRET` do contâiner 'keycloak_api' de acordo com o nome que você deu ao seu Realm e com o segredo de seu client.
