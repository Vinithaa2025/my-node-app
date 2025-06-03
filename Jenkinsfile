pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }

    stage('Code Quality Analysis') {
      steps {
        echo 'Running ESLint for code quality check...'
        bat 'npm run lint'
      }
    }
  }
}
