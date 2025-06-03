pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running Build Stage...'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
    }
}
