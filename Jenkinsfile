node('node') {
	currentBuild.result = "SUCCESS"

	try {

		stage 'Checkout'
			checkout scm

		stage 'Test'
			env.NODE_ENV = "test"
			print "Environment will be : ${env.NODE_ENV}"
			sh 'node -v'
			sh 'npm prune'
			sh 'npm install'
			sh 'npm test'
	}

	catch (err) {
		currentBuild.result = "FAILURE"

		mail body: "project build error is here: ${env.BUILD_URL}" ,
		from: 'xxxx@yyyy.com',
		replyTo: 'yyyy@yyyy.com',
		subject: 'project build failed',
		to: 'zzzz@yyyyy.com'

		throw err
	}

}