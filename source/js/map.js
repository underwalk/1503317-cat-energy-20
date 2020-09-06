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
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-pin.png',
            // Размеры метки.
            iconImageSize: [57, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [75, -45]
        });

        // myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        //     hintContent: 'Собственный значок метки с контентом',
        //     balloonContent: 'А эта — новогодняя',
        //     iconContent: '12'
        // }, {
        //     // Опции.
        //     // Необходимо указать данный тип макета.
        //     iconLayout: 'default#imageWithContent',
        //     // Своё изображение иконки метки.
        //     iconImageHref: 'images/ball.png',
        //     // Размеры метки.
        //     iconImageSize: [48, 48],
        //     // Смещение левого верхнего угла иконки относительно
        //     // её "ножки" (точки привязки).
        //     iconImageOffset: [-24, -24],
        //     // Смещение слоя с содержимым относительно слоя с картинкой.
        //     iconContentOffset: [15, 15],
        //     // Макет содержимого.
        //     iconContentLayout: MyIconContentLayout
        // });

    myMap.geoObjects
        .add(myPlacemark);
        //.add(myPlacemarkWithContent);
});