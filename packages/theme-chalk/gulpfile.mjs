import { series, src, dest } from 'gulp'
import gulpSass from 'gulp-sass' // 处理sass
import * as dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer' // 添加前缀
import cleanCSS from 'gulp-clean-css' // 压缩css
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import watch from 'gulp-watch'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function compile() { // 处理scss文件
    const sass = gulpSass(dartSass)
    return src(path.resolve(__dirname, './src/*.scss'))
        .pipe(sass.sync())
        .pipe(autoprefixer({}))
        .pipe(cleanCSS())
        .pipe(dest('./dist/css'))
}
// function copyfont() { // 拷贝字体样式
//     return src(path.resolve(__dirname, './src/fonts/**')).pipe(cleanCSS()).pipe(dest('./dist/fonts'))
// }
// function copyStyle(){
//     return src(path.resolve(__dirname,'dist/**')).pipe(dest(path.resolve(__dirname,'../../dist/theme-chalk')));
// }
const buildStyle = series(
    compile,
    // copyfont,
    // copyStyle
)


export const dev = ()=>{
    watch('./src/**', (event)=> {
        compile()
    });
}
export default buildStyle