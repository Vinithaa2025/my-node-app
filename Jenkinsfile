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

        stage('Security') {
            steps {
                echo 'Running npm audit for security checks...'
                bat 'npm audit --audit-level=low'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Simulate deployment
                bat 'echo "Deploy successful! (simulation)"'
                // Example of real deployment step:
                // bat 'scp -r * user@yourserver:/var/www/yourapp'
            }
        }
    }
}


