avec kubernetes

#dans dcoker_tp (pwd ......./docker_tp)
```powershell
minikube start
```
#changer le shell en fonction du S.E
```powershell
& minikube -p minikube docker-env --shell powershell | Invoke-Expression
```

#build les images en local
```powershell
docker build . -f Dockerfile.api -t react-flask-app-api --no-cache
docker build . -f Dockerfile.client -t react-flask-app-client --no-cache
```
#déployement
```powershell
kubectl get all;
kubectl delete -f composeFiles/linked.yaml; 
kubectl create -f composeFiles/linked.yaml; 
```

#démarre les services deployés
```powershell
minikube service --all
```
```powershell
kubectl port-forward service/client 80:3000
```
-----------------------------------------------------------------------------------------------

avec docker-compose

```powershell
docker-compose build;
docker-compose up
```
