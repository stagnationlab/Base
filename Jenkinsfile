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
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('test') {
      steps {
        sh 'npm t'
      }
    }
    stage('report') {
      steps {
        junit 'test-report.xml'
        archiveArtifacts '/build'
      }
    }
  }
  environment {
    CI = 'true'
  }
}