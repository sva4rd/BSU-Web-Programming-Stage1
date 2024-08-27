const homePage = `
  <div id="home_page">
    <h2>Главная страница</h2>
    <p>Транспортная компания — предприятие, занимающееся деятельностью по перевозке различных
    грузов. В случае, если онлайн-продажи происходят в разные регионы, оптимально использовать
    услуги доставки товаров при помощи транспортных компаний.</p>
    <p>Работники транспортной компании звонят получателю груза для оповещения
    о прибытии груза в его город и подтверждают необходимость перемещения,
    предлагают воспользоваться услугой адресной доставки и тому подобное.
    В этот момент можно выбрать необходимые от транспортной компании услуги.</p>
    <p>Транспортные предприятия подразделяются на предприятия, осуществляющие
    пассажирские перевозки, осуществляющие грузовые перевозки, и смешанные предприятия,
    осуществляющие как грузовые, так и пассажирские перевозки. Грузовые перевозки принято
    разделять на транспортные и логистические компании.</p>
  </div>
`;
const orderPage = `
    <div>
    <h2>Заказы</h2>
    <table>
      <thead>
        <tr>
          <th>Имя заказа</th>
          <th>Детали</th>
        </tr>
      </thead>
      <tbody id="table-body">
      </tbody>
    </table>
    <a href="/data">Download</a>
  </div>
`;

const loadData = (data) => {
    for (key in data) {
        const row = $('<tr>');
        const loginCell = $('<td>').text(key);
        const nameCell = $('<td>').text(data[key]);
        row.append(loginCell);
        row.append(nameCell);
        $('#table-body').append(row);
    }
}

const subjectPageOnLoad = () => {
    $.ajax({
        url: '/data/data.json',
        dataType: 'json',
        success: loadData,
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
        }
    });
}

const changePage = (page) => {
    $('#current-page').html(page.html);
    if (page.onload) {
        page.onload();
    }
}

const storeCurrentPage = () => {
    localStorage.setItem('currentPage', window.location.hash);
}

const loadCurrentPage = () => {
    return localStorage.getItem('currentPage');
}

const hashChangeHandler = () => {
    let UrlHash = window.location.hash;
    if (!UrlHash) {
        UrlHash = loadCurrentPage();
        if (!UrlHash) {
            UrlHash = "#Home";
        }
    }
    const pageKey = UrlHash.substring(1);
    changePage(pagesHash[pageKey]);
    storeCurrentPage();
}

const createNav = (pages) => {
    for (const key in pages) {
        const page = pages[key];
        const item = $('<li>');
        const anchor = $(`<a href=#${key}>${page.name}</a>`);
        item.append(anchor);
        $('#pages-list').append(item);
    }
}

const pagesHash = {
    "Home": {
        name: "Главная",
        html: homePage
    },
    "Subject": {
        name: "Заказы",
        html: orderPage,
        onload: subjectPageOnLoad
    }
}

window.onhashchange = hashChangeHandler;
createNav(pagesHash);
hashChangeHandler();
