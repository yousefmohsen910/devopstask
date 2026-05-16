# DevOps Assessment

This project uses Docker, Docker Compose, Nginx, Nexus, Jenkins, and Kubernetes.

## Application

The application is a small Node.js Express app.

## Docker

The app is containerized using Node Alpine.

The app does not run as root.

## Reverse Proxy

Nginx is used as the reverse proxy.

The app is not directly exposed.

Only Nginx is exposed on:

http://localhost:8080

## Run Everything

```bash
docker compose up -d --build
Services

Application:

http://localhost:8080

Nexus:

http://localhost:8081

Jenkins:

http://localhost:8085

Jenkins Pipeline

The pipeline is defined in:

Jenkinsfile

It builds the Docker image, tests the app, and pushes the image to Nexus.

Kubernetes

Namespace:

devops-assessment

Apply:

kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

NodePort:

30080
EOF

Creates README explaining how to run the project.

```bash
cd assessment

Moves into assessment folder.

docker compose up -d --build

Builds and starts all containers.

curl http://localhost:8080

Tests the app through Nginx.

cd ..

Goes back to repo root.

git status

Shows changed files.

git add assessment

Stages assessment files.

git commit -m "Add DevOps assessment setup"

Saves your work in Git.

git push
