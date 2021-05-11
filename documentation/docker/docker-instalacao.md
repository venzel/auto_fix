# Docker

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

> **Documentacao:** https://docs.docker.com/install/linux/docker-ce/ubuntu/

### Remove instalacoes anteriores

```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

### Atualiza os repositorios

```bash
$ sudo apt-get update
```

### Instala repositorios necessarios para o docker

```bash
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

### Adiciona a key oficial

```bash
$ sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### Verifica se ta ok a chave

```bash
$ sudo apt-key fingerprint 0EBFCD88
```

### Adiciona o repositorio do docker

```bash
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### Atualiza repositorios do sistema

```bash
$ sudo apt-get update
```

### Instala o docker

```bash
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### Adiciona um usuario ao grupo do docker

```bash
$ sudo usermod -aG docker <name_user>
```

## Comandos rápidos

```bash
# Lista as imagens
$ sudo docker images

# Lista os containers ativos
$ sudo docker container ls

# Lista os containers ativos e inativos
$ sudo docker container ls -a

# Inicializa um container
$ sudo docker container start <nome_container>

# Para um container
$ sudo docker container start <nome_container>

# Remove todos os containers parados
$ sudo docker container prune

# Remove um container
$ sudo docker container rm <nome_container>
```
