# Kubernetes Deployment for Your Services

This repository contains Kubernetes manifests for deploying the following services:
- **Personal Website (11000_personal-website)**
- **AnythingLLM (11002_anythingllm)**
- **Code Server (11003_code-server)**
- **n8n (11004_n8n)**
- **Open-WebUI (11006_open-webui)**
- **OpenHands (11010_openhands)**
- **Watchtower (11103_watchtower)**
- **LiteLLM (11012_litellm)**

## Files

- **k8s/all-resources.yaml**: Contains all Kubernetes resources (Deployments, Services, PVCs).
- **run-k8s.bat**: A Windows batch script to deploy all resources.
- **README.md**: This file.

## Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured to access your cluster.
- A running Kubernetes cluster.
- (Optional) Adjust hostPath volume paths in the YAML as needed for your environment.

## How to Deploy

1. Open a terminal (or Command Prompt if on Windows).

2. Apply the Kubernetes resources:
   ```bash
   kubectl apply -f k8s/all-resources.yaml
   ```

3. To verify the deployments:
   ```bash
   kubectl get deployments
   kubectl get services
   ```

## How to Use the Batch Script (Windows)

Simply double-click the **run-k8s.bat** file or run it from the Command Prompt:
   ```cmd
   run-k8s.bat
   ```

This script applies the manifests automatically.

## Notes

- **Persistent Storage**: The YAML defines PersistentVolumeClaims. You may need to configure your storage class or adjust sizes based on your requirements.
- **HostPath Volumes**: Some services (like OpenHands and Watchtower) use hostPath volumes. Make sure the paths exist on your host system and have the proper permissions.
- **Environment Variables**: Verify that the environment variables match your production settings.
- **Security Settings**: Some containers (e.g., AnythingLLM) require additional capabilities (like SYS_ADMIN). Ensure your cluster’s security policies allow these settings.

For more details on Kubernetes Deployments and Services, please refer to the [[Kubernetes Deployments documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) citek8s-deployment-doc and the [[Kubernetes Services documentation](https://kubernetes.io/docs/concepts/services-networking/service/)](https://kubernetes.io/docs/concepts/services-networking/service/) citek8s-service-doc.
