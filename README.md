build docker image command:
docker build . -t image_server_authentication:v.0.1.0  

run docker container:
docker run -d -p 3000:3000 -p 5432:5432 --name container_server_authentication image_server_authentication


local postgresql
superuser: postgres
password : admin