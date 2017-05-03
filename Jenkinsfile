pipeline {
  agent {
    docker {
      image 'node:6'
      args '-u root'
    }

  }
  stages {
    stage('install') {
      steps {
        sh 'node -v'
        sh 'npm install'
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

    stage('Report') {
      publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: 'coverage/lcov-report',
        reportFiles: 'index.html',
        reportName: "Application Test Coverage"
      ])
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
  environment {
    CI = 'true'
  }
}