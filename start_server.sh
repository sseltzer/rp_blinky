PATH=/opt/node_globals:$PATH
pm2 start npm -n "rp_blinky" -- run start

