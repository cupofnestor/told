#!/bin/bash
PATH=/usr/local/bin:/bin:/usr/bin:/sbin:/usr/sbin export PATH
D=`dirname $0`
cd "$D/app"
python -m SimpleHTTPServer
