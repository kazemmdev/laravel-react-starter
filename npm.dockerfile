FROM node:14-alpine

ENV USER=node

# RUN addgroup ${USER} && adduser -S -G  ${USER}  ${USER}
RUN mkdir -p /app && chown -R  ${USER}:${USER} /app
USER ${USER}
WORKDIR /app

COPY --chown=${USER}:${USER} . .
