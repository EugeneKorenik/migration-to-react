mvn clean install && ^
del apache-tomcat\webapps\ROOT.war /q && ^
del apache-tomcat\webapps\ROOT /q && ^
copy target\migration-to-react.war apache-tomcat\webapps && ^
ren apache-tomcat\webapps\migration-to-react.war ROOT.war && ^
.\apache-tomcat\bin\startup.bat