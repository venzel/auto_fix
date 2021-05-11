# #!/usr/bin/env bash
# set -eu
# mongo -- "$MONGO_DB" <<EOF
#     var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
#     var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
#     var admin = db.getSiblingDB('admin');
#     admin.auth(rootUser, rootPassword);

#     var user = '$MONGODB_USER';
#     var passwd = '${MONGODB_PASSWORD}' || user;

#     db.createUser({user: user, pwd: passwd, roles: [{ role: 'readWrite', db: 'autofix' }]});
# EOF