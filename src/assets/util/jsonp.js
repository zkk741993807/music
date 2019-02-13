
function createScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.className = "jsonp";
    document.body.appendChild(script);
    document.body.removeChild(script);
}

export default function (url, callBackName) {
    createScript(url)
    return new Promise(function (resolve, reject) {
        window[callBackName] = (function () {
            return function (data) {
                if (!data.code) {
                    resolve(data);
                } else {
                    reject(data);
                }
                delete window[callBackName];
            }
        })(callBackName);
    })
};