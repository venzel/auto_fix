# Yarn

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## Instalacao

```bash
# Adiciona a chave
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

# Insere no repositorio
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Atualiza lista e instala o yarn
$ sudo apt-get update && sudo apt-get install yarn
```

## Versao do yarn

```bash
$ yarn -v
```
