FROM oraclelinux:7-slim

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yum update -y && \
  yum install -y oracle-release-el7 && \
  yum install -y oracle-nodejs-release-el7 && \
  yum install -y nodejs && \
  yum install -y oracle-instantclient19.3-basic.x86_64 && \
  yum clean all

RUN npm i

CMD ["npm", "run", "start"]