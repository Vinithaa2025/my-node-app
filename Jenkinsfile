stage('Build') {
  steps {
    echo 'Installing dependencies...'
    sh 'npm install'
    echo 'Running build (if any)...'
    // If you have a build step, e.g. Webpack or transpilation:
    sh 'npm run build'
  }
}


