
const generateOutput = (text:string, output = '0') => {
    console.log('xxx');
    switch (text) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (output === '0') {
                console.log(text);
                return text;
            } else {
                console.log('hhh');
                return (output + text);
            }
            break;
        case '.':
            if (output.indexOf('.') >= 0) {
                return output;
            } else {
                return (output + '.');
            }
            break;
        case '删除':
            if (output.length === 1) {
                return ('');
            } else {
                return (output.slice(0, -1));
            }
            break;
        case'清空':
            return ('');
        default:
            return('');
    }
};
export {generateOutput}