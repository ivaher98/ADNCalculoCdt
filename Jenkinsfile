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
     stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
        sh 'npm run e2e'
      }
    }

  stage('Static Code Analysis') {
    steps{
        withSonarQubeEnv('Sonar'){
          sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
        }
    }
    steps{
      sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:[calculocdt.front.ivan.hernandez]', 
      sonarName:'ADN-CalculoCdtFront(ivan.hernandez)', 
      sonarPathProperties:'./sonar-project.properties')
    }
} 

  }
  
}
