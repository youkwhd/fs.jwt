#!/bin/sh
# scuffed shell script but it works

URL="http://localhost:3000"

function usage() {
    echo "Usage: net.sh [--login | --content <token>]"
}

function login() {
    curl -X POST -H "Content-Type: application/json" "$URL/login" -d '{ "username": "youkwhd", "password": "youkwhd" }'
}

function get_content() {
    curl -X GET -H "Authorization: Bearer $2" "$URL/content"
}

case $1 in
    --login)
        login
        ;;
    --content)
        if [ -z "$2" ]; then
            usage
            exit
        fi

        content
        ;;
    *)
        usage
        ;;
esac