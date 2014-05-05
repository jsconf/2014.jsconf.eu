server:
	LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll serve --watch --safe --trace

build:
	LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll build --safe --trace

.PHONY: build server preview