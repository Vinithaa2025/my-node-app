pipeline {
  agent any

  tools {
    nodejs "node12"  // Make sure this tool is set in Global Tool Configuration
  }

  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing npm dependencies...'
        bat 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }

    stage('Build Project') {
      steps {
        echo 'Building the project...'
        // Add this only if your package.json has a build script
        // bat 'npm run build'
      }
    }

    // Optional placeholder for future stages
    // You can uncomment and use these later when Docker, Sonar, or Trivy are ready

    // stage('Code Quality') {
    //   steps {
    //     echo 'Run SonarQube scan here...'
    //   }
    // }

    // stage('Security Scan') {
    //   steps {
    //     echo 'Run Trivy scan here...'
    //   }
    // }

    // stage('Deploy') {
    //   steps {
    //     echo 'Deploy step goes here...'
    //   }
    // }
  }

  post {
    always {
      echo 'Pipeline execution completed.'
    }
  }
}


