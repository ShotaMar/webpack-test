const path = require('path') //パスのスラッシュをOSに関係なくいい感じに入れてくれるライブラリ（windowsの¥マーク）にも対応

module.exports = {
    context: `${__dirname}/src`, //作業ディレクトリのパスを指定
    //entry: '/index.js',　//エントリポイント　contextの続きから記述
    entry: path.join(__dirname, "src", "index.js"),　//←スラッシュを書かずに連結してくれる
    output: { //絶対パスで記述する __dirnameはプロジェクトまでのパスの変数
        path: `${__dirname}/dist`, //出力先の絶対パス
        filename: 'main.js' //出力するファイル名
    }
}