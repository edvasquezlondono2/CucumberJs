const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: "http://192.168.2.75:9000/sonar/",
        options: {
            "sonar.projectVersion": "1.1.0",
            "sonar.sources": "src",
            "sonar.typescript.lcov.reportPaths": "$WORKSPACE/coverage/lcov.info"
        },
    },
    () => {
        
    }
);