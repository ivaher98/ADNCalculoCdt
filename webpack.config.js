import path from 'path';
const source = path.resolve(__dirname, 'src');

export default {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', 
    },
    resolve:{
        alias: {
            components: path.resolve(__dirname, 'src/feature'),
          },
          extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                
            }
        ]
    }
}