import { fromEvent, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const showDataButton = document.getElementById('show');
const deleteDataButton = document.getElementById('delete');
const dataContainer = document.getElementById('data-container');

const showData$ = fromEvent(showDataButton, 'click');
showData$.subscribe(() => {
    from(ajax.getJSON('../data')).subscribe(data => {
        dataContainer.innerHTML = "";
        loadData(data);
    });
})

const deleteData$ = fromEvent(deleteDataButton, 'click');
deleteData$.subscribe(() => {
    deleteLastDataRow();
});

const loadData = (data) => {
    for (const key in data) {
        const row = loadVisitor(key, data[key]);
        dataContainer.append(row);
    }
}

const loadVisitor = (login, name) => {
    const row = document.createElement('tr');
    const loginCell = document.createElement('td');
    loginCell.textContent = login;
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(loginCell);
    row.appendChild(nameCell);
    return row;
}

const deleteLastDataRow = () => {
    const rows = dataContainer.querySelectorAll('tr');
    if (rows.length > 0) {
        const lastRow = rows[rows.length - 1];
        lastRow.parentNode.removeChild(lastRow);
    }
};
