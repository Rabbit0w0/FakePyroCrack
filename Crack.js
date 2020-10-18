//Fake program

const process = require('process'); 
const fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const output = fs.createWriteStream('./codes.txt');
const errorOutput = fs.createWriteStream('./codes.txt');
const {
    Console
} = require('console');
const logger = new Console({
    stdout: output,
    stderr: errorOutput
});

function log(msg) {
    console.log('\x1b[31m%s\x1b[0m', msg);
}

process.title = "PyroCrack 2.0 | Created by CmanBrine"

console.clear(1)
log(`
██████╗ ██╗   ██╗██████╗  █████╗        █████╗ ██████╗  █████╗  █████╗ ██╗  ██╗
██╔══██╗╚██╗ ██╔╝██╔══██╗██╔══██╗      ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝
██████╔╝ ╚████╔╝ ██████╔╝██║  ██║█████╗██║  ╚═╝██████╔╝███████║██║  ╚═╝█████═╝ 
██╔═══╝   ╚██╔╝  ██╔══██╗██║  ██║╚════╝██║  ██╗██╔══██╗██╔══██║██║  ██╗██╔═██╗ 
██║        ██║   ██║  ██║╚█████╔╝      ╚█████╔╝██║  ██║██║  ██║╚█████╔╝██║ ╚██╗
╚═╝        ╚═╝   ╚═╝  ╚═╝ ╚════╝        ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝
--------------------------------------------------------------------------------`)
logger.log(`If you have no codes, You either haven't run the program, or haven't let it run long enough. Please allow the program to fully run, it will AUTOMATICALLY stop itself when completed.
If PyroCrack finds Pyro gift codes, they will appear here.`)
log('To load PyroCrack, please type and enter the phrase: "/start"')
rl.on('line', (input) => {
    if (input === '/start') {
        rl.on('line', (input) => {
            if (input === '/start') {
                console.clear(1)
                log('YOU CAN NOT START TWICE!')
                setTimeout(() => {
                    close
                }, 2000);

            }
        })

        setTimeout(() => {
            logger.log(`Program has sucessfully uncovered a hidden gift key.
Newly Generated Gift Code: ` + fullstr(32) + `

To use this gift key, go to pyroclient.com, register, goto the purchase page, click "use key" and paste.`)
            setInterval(() => {
                console.clear(1)
                log(`
-----------------------------------------------------------------------------------------------------------------------
NEW PYRO GIFT CODE FOUND! (program took approx. 2 hours, 26 minutes, and 52 secconds.
CHECK THE FILE NAMED "codes.txt" AND COPY THE CODE, THEN GO TO PYROCLIENT.COM AND PASTE IT UNDER THE "USE A KEY" BUTTON.
-----------------------------------------------------------------------------------------------------------------------`)
            }, 1)
        }, 9000000);




        setTimeout(() => {
            log(`|============================---------[STARTUP]---------============================|`);
        }, 1200);



        setTimeout(() => {
            log(`[Information Thread] This code utilizes multiple CPU threads to locate server proxies.`);
        }, 3200);


        setTimeout(() => {
            log(`[Startup Advisor] Loading files. This should be very quick.`);
        }, 5200);


        setTimeout(() => {
            log(`<> Loading Config File...`);
        }, 7200);

        setTimeout(() => {
            log(`<> Loading External Code...`);
        }, 9200);

        setTimeout(() => {
            log(`<> Preparing To Ping Target...`);
        }, 11200);

        setTimeout(() => {
            log(`|========================--------[FINISHED STARTUP]--------========================|`);
        }, 13200);
        setTimeout(() => {
            log(`Setting up CPU threads. Loaded threads will be used to split up the workload.`);
        }, 15200);
        setTimeout(() => {
            threadstartup()
        }, 19000);


        const hfi = (22000)
        const ez = 19000
        const del = (hfi + ez)
        setTimeout(() => {
            log(`============================---------[175 THREADS LOADED]---------============================`)
        }, del);

        const poo = (2000)
        const ehru = (del + poo)


        setTimeout(() => {
            log('Be Advised, this process can take a long time. Do not close this program or restart your PC.')
        }, ehru);
        const gfh = (3000)
        const dd = (ehru + gfh)
        setTimeout(() => {
            log(`<> Lodaing Task...`)
        }, dd);
        const fff = (2000)
        const fh = (dd + fff)
        setTimeout(() => {
            log(`<> Initializing PayPal Crawler...`)
        }, fh);
        const dhf = (3000)
        const dj = (dhf + fh)
        setTimeout(() => {
            log(`<> Opening Connectiion...`)
        }, dj);
        const fgh = (10000)
        const fjfhjf = (fgh + dj)
        setTimeout(() => {
            log(`============================---------[PROCESS STARTED]---------============================`)
        }, fjfhjf);
        const rrr = (3400)
        const haa = (rrr + fjfhjf)
        setTimeout(() => {
            backdoor()
        }, haa);

        function str(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        function fullstr(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        function nums(length) {
            var result = '';
            var characters = '123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }




        function threadstartup() {
            for (let i = 0; i < 175; i++) {
                pp(i);
            }

            function pp(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(3) + `-` + str(1) + `] Thread online and loaded.`);
                }, 100 * i);
            }
        }




        function backdoor() {
            function str(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            function nums(length) {
                var result = '';
                var characters = '123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            function subnums(length) {
                var result = '';
                var characters = '456';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            function subnums2(length) {
                var result = '';
                var characters = '23';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            function delnums(length) {
                var result = '';
                var characters = '8765432';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
            for (let i = 0; i < 20000; i++) {
                ha(i);
            }

            function ha(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(3) + `-` + str(1) + `] Previous thread failed. Continuing on another port.`);
                }, 2 + delnums(4) * i);
            }
            for (let i = 0; i < 20000; i++) {
                ss(i);
            }

            function ss(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(3) + `-` + str(1) + `] New authentication server found. Accessing  from port: ` + nums(subnums(1)));
                }, 1 + delnums(4) * i);
            }

            for (let i = 0; i < 20000; i++) {
                ww(i);
            }

            function ww(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(3) + `-` + str(1) + `] Allocating more CPU threads to IP ` + nums(subnums2(1)) + `.` + nums(subnums2(1)) + `.` + nums(subnums2(1)) + `.` + nums(subnums2(1)));
                }, 3 + delnums(4) * i);
            }
            for (let i = 0; i < 20000; i++) {
                qq(i);
            }

            function qq(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(3) + `-` + str(1) + `] Working around DNS adress with registry ` + nums(subnums(1)));
                }, +delnums(4) * i);
            }
            for (let i = 0; i < 20000; i++) {
                ez(i);
            }

            function ez(i) {
                setTimeout(function() {
                    log(`------------------------------------------------------------------------------------------------------------------------
[ADVISORY THREAD] A new URL key has ben extracted from DNS-` + nums(subnums(1)) + `, and will be injected into the proxy.
------------------------------------------------------------------------------------------------------------------------`);
                }, 50748 * i);
            }
            for (let i = 0; i < 20000; i++) {
                ef(i);
            }

            function ef(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(subnums2(1)) + `-` + str(1) + `] Failed to bypass sub-domain. Now targeting primary IP: ` + nums(subnums2(1)) + `.` + nums(subnums2(1)) + `.` + nums(subnums2(1)) + `.` + nums(subnums2(1)));
                }, 3 + delnums(4) * i);
            }
            for (let i = 0; i < 20000; i++) {
                aas(i);
            }

            function aas(i) {
                setTimeout(function() {
                    log(`[Thread ` + nums(subnums2(1)) + `-` + str(1) + `] Thread uncovered unregistered domain at: http://www.pyroclient.com/` + nums(subnums2(1)) + `` + nums(subnums2(1)) + `, (invisible web adress)`);
                }, 5 + delnums(4) * i);
            }
            for (let i = 0; i < 20000; i++) {
                pop(i);
            }

            function pop(i) {
                setTimeout(function() {
                    log(`[IP Limiter] 3RD Party server hosting on access proxy's sub-adress: ` + nums(subnums(2) - 10));
                }, 7 + delnums(5) * i);
            }
        }
    }
})
