PATH=/opt/node_globals:$PATH
pm2 start npm -n "gladius" -- run start

