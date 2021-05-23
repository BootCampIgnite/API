# API - RenteX

**RF** - Requisitos Funcionais.

**RNF** - Requisitos Não Funcionais.

**RN** - Regra de Negócio.

# Cadastro de carros

**RF**

- Deve ser possível cadastrar um carro.
- Deve ser possível listar todas as categorias.

**RN**

- Não deve ser possível cadastrar um carro com placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com diponibilidade ativa por padrão.
- Somente Administradores poderão cadastrar carros no sistema.

# Listagem de carros

**RF**

- Deve ser possível listar carros.
- Deve ser possível listas todos os carros por nome da categoria.
- Deve ser possível listas todos os carros por nome do carro.

**RN**

- Somente carros disponíveis devem ser listados.
- A listagem dos carros não depende de autenticação no sistema.

# Cadastro de especificação de carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**

- Não deve ser possível cadastrar uma especificação para carros enexistentes;
- Não deve ser possível uma especificação já existente par um mesmo carro
- Somente Administradores poderão cadastrar especificações no sistema.

# Cadastro de imagens de carro

**RF**

- Deve ser possível cadastrar imagens de um carro
- Deve ser possível listar imagens de um carros
- Dever ser possível listar todos os carros

**RN**

- Deve ser possível cadastrar vários imagens para um mesmo carro
- Não deve ser possível cadastrar uma mesma imagem para carros diferentes
- Não deve ser possível cadastrar uma imagem para um carros inexistente.
- As imagens devem ser cadastrados por um Administrador

# Aluguel de carros

**RF**

- Deve ser possível cadastrar um aluguel

**RN**

- Um aluguel deve ter mínimo de 24H de duração
- Não deve ser possível cadastrar aluguel um carro alugado
- Não deve ser possível cadastrar aluguel para um usuário já com com aluguel cadastrado em periodo válido.

### Modelo ER (Notação UML)

![Modelo ER - UML](.github/ER.png)
