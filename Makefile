server:
	LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll serve --watch --safe --trace

build:
	LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll build --safe --trace

preview: build
	rsync --recursive --progress _site/* web50@g3th.net:htdocs/p.writing.jan.io

.PHONY: build server preview