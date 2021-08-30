const terminal = {
    'Directories': {
        'Directory1': 'Welcome',
    },
    'Files': {
        this.Directories.Directory1: 'HelloFile',
    },
    'workingDirectory': this.Directories.Directory1,
    'stagingArea': [],
    'commitedItems': [],
    pwd() {
        return this.workingDirectory;
    },
    mkdir(directory) {
        let numOfDirectories = Object.entries(this.Directories).length;
        this.Directories.push('Directory' + numOfDirectories: directory)
    },
    cd(directory) {
        for (const [key, value] in Object.entries(this.Directories)) {
            if (value === directory) {
                this.workingDirectory: value
            }
        }
    },
    touch(file) {
        this.Files.push(this.workingDirectory: file)
    },
    ls() {
        let returnList = [];
        for (const [key, value] in Object.entries(this.Files)) {
            if (key === this.workingDirectory) {
                returnList.push(value);
            }
        }
        return returnedList;
    },
    gitAdd(file) {
        for (const [key, value] in Object.entries(this.Files)) {
            if (key === this.workingDirectory && value === file) {
                this.stagingArea.push(value);
            }
        }
    },
    gitAddDot() {
        for (const [key, value] in Object.entries(this.Files)) {
            if (key === this.workingDirectory) {
                this.stagingArea.push(value);
            }
        }
    },
    gitStatus() {
        let trackedList = this.stagingArea;
        let untrackedList = [];
        for (const [key, value] in Object.entries(this.Files)) {
            if (!this.stagingArea.includes(value)) {
                untrackedList.push(value);
            }
        }
        return `Tracked items: ${trackedList}. Untracked items: ${untrackedList}.`;
    },
    gitResetHEAD() {
        for (const [key, value] in Object.entries(this.Files)) {
            if (key === this.workingDirectory && this.stagingArea.includes(value)) {
                this.stagingArea.shift();
            }
        }
    }
}