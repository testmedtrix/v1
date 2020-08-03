function ServiceBase() {
    this.XmlHttp = new XMLHttpRequest();
}

ServiceBase.prototype.ExecuteService = function (PostData, async) {
    try {
        PostData.service = this.service;
        this.XmlHttp.open("POST", this.Url, async);
        this.XmlHttp.send(JSON.stringify(PostData));

        if (!async) {
            if (this.XmlHttp.status != 200) {
                console.log("Network error. Please check your internet connection");
                return;
            }
            var header = JSON.parse(this.XmlHttp.responseText);
            if (header.iserror) {
                if (header.code == 1000) {
                    console.log("Session Expired");
                }
                else {
                    throw new ServiceException(header.code, header.message);
                }
            }
            return JSON.parse(this.XmlHttp.responseText);
        }

        else {
            var me = this;
            var callback = PostData.callback;
            var timer = window.setInterval(function (callback) {
                if (me.XmlHttp.readyState == 4) {
                    window.clearInterval(timer);
                    if (me.XmlHttp.status != 200) {
                        console.log("Network error. Please check your internet connection");
                        return;
                    }

                    var header = JSON.parse(me.XmlHttp.responseText);
                    if (header.iserror) {
                        if (header.code == 1000) {
                            console.log("Session Expired !");
                        }
                        else {
                            console.log(header.ErrorMessage);
                            throw new ServiceException(header.ErrorCode, header.ErrorMessage);
                        }
                    }

                    var result = header.result;
                    if (callback != null && callback.func != "")
                        window[callback.func](result, callback.data);
                }
            }, 1000, PostData.callback);
        }
    }
    catch (ex) {
        if (ex.code == 19) {
            return false;
        }
        return true;
    }
}

function ServiceException(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
}

window.onError = function () {

}