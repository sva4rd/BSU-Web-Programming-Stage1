function TLocalStorage(item) {
    const self = this;
    self.Save = function (data) {
        const json = JSON.stringify(data);
        window.localStorage.setItem(item, json);
    }

    self.Load = function ()
    {
        const json = window.localStorage.getItem(item);
        return JSON.parse(json);
    }
}

function THashStorage() {
    var trans = this;
    var info = {};

    const localStorage = new TLocalStorage('info');

    trans.Save = function () {
        localStorage.Save(info);
    }

    trans.Load = function () {
        const loadedData = localStorage.Load();
        if (!loadedData) return;
        info = loadedData;
    }

    trans.AddValue = function (key, value) {
        if (key in info)
            console.log("Объект уже существует");
        else
            info[key] = value;
        trans.Save();
    }
    trans.Reset = function () {
        info = {};
    }
    trans.DeleteValue = function (key) {
        if (key in info)
            delete info[key];
        else
            console.log("Нет объекта");
        trans.Save();
    }
    trans.GetValueInfo = function (key) {
        if (key in info)
            console.log("Название:" + key + "\nОписание:" + info[key]);
        else
            console.log("Нет информации");
    }
    trans.ListValues = function () {
        if (Object.keys(info).length === 0) {
            console.log("Нет информации");
        } else {
            for (key in info) {
                console.log("Название:" + key + "\nОписание:" + info[key]);
            }
        }
    }
}

var info = new THashStorage();
info.Reset();
info.Load();

function AddTransportation() {
    var transportation = prompt("Введите название грузоперевозки:", "");
    if (transportation) {
        var description = prompt("Введите описание грузоперевозки:", "");
    }
    if (description) {
        info.AddValue(transportation, description);
    }
}

function DeleteTransportation() {
    var transportation = prompt("Введите название грузоперевозки:", "");
    info.DeleteValue(transportation);
}

function TransportationInfo() {
    var transportation = prompt("Введите название грузоперевозки:", "");
    info.GetValueInfo(transportation);
}

function ShowAllTransportations() {
    var show = confirm("Вывести информацию о грузоперевозках?");
    if (show) {
        info.ListValues();
    }
}