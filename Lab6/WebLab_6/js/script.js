let MenuA =
    [
        {
            name: 'Грузоперевозки', submenu:
                [
                    {
                        name: 'Типы грузоперевозок', submenu:
                            [
                                {name: 'Транспортные', url: 'http://www.av.by'},
                                {name: 'Логистические', url: 'http://www.av.by'}
                            ]
                    },
                    {name: 'Правила доставки', url: 'http://www.av.by'},
                    {
                        name: 'Виды грузоперевозок', submenu:
                            [
                                {name: 'Пассажирские', url: 'http://www.av.by'},
                                {name: 'Грузовые', url: 'http://www.av.by'},
                                {name: 'Смешанные', url: 'http://www.av.by'},
                            ]
                    }
                ]
        },
        {
            name: 'Тарифы', submenu:
                [
                    {name: 'Льготные', url: 'http://www.av.by'},
                    {name: 'Без льгот', url: 'http://www.av.by'}
                ]
        },
        {name: 'Помошь', url: 'http://www.av.by'}
    ];

const showMenu = (items, parent) =>
{
    const listElem = document.createElement('ul');
    items.forEach((item) => {
        const itemElement = makeMenuItem(item);
        listElem.appendChild(itemElement);
    });
    parent.appendChild(listElem);
}

const makeMenuItem = (item) => {
    const listItemElem = document.createElement('li');
    if (item.submenu) {
        listItemElem.append(item.name);
        listItemElem.onclick = (event) => {
            if (event.target !== event.currentTarget)
                return;
            if (hideMenu(listItemElem)) {
                listItemElem.classList.remove('opened');
                return;
            }
            showMenu(item.submenu, listItemElem);
            listItemElem.classList.add('opened');
        };
        listItemElem.classList.add('has-submenu');
    }
    if (item.url) {
        const anchor = document.createElement('a');
        anchor.textContent = item.name;
        anchor.href = item.url;
        listItemElem.appendChild(anchor);
    }

    listItemElem.classList.add(['menu-item']);

    return listItemElem;
}

const hideMenu = (parent) =>
{
    const listElement = parent.querySelector('ul');
    if (listElement) {
        listElement.remove();
        return true;
    }
    return false;
}

const menu = document.getElementById('menu');

showMenu(MenuA, menu);