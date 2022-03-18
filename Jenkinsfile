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
    stage("Test Unit"){
      steps{
        sh "npm run test"
      }
    }
  stage('Static Code Analysis') {
    steps{
        withSonarQubeEnv('Sonar'){
          sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
        }
      sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:[calculocdt.front.ivan.hernandez]', 
      sonarName:'ADN-CalculoCdtFront(ivan.hernandez)', 
      sonarPathProperties:'./sonar-project.properties')
    }
} 

  }
  
}
