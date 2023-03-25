# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# configure minio client (mc) 
# RUN sudo apt-get update && apt-get install -y wget
# RUN wget https://dl.min.io/client/mc/release/linux-amd64/mc
# RUN sudo chmod +x mc
# RUN sudo mv mc /usr/local/bin/mc
# RUN mc config host add minio http://minio:9000 minio minio123
# RUN mc alias set minio http://minio:9000 minio minio123
# RUN mc mb minio/salkood --ignore-existing

# create a .tmp folder for the minio client to use
