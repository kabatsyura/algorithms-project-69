install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npm test

test-watch:
	npm run test -- --watch

test-coverage:
	npm test --coverage