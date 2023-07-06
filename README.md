# mbo_kube_tp

![Nice architecture](./assets/do3-kube-archi.png)

# Frontend

## Build l'image

```bash
cd ./front-end
docker build -t next-front .
```

## Push image

```bash
//TODO
```

## Deploy image

```bash
kubectl apply -f ./infra/deployment.yaml
```

Then you can access the service through a port forward

```bash
kubectl get pods # Keep the pod name
kubectl port-forward <pod_name> 3000:3000
```
