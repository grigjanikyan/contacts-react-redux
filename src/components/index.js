const modulesFiles = require.context('./', true, /^\.\/.*\/index\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const arr = modulePath.split('/');
    const moduleName = arr[arr.length - 2];
    modules[moduleName] = modulesFiles(modulePath).default;
    return modules;
}, {});

module.exports = modules;
