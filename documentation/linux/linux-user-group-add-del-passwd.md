# GERENCIADOR DE USUARIOS E GRUPOS

> **Atencao:** desconsidere o uso de acentos

### [SUDO]

> __Documentacao__: [youtube.com...](https://www.youtube.com/watch?v=aTbEhjvlmxg)

### Para editar o arquivo de configuracao do sudo
```bash
$ sudo visudo
```

## [PASSWD]

### Exibe todos os usuarios do sistema

```bash
$ cat /etc/passwd

root:x:10:20:desc:/proot:/bin/bash
```

### Filtra usuario(s)

```bash
$ /etc/passwd | grep <nome_usario>

root:x:10:20:desc:/proot:/bin/bash

# OPCAO
  # root => nome do usuario
  # x => indica que a senha esta criptografada aponta para /etc/shadow
  # 10 => uid do usuario
  # 20 => gid do grupo
  # desc => comentario opcional
  # proot => pasta pessoal
  # /bin/bash => shell padrao do usuario
```

## [SHADOW]

### Visualiza informacoes detalhadas de cada usuario, conf senha e etc

```bash
$ cat /etc/shadow
```

### Filtra usuario(s)

```bash
$ cat /etc/shadow | grep <nome_usuario>

cintia:!$6$43/:17830:0:99999:7::18383:

# OPCAO
  # cintia => nome do usuario
  # ! => indica que a senha estah bloqueada
  # $6$43 => senha criptografada (obs: eh maior, soh resumi)
  # 17830 => dias de alteracao da senha
  # 0 => dias minimos que a senha pode ser alterada
  # 99999 => dias para a senha sera alterada
  # 7 => dias para expiracao da senha
  # 18383 => soma de dias para expiracao da senha
```

## [CONFIGURACOES]

### Configuracao importante, edite o arquivo abaixo para criar a pasta home

```bash
$ nano /etc/login.defs

  # INSERE
  CREATE_HOME yes
```

## [ADD]

### Adiciona usuario

> Soh cria a pasta com a flag -d, porque acima foi configurado o create_home

```bash
$ useradd \
  -c "<comentario>" \
  -G <nome_grupo> \
  -d /mnt/users/<nome_usuario> \
  -s /bin/sh \
  <nome_usuario> \
```

## [USERDEL]

### Remove usuario e a flag -r serve para remover todos os arquivos.

> OBS: normal uma msg de email

```bash
$ userdel -r <nome_usuario>
```

## [PASSWD]

### Altera a senha do usuario

```bash
$ passwd <nome_usuario>
```

### Bloqueia a senha do usuario

```bash
$ passwd -l <nome_usuario>
```

### Desbloqueia a senha do usuario

```bash
$ passwd -u <nome_usuario>
```

### Remove senha de usuario, podendo apenas fazer o login atraves da chave publica

```bash
$ passwd -d <nome_usuario>
```

## [USERMOD]

> Documentacao: http://guialinux.uniriotec.br/usermod/

### Adiciona o usuario ao grupo sudo

```bash
$ usermod -aG sudo <nome_usuario>
```

### Adiciona o usuario ao grupo docker

```bash
$ usermod -aG docker <nome_usuario>
```

### Altera o shell do usuario, removendo o login, serve para tunelamento

```bash
$ usermod -s /usr/sbin/nologin <nome_usuario>
```

### Altera a pasta padrao do usuario

```bash
$ usermod -d <caminho_pasta> <nome_usaurio>
```

### Altera a expiracao da senha

```bash
$ usermod -e yyyy/mm/dd <nome_usuario>
```

## [GROUP]

### Exibe todos os grupos

```bash
$ cat /etc/group

sudo:x:27:mago,tiago

# OPCAO
  # sudo => nome do grupo
  # x => senha do grupo criptografada, faz um apontamento para o /etc/gshadow
  # 27 => gid ou id do grupo
  # mago,tiago => membros do grupo separados por virgula
```

### Adiciona um grupo

```bash
$ groupadd <nome_grupo>
```

### Exibe em quais grupos um usuario estah

```bash
$ groups <nome_usuario>
```

### Adicionar usuario existe a um grupo existente tambem

> **OBS:** o grupo da pasta home nao eh alterado

```bash
$ gpasswd -a <nome_usuario> <nome_grupo>
```

### Exibe os usuarios de um grupo especifico

```bash
$ groupmems -g <nome_grupo> -l
```

### Remove usuario de um grupo

```bash
$ gpasswd -d <nome_usuario> <nome_grupo>
```

### Adiciona permissoes no wodpress

> **OBS:** necessario ser root

```bash
# Adiciona o user loga ao grupo www-data
$ usermod -aG www-data $USER

# Seta a pasta www como propriedade do www-data
$ chown -R www-data:www-data /var/www

# Seta a permissao 774, apenas o usuario do grupo ter acesso a pasta
$ chmod -R 774 /var/www
```
