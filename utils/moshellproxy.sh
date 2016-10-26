#!/bin/sh
# vim:ft=sh

DIR=`dirname $0`
IP=`echo $1 | sed -e 's/^.*?//g'`
eval $($DIR/startsshagent)

ssh -t eyinyin@10.186.140.177 "/app/moshell/latest/moshell/moshell $IP"
