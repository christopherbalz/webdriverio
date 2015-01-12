BIN = ./node_modules/.bin

install:
	-@npm install
	$(bash cd test/site/www; bower install)

start-serv:
	-@$(BIN)/start-selenium &
	-@$(BIN)/http-server -p 8080

test-desktop:
	-@npm run-script test-desktop

kill-sel:
	-@curl http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
