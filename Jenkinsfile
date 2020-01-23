pipeline {
	agent none
	stages {
		stage('Build') {
			parallel {
				stage('Unix') {
					agent { label 'net-core' }
					stages {
						stage('Components') {
							steps {
								sh 'yarn install'
							}
						}
					}
				}
				stage('Windows') {
					agent { label 'master' }
					stages {
						stage('Components') {
							steps {
								bat 'yarn install'
							}
						}
					}
				}
			}
		}
		stage('Test') {
			when { expression { return env.CHANGE_ID; } }
			parallel {
				stage('Unix') {
					agent { label 'net-core' }
					steps {
						sh "yarn install && yarn test:coverage --ci --reporters=default --reporters=jest-junit || true"
					}
					post {
						success {
							junit 'junit.xml'
							publishHTML target: [
								allowMissing         : false,
								alwaysLinkToLastBuild: false,
								keepAll             : true,
								reportDir            : 'coverage/lcov-report',
								reportFiles          : 'index.html',
								reportName           : 'Unix Test Report'
							]
							publishCoverage adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')]
						}
					}
				}
				stage('Windows') {
					agent { label 'master' }
					steps {
						bat "yarn install && yarn test:coverage --ci --reporters=default --reporters=jest-junit || true"
					}
					post {
						success {
							junit 'junit.xml'
							publishHTML target: [
								allowMissing         : false,
								alwaysLinkToLastBuild: false,
								keepAll             : true,
								reportDir            : 'coverage\\lcov-report',
								reportFiles          : 'index.html',
								reportName           : 'Windows Test Report'
							]
						}
					}
				}
			}
		}
		stage('Notify') {
			when { expression { return env.CHANGE_ID } }
			agent { label 'net-core' }
			options { skipDefaultCheckout() }
			environment {
				Telegram_Token = credentials('telegram_token')
				Chat_Id = credentials('telegram_chat')
			}
			steps {
				sh 'curl -s -X GET -G "https://api.telegram.org/bot$Telegram_Token/sendMessage" --data-urlencode "chat_id=$Chat_Id"  --data "text=CHANGE URL:$CHANGE_URL %0A Build Url: $BUILD_URL %0A Branch Name:$CHANGE_TITLE"'
			}
		}
    }
}