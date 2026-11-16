pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'node --check server.js'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t smartlibrary .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop smartlibrary || true'
                sh 'docker rm smartlibrary || true'
                sh 'docker run -d --name smartlibrary -p 3000:3000 smartlibrary'
            }
        }
    }
}