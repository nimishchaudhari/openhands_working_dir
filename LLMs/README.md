# CoAI Kubernetes Deployment

This directory contains the Kubernetes manifests for deploying CoAI.

## Deployment

To deploy CoAI, run the following command:

```bash
./deploy.sh
```

## Configuration

The deployment can be configured by modifying the `coai-deployment.yaml` and `coai-service.yaml` files.

## Verification

To verify the deployment, run the following commands:

```bash
kubectl get pods
kubectl get svc
```
