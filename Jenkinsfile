@Library('ceiba-jenkins-library') _

pipeline {
  agent any

  tools {
    jdk 'JDK8_Centos'
  }

  stages{

  stage('Checkout') {
      steps{
        checkout scm
      }
    }
    stage('NPM Install') {
      steps {
        sh 'npm install'
      }
    }
  stage('Static Code Analysis') {
    steps{
        sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:calculocdt.front.ivan.hernandez', 
        sonarName:'ADN-CalculoCdtFront(ivan.hernandez)', 
        sonarPathProperties:'./sonar-project.properties')
    }
} 

  }
  
}
