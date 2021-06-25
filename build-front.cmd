cd webpack-get-started && ^
npm start && ^
cd .. && ^
del src\main\webapp\react-app /q & ^
mkdir src\main\webapp\react-app & ^
copy webpack-get-started\dist\*.js src\main\webapp\react-app