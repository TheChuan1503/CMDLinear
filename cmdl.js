/**
 * CMDLinear Command Line Interpreter
 * Auther    1503Dev
 * Version   2
 * License   MIT LICENSE
 */

class CMDL {
    constructor(commandLine, commandHeader = "") {
        this.__header = commandHeader;
        return this.__parse(commandLine, this);
    }
    __parse(commandLine, cmdl) {
        const args = [];
        let currentArg = '';
        let inQuotes = false;
        let skipSpaces = false;
        if (cmdl.__header !== "") {
            if (commandLine.substring(0, cmdl.__header.length) === cmdl.__header) {
                commandLine = commandLine.substring(cmdl.__header.length);
            } else return null;
        }
        for (let i = 0; i < commandLine.length; i++) {
            const char = commandLine[i];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ' ' && !inQuotes) {
                if (!skipSpaces) {
                    if (currentArg) {
                        args.push(currentArg);
                        currentArg = '';
                    }
                    skipSpaces = true;
                }
            } else {
                currentArg += char;
                skipSpaces = false;
            }
            if (i === commandLine.length - 1) {
                args.push(currentArg);
            }
        }
        if (args[args.length - 1] === "" || args[args.length - 1] === " ") {
            args.pop();
        }
        const cmd = args.shift();
        if (cmd === undefined) {
            return null;
        }
        return {
            header: cmdl.__header,
            cmd,
            args,
            toString: function() {
                let str = this.header + this.cmd;
                for (let i = 0; i < this.args.length; i++) {
                    if (this.args[i].indexOf(' ') === -1) {
                        str += ' ' + this.args[i];
                    } else {
                        str += ' "' + this.args[i] + '"';
                    }
                }
                return str;
            }
        }
    }
}