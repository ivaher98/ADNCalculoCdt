pipeline {
  agent any
  options {
  buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  tools {
    jdk 'JDK8_Centos'
  }

  stage('Checkout') {
      steps{
        echo "------------>Checkout<-----------"
        checkout scm
      }
    }
}