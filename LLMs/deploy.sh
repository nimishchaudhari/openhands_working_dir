#!/bin/bash

kubectl apply -f LLMs/coai-deployment.yaml
kubectl apply -f LLMs/coai-service.yaml

echo "CoAI deployed successfully!"
