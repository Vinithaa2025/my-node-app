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
        stage('Monitoring and Alerting') {
    steps {
        echo 'Simulating monitoring check...'
        script {
            // Simulated metric check
            def cpuUsage = new Random().nextInt(100)
            echo "CPU usage: ${cpuUsage}%"

            if (cpuUsage > 85) {
                echo '⚠️ High CPU usage detected! Sending alert...'
                writeFile file: 'alert.log', text: "High CPU usage detected during build: ${cpuUsage}%"
                // Optionally: fail the build if usage is too high
                // error("CPU usage too high: ${cpuUsage}%")
            } else {
                echo '✅ CPU usage within normal range.'
            }
         }
       }
      }
    }
}



