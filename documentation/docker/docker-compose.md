## Docker compose

[INICIO](../README.md)

> **Documentacao:** https://docs.docker.com/compose/install/

### Dependencias

```bash
$ sudo apt-get install curl py-pip python-dev libffi-dev openssl-dev gcc libc6-dev make
```

### Baixa o docker compose

```bash
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Torna executavel

```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```

### Cria link simbolico, obs: tiver de reiniciar o bash

```bash
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### Verifica a versao

```bash
$ sudo docker-compose -v
```

## [AUTO COMPLETE]

### Baixa os arquivos do compose

```bash
$ sudo curl -L https://raw.githubusercontent.com/docker/compose/1.25.3/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose
```

### Edita o arquivo

```bash
$ sudo nano ~/.zshrc

  # INSERE
  plugins=(git docker docker-compose)
```

### Testando

```bash
$ sudo docker-compose + [TAB 2x]
```

### Versao

```bash
$ sudo docker-compose --version

  # RETORNO
  docker-compose version 1.25.3, build unknown
```
