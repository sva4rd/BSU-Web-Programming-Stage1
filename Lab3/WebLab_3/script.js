var transportHash = {};

function AddValue(transportation, info) {
  if (transportation in transportHash) {
    alert("Объект уже существует");
    return false;
  }
  transportHash[transportation] = info;
}

function DeleteValue(transportation) {
  if (!(transportation in transportHash)) {
    alert("Нет объекта");
    return false;
  }
  delete transportHash[transportation];
}

function GetValueInfo(transportation) {
  if (!(transportation in transportHash)) {
    console.log("Нет информации");
  } 
  else {
    console.log("Название:" + transportation + "\nОписание:" + transportHash[transportation]);
  }
}
function ListValues() {
  if(Object.keys(transportHash).length === 0){
    alert("Нет информации");
    return false;
  }
  for (transportation in transportHash) {
    console.log("Название:" + transportation + "\nОписание:" + transportHash[transportation]);
  }
}
