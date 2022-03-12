pipeline {
  agent any
  options {
  buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  tools {
    jdk 'JDK8_Centos'
  }
  stages{
  stage('Checkout') {
      steps{
        echo "------------>Checkout<-----------"
        checkout scm
      }
    }
  }

}