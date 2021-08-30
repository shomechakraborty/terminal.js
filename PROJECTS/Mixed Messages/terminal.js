const terminal = {
    'Directories': {
        'Welcome': {
            'Helloworld'
        },
    },
    'workingDirectory': this.Directories.Welcome,
    'stagingArea': [],
    'commitedItems': [],
    'HEAD': this.commitedItems[this.commitedItems.length - 1];
    pwd() {
        return this.workingDirectory;
    },
    mkdir(directory) {
        this.Directories.push(directory {

        }, )
    },
    cd(directory) {
        if (this.Directories.directory === true) {
            this.workingDirectory: directory;
        } else {
            return 'No such directory exists.'
        }
    },
    touch(file) {
        let directory = this.workingDirectory;
        directory.push(file);
    },
    ls() {
        let directory = this.workingDirectory;
        return directory;
    },
    gitAdd(file) {
        let directory = this.workingDirectory;
        if (directory.file === true) {
            this.stagingArea.push(file);
        }
    },
    gitAddDot() {
        let directory = this.workingDirectory;
        this.stagingArea.push(directory);
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
        return `Changes to be commited: ${trackedList}. Untracked items: ${untrackedList}`;
    },
    gitResetHEAD() {
        for (i = this.stagingArea.length; i > 0; i--) {
            this.stagingArea.shift();
        }
    },
    gitCommit(Message) {
        let SHA = 0
        for (i = 0; i < 7; i++) {
            SHA += Math.floor(Math.random() * 9);
        }
        let itemsCommited = this.stagingArea;
        this.commitedItems.push({
            Message,
            SHA,
            itemsCommited
        })
        this.gitResetHEAD()
        this.HEAD: this.commitedItems[this.commitedItems.length - 1]
    },
    gitLog() {
        return this.commitedItems
    },
    gitReset(SHA) {
        for (const commitedObject of this.commitedItems) {
            if (commitedObject.SHA === SHA) {
                this.HEAD: commitedObject;
            }
        }
    }
}