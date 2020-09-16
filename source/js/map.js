ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9387190, 30.3208588],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Метка',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-pin.png',
            iconImageSize: [57, 53],
        });

    myMap.geoObjects
        .add(myPlacemark);
});