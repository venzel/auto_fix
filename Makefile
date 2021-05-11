include .env

.PHONY: setup

setup:
	rm -rf ./dist && yarn build && chown -R ${USER}:${USER} ./dist && ./scripts/path-resolve.sh && ./scripts/docker-setup.sh

.PHONY: release

release:
	GITHUB_TOKEN=${GITHUB_TOKEN} yarn release

.PHONY: git

git:
	yarn fix && git add --all && yarn cz && git push

.PHONY: test

test:
	yarn test

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: dev

dev:
	yarn dev