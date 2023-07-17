const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); //dotenv has 4 functions, eg config, path: is an option
const app = require('./app');

//console.log(app.get('env')); //development
console.log('line 7 in server.js', process.env); //a bunch of variables as follows; these variables, they come from the process core module
/* line 7 in server.js {
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\47849\\AppData\\Roaming',
  CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\LOCAL\\crashpad_3572_LCZWGQUSXTHKOXFI',
  COLOR: '1',
  COLORTERM: 'truecolor',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'INSPIRON15',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  DATABASE: 'mongodb+srv://diaom:<PASSWORD>@cluster0.5riga6j.mongodb.net/natours?retryWrites=true&w=majority',
  DATABASE_PASSWORD: 'dXb8LpV7ur6mrJBF',
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  EDITOR: 'C:\\Windows\\notepad.exe',
  FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
  FPS_BROWSER_USER_PROFILE_STRING: 'Default',
  GIT_ASKPASS: 'c:\\Users\\47849\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',       
  HOME: 'C:\\Users\\47849',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\47849',
  INIT_CWD: 'E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\4-natours\\starter - practice 57-62',
  JWT_EXPIRES_IN: '180d',
  JWT_SECRET: 'qwertyuiopasdfghjklzxcvbnm123456',
  LANG: 'en_US.UTF-8',
  LOCALAPPDATA: 'C:\\Users\\47849\\AppData\\Local',
  LOGONSERVER: '\\\\INSPIRON15',
  NODE: 'C:\\Program Files\\nodejs\\node.exe',
  NODE_ENV: 'development',
  NODE_EXE: 'C:\\Program Files\\nodejs\\\\node.exe',
  NPM_CLI_JS: 'C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js',
  npm_command: 'start',
  npm_config_cache: 'C:\\Users\\47849\\AppData\\Local\\npm-cache',
  npm_config_globalconfig: 'C:\\Users\\47849\\AppData\\Roaming\\npm\\etc\\npmrc',
  npm_config_global_prefix: 'C:\\Users\\47849\\AppData\\Roaming\\npm',
  npm_config_init_module: 'C:\\Users\\47849\\.npm-init.js',
  npm_config_local_prefix: 'E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\4-natours\\starter - practice 57-62',
  npm_config_metrics_registry: 'https://registry.npmjs.org/',
  npm_config_node_gyp: 'C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js',
  npm_config_noproxy: '',
  npm_config_prefix: 'C:\\Users\\47849\\AppData\\Roaming\\npm',
  npm_config_userconfig: 'C:\\Users\\47849\\.npmrc',
  npm_config_user_agent: 'npm/9.5.1 node/v18.16.0 win32 x64 workspaces/false',
  npm_execpath: 'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
  npm_lifecycle_event: 'start',
  npm_lifecycle_script: 'nodemon server.js',
  npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
  npm_package_json: 'E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\4-natours\\starter - practice 57-62\\package.json',    
  npm_package_name: 'natourpractice',
  npm_package_version: '1.0.0',
  NPM_PREFIX_NPM_CLI_JS: 'C:\\Users\\47849\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js',
  NUMBER_OF_PROCESSORS: '8',
  OneDrive: 'C:\\Users\\47849\\OneDrive',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
  OS: 'Windows_NT',
  PASSWORD: '123456',
  Path: 'E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\4-natours\\starter - practice 57-62\\node_modules\\.bin;E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\4-natours\\node_modules\\.bin;E:\\full stack\\nodejs Udemy\\complete-node-bootcamp-master\\node_modules\\.bin;E:\\full stack\\nodejs Udemy\\node_modules\\.bin;E:\\full stack\\node_modules\\.bin;E:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Program Files\\nodejs\\;H:\\Git\\cmd;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\47849\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\47849\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\47849\\AppData\\Roaming\\npm',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL',
  PORT: '3000',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 140 Stepping 2, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '8c02',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PROMPT: '$P$G',
  PSModulePath: 'C:\\Users\\47849\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\47849\\AppData\\Local\\Temp',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.79.2',
  TMP: 'C:\\Users\\47849\\AppData\\Local\\Temp',
  USERDOMAIN: 'INSPIRON15',
  USERDOMAIN_ROAMINGPROFILE: 'INSPIRON15',
  USERNAME: '47849',
  USERPROFILE: 'C:\\Users\\47849',
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
  VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\47849\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
  VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\47849\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
  VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-9d7d11adf0-sock',
  VSCODE_INJECTION: '1',
  windir: 'C:\\Windows',
  ZES_ENABLE_SYSMAN: '1'
} */
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    //console.log(con);
    //console.log(typeof con); //actually an object
    console.log(con.connections);
    console.log('DB connection successful!');
  }); //an object with some options and these are just some options that we need to specify in order to deal with some deprecation warnings. the first part connect returns a promise

/* const testTour = new Tour({
  rating: 4.7,
  name: 'The forest hiker',
  price: 497,
}); */ //data
// this will be a new document created out of the Tour model that we created in the last lecture.
// this testTour document that we just created is an instance of the tour model, and so now it has a couple of methods on it that we can use in order to interact with the database.
//testTour is a document instance

/* testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('Error:', err);
  }); */
/*the doc: {
  rating: 4.7,
  _id: 647c0b580dd9d820b4aea2d5,
  name: 'The forest hiker',
  price: 497,
  __v: 0
} this is a final document in the database
 */
//save it to the Tours collection in the database, .save() returns a promise,
//Mongoose automatically created this new collection tours(under natours) here as soon as we created the first document using the tour model,但是tours这个名字是如何自动来的？
//.save() method on the new document testTour

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
