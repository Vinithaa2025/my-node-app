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
                bat 'echo "Deploy successful! (simulation)"'
            }
        }

        stage('Release') {
    steps {
        echo 'Generating local release metadata...'
        script {
            def timestamp = new Date().format("yyyy-MM-dd_HH-mm-ss")
            writeFile file: "release-${timestamp}.txt", text: "Release generated at ${timestamp}\nVersion: 1.0.0\nStatus: Ready for production"
        }
        echo 'Release file created successfully.'
        }
      }
    }
}



