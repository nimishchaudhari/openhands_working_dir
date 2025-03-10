@echo off
echo Deploying Kubernetes resources...
kubectl apply -f k8s/all-resources.yaml
if %ERRORLEVEL% neq 0 (
    echo Failed to deploy Kubernetes resources.
    pause
    exit /b %ERRORLEVEL%
)
echo Kubernetes resources deployed successfully!
pause
