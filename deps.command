#!/bin/bash
PATH=/usr/local/bin:/bin:/usr/bin:/sbin:/usr/sbin export PATH
cd `dirname $0`
node install
bower install