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
<<<<<<< HEAD:Jenkinsfile.groovy
  }

}
=======
}
>>>>>>> 70733eeb448d633cc20227e13386baf28960925d:Jenkinsfile
