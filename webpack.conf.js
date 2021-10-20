require('webpack');

function assetsPath(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        'static' :
        'static'
    return _path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    productionSourceMap: false,
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }

        ]
    }
}