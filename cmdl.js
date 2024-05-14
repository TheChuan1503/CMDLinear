const cmdl = {
    version: 1,
    auther: "1503Dev",
    parse: function(commandLine) {
        const args = [];
        let currentArg = '';
        let inQuotes = false;
        let skipSpaces = false;
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
        return {
            cmd,
            args,
            toString: function() {
                var str = "";
                str += this.cmd;
                for (var i = 0; i < this.args.length; i++) {
                    if (this.args[i].indexOf(" ") === -1) {
                        str += ' ' + this.args[i];
                    } else {
                        str += ' "' + this.args[i] + '"';
                    }
                }
                return str;
            }
        };
    },
    toString: function(obj) {
        if (Array.isArray(obj)) {
            var str = "";
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].indexOf(" ") === -1) {
                    str += ' ' + obj[i];
                } else {
                    str += ' "' + obj[i] + '"';
                }
            }
            if (str.substring(0, 1) === " ") {
                str = str.substring(1);
            }
            return str;
        } else {
            return obj.toString();
        }
    }
}