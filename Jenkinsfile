pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'npm i'
      }
    }
    stage('Test') {
      steps {
        parallel(
          "Test": {
            sh 'npm t'
            
          },
          "lint": {
            sh 'npm run lint'
            
          }
        )
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}