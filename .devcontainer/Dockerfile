FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

## Add sources
RUN :> /etc/apt/sources.list && \
    echo "deb http://deb.debian.org/debian bullseye main contrib non-free" >> /etc/apt/sources.list && \
    echo "deb http://deb.debian.org/debian-security/ bullseye-security main contrib non-free" >> /etc/apt/sources.list && \
    echo "deb http://deb.debian.org/debian bullseye-updates main contrib non-free" >> /etc/apt/sources.list && \
    apt-get update -y

## Install open-jtalk
RUN apt-get install -y open-jtalk open-jtalk-mecab-naist-jdic hts-voice-nitech-jp-atr503-m001

## Install HTS Voice Mei
RUN wget --no-check-certificate http://sourceforge.net/projects/mmdagent/files/MMDAgent_Example/MMDAgent_Example-1.8/MMDAgent_Example-1.8.zip \
    && unzip MMDAgent_Example-1.8.zip \
    && cp -r MMDAgent_Example-1.8/Voice/mei/ /usr/share/hts-voice/ \
    && rm -rf MMDAgent_Example-1.8.zip MMDAgent_Example-1.8

## Install HTS Voice tohoku-f01
RUN git clone --depth 1 https://github.com/icn-lab/htsvoice-tohoku-f01 /usr/share/hts-voice/tohoku-f01
