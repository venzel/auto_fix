# Linux

## Editor padrao

```bash
$ update-alternatives --config editor
```

## Usuarios logados

```bash
$ who

# Mais detalhes do usario logoado
$ who -a
```

## Historicos de logins

```bash
# Logins efetuados
$ last

# Logins mais antigos
$ last -f wtmp.1

# Tentativas falhas de login
$ lastbb -f

# Logins mais antigos
$ lastb -f wtmp.1

# Logins bloqueados
$ last -f btmp.1

# Ultimos logins de usuarios
$ lastlog
```

## Gerenciamento de usuarios

```bash
# Bloquear usuario com usermod
$ usermod -L <usuario>
```

```bash
# Desbloqueia usuario com usermod
$ usermod -U <usuario>
```

## Gerenciamento de processors

```bash
# Exibe o processo e o servico
$ fuser -u 3306/tcp
```

```bash
# Dados de uma porta
$ lsof -i :80
```

```bash
# Exibe o detalhes de um processo
$ ps aux | grep 3306
```

```bash
# Buscar arquivos sem usuario
$ find / -path /proc -prune -o -nouser -ls

# Buscar arquivos sem grupo
$ find / -path /proc -prune -o -nogroup -ls
```

## Gerenciamento ssh

```bash
# Adiciona a key
$ ssh-keygen -t rsa -b 1024

# Habilita o processo
$ eval $(ssh-agent)

# Adiciona as identidades de password
$ ssh-add

# Remove as identidades de password
$ ssh-add -D
# OR
$ kill $SSH_AGENT_PID
```

## Deletar arquivos

```bash
# To zsh
$ setopt extendedglob

# Remove all files, except .env
$ rm -rf .^*env* *

# Remove all folders recusive and file except env.sh
$ rm -rf .* ^env.sh

# Remove all folders recusive and files except env.sh and script.sh
$ rm -rf .* ^(env.sh|script.sh)

# Remove all folders recusive and files except files with extension .env and .txt
$ rm -rf ^*.(env|txt)
```

## Verificar os servicos rodando

```bash

# List all services
$ systemctl -a

# Verify status
$ systemctl status <service>

# Stop service
$ systemctl status <service>

# Desable service inicialization
$ systemctl disable <service>
```

## Pacotes

```bash
# Matrix
$ apt-get install cmatrix

# Cowsay
$ apt-get install cowsay

# Cowsay grafic
$ apt-get install cowsay
```
