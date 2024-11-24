#!/usr/bin/env bash
# ==============================================
# evpl auth
# ==============================================

# Get path for THIS script
SCRIPT_PATH=$(pwd -P)
cd ${SCRIPT_PATH}

docker stop portfolio
docker rm portfolio 
docker rmi portfolio 
docker build -t portfolio .
docker run \
    --name portfolio \
    -d \
    -p 0.0.0.0:5175:5175 \
    --restart unless-stopped \
    portfolio
