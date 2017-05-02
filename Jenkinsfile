pipeline {
  agent {
    docker {
      image 'node:6'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'sudo npm i'
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