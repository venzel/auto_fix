### Git

## [INSTALACAO]

#### Instala as dependencias necessarias para instalacao do git

```bash
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
```

#### Instala o git

```bash
$ apt-get install git
```

#### Instala o meld

```bash
$ apt-get install meld
```

#### Versao do git

```bash
$ git --version
```

#### Desinstala o git e suas dependencias

```bash
$ apt-get purge --auto-remove git
```

## [FAQ]

### Gerenciamento de versionamento

```bash
# Documentacao: https://dev.to/nishina555/how-to-ignore-files-already-managed-with-git-locally-19oo

# Exclui a gestao LOCAL do arquivo pelo git
$ git update-index --skip-worktree yarn.lock

# Restaura a gestao LOCAL do arquivo pelo git
$ git update-index --no-skip-worktree yarn.lock

# Exclui a gestao do arquivo pelo git
$ git update-index --assume-unchanged yarn.lock

# Restaura a gestao do arquivo pelo git
$ git update-index --no-assume-unchanged yarn.lock
```