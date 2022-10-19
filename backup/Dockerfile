FROM ubuntu:20.04
SHELL ["/bin/bash", "-c"]

ENV DEBIAN_FRONTEND=noninteractive

RUN \
  apt-get update \
    && apt-get -y install curl \
    && apt-get -y install vim


RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
COPY ./install-node.sh /tmp
RUN /bin/bash /tmp/install-node.sh

EXPOSE 8080
CMD /bin/bash
