# Node

[INICIO](../README.md)

> **Atencao:** desconsiderar o uso de acentos

> **Documentacao:** https://jonatasoliveira.me/como-instalar-node-nvm/

## [Instalacao]

### Instala depedencias do nodeJS

```bash
# IMPORTANTE: estar na bash
$ cd ~/

# Instala os pacotes de dependencias
$ sudo apt-get install build-essential libssl-dev
```

### Baixa o script e executa

```bash
$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
```

### Verifica configuracoes

```bash
# Edita o arquivo
$ nano ~/.bashrc

  # ADICIONA/ATUALIZA
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Recarrega o arquivo
$ source ~/.bashrc
```

### Executa script

```bash
$ bash install_nvm.sh
```

### Recarrega o arquivo

```bash
$ source ~/.zshrc
```

### Alias

```bash
$ nvm alias
```

### Lista as versoes existentes do NodeJS

```bash
$ nvm ls-remote
```

### Instala uma versao

```bash
$ nvm install v12.16.2
```

### Muda a versao de uso

```bash
$ nvm use 15.4.0
```

### Setar uma versao default

```bash
$ nvm alias default 15.4.0
```

### Versao

```bash
$ node -v
```

### Altera a versao

```bash
$ nvm use 6.0.0
```
