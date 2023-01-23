avec kubernetes

#dans dcoker_tp (pwd ......./docker_tp)
minikube start
#changer le shell en fonction du S.E
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

#build les images en local
docker build . -f Dockerfile.api -t react-flask-app-api --no-cache
docker build . -f Dockerfile.client -t react-flask-app-client --no-cache

#déployement
kubectl get all;
kubectl delete -f composeFiles/linked.yaml; 
kubectl create -f composeFiles/linked.yaml; 

#démarre les services deployés
minikube service --all

kubectl port-forward service/client 80:3000

-----------------------------------------------------------------------------------------------

avec docker-compose

docker-compose build 
docker-compose up