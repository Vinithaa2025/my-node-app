pipeline {
  agent any 
  tools { nodejs "node12" } 
  environment {
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    APP_IMAGE = "yourdockerhubuser/my-node-app"
  }
  stages {
    stage('Build') {
      steps {
        echo 'Installing and building Node app...'
        sh 'npm install'
        // If you have a build step (e.g. webpack), include it here
        // sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        echo 'Running tests with Jest...'
        sh 'npm test'
      }
    }
    stage('Code Quality') {
      steps {
        echo 'Running SonarQube analysis...'
        withSonarQubeEnv('sonar') {
          sh 'sonar-scanner -Dsonar.projectKey=my-node-app -Dsonar.sources=.'
        }
      }
    }
    stage('Docker Build') {
      steps {
        echo 'Building Docker image...'
        sh "docker build -t ${APP_IMAGE}:${IMAGE_TAG} ."
      }
    }
    stage('Security Scan') {
      steps {
        echo 'Scanning Docker image with Trivy...'
        // Pull Trivy image and run scan (mount Docker socket for host images)
        sh """
          docker run --rm \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -v $HOME/.trivy-cache:/root/.cache/ \
            aquasec/trivy image --exit-code 0 --severity HIGH,CRITICAL \
            ${APP_IMAGE}:${IMAGE_TAG} > trivy-report.txt
        """
      }
    }
    stage('Push to Docker Hub') {
      steps {
        echo 'Pushing image to Docker Hub...'
        withCredentials([string(credentialsId: 'docker-hub-token', variable: 'DOCKER_PASS'),
                         usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_TOKEN')]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
          sh "docker push ${APP_IMAGE}:${IMAGE_TAG}"
        }
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying application (via Docker Compose on target host)...'
        sshagent(credentials: ['ssh-deploy-key']) {
          sh """
            ssh -o StrictHostKeyChecking=no user@your.server.ip '
              cd /path/to/deployment && \
              docker-compose pull && \
              docker-compose up -d
            '
          """
        }
      }
    }
    stage('Monitor') {
      steps {
        echo 'Tagging pipeline run for Datadog...'
        // Add a Datadog tag (requires Datadog Jenkins plugin)
        datadog {
          // optional: set tags or environment
          tags('project:my-node-app', 'environment:dev')
        }
      }
    }
  }
  post {
    always {
      // Archive Trivy report for review
      archiveArtifacts artifacts: 'trivy-report.txt', allowEmptyArchive: true
    }
  }
}

