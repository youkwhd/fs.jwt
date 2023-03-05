#!/bin/sh
# scuffed shell script but it works

URL="http://localhost:3000"

function usage() {
    echo "Usage: net.sh [--login | --content <token>]"
}

function login() {
    curl -sS -X POST -H "Content-Type: application/json" "$URL/login" -d '{ "username": "youkwhd", "password": "youkwhd" }' > token.json
    echo "FILE token.json created"
}

function get_content() {
    curl -X GET -H "Authorization: Bearer $1" "$URL/content"
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

        get_content $2
        ;;
    *)
        usage
        ;;
esac