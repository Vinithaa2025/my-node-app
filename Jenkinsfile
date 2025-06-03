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
                echo 'Releasing the application...'
                // Generate release tag using timestamp
                bat '''
                FOR /F "tokens=1-4 delims=/ " %%a in ('date /t') do (
                    SET mydate=%%d-%%b-%%c
                )
                FOR /F "tokens=1 delims= " %%a in ('time /t') do (
                    SET mytime=%%a
                )
                git tag "release-%mydate%_%mytime%"
                git push origin --tags
                '''
            }
        }
    }
}



