const { series, src, dest, parallel, watch } = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

function clean() {
    return del("dist");
}

function styles(){
    return src("scss/style.scss").pipe(sass().on("error", sass.logError)).pipe(dest("dist/assets/css"));
}

function js(){
    return src("node_modules/bootstrap/dist/js/bootstrap.bundle.js").pipe(dest("dist/assets/js"));
}

function images(){
    return src("img/**").pipe(dest("dist/assets/img"));
}

function copy(){
    return src("index.html").pipe(dest("dist"));
}

function clean_deploy_dest(){
    return del("/var/www/html/resume", {force: true});
}

function copyToServer(){
    return src("dist/**").pipe(dest("/var/www/html/resume"));
}

const build = series(clean, parallel(styles, js, images, copy));

const deploy = series(build, clean_deploy_dest, copyToServer);

exports.clean = clean;
exports.build = build;
exports.deploy = deploy;
exports.default = function() {
    watch(["index.html", "img/**", "scss/**"], deploy);
}
