
var serviceurl = "services/UserService.aspx";
if (document.location.hostname != "localhost") {
    serviceurl = "https://www.medtrixhealthcare.com/services/UserService.aspx";
}

function Contact() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
}

function RequestHeader(Command, DataPacket, Callback) {
    this.command = Command;
    this.data = DataPacket;
    this.callback = Callback;
}

function CallBack() {
    this.func = "";
    this.data = "";
}

function UserService() {
    this.Url = serviceurl;
    this.service = "UserService";
}

UserService.prototype = new ServiceBase();

UserService.prototype.AddContactMessage = function (postData, callBack) {
    return this.ExecuteService(new RequestHeader("AddContactMessage", postData, callBack), false);
}

var medtrix = new UserService();