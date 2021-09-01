const terminal = {
    'Directories': {
        'Welcome': {
            'Helloworld': null
        }
    },
    'workingDirectory': this.Directories.Welcome,
    'stagingArea': [],
    'commitedItems': [],
    'HEAD': this.commitedItems[this.commitedItems.length - 1],
    'workingFile': '',
    pwd() {
        return this.workingDirectory;
    },
    mkdir(directory) {
        this.Directories.push(directory = {

        }, )
    },
    removeDirectory(directory) {
        if (this.Directories.directory === true) {
            directory.remove();
        }
    },
    cd(directory) {
        if (this.Directories.directory === true) {
            this.workingDirectory = directory;
        } else {
            return 'No such directory exists.'
        }
    },
    touch(file) {
        let directory = this.workingDirectory;
        directory.push(file);
    },
    removeFile(file) {
        let directory = this.workingDirectory
        if (directory.file === true) {
            file.remove();
        }
    },
    ls() {
        let directory = this.workingDirectory;
        return directory;
    },
    addWorkingFile(file) {
        this.workingFile = file
        let directory = this.workingDirectory;
        directory.push(file);
    }
    gitAdd(file) {
        let directory = this.workingDirectory;
        if (directory.file === true) {
            this.stagingArea.push(file);
        }
    },
    gitAddDot() {
        let directory = this.workingDirectory;
        for (const file of directory) {
            this.stagingArea.push(file);
        }
    },
    gitStatus() {
        let trackedList = this.stagingArea;
        let untrackedList = [];
        for (const directory of this.directories) {
            for (const file of directory) {
                if (!this.stagingArea.includes(file)) {
                    untrackedList.push(file);
                }
            }
        }
        return `Changes to be committed: ${trackedList}. Untracked items: ${untrackedList}`;
    },
    gitResetHEAD() {
        for (let i = this.stagingArea.length; i > 0; i--) {
            this.stagingArea.shift();
        }
    },
    gitCommit(Message) {
        let SHA = 0
        for (let i = 0; i < 7; i++) {
            SHA += Math.floor(Math.random() * 9);
        }
        let filesCommited = this.stagingArea;
        this.commitedItems.push({
            Message,
            SHA,
            filesCommited
        })
        this.gitResetHEAD()
        this.HEAD = this.commitedItems[this.commitedItems.length - 1]
    },
    gitCheckoutHEAD() {
        let lastCommit = this.commitedItems[this.commitedItems.length - 1];
        for (const file of lastCommit) {
            if (file === this.workingFile) {
                this.workingFile = file;
            }
        }
    },
    gitLog() {
        return this.commitedItems
    },
    gitReset(SHA) {
        for (const commitedObject of this.commitedItems) {
            if (commitedObject.SHA === SHA) {
                this.HEAD = commitedObject;
            }
        }
    }
}

