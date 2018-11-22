$(document).ready(function () {
    var mapBlock = document.getElementById('map');

    if (mapBlock) {
        ymaps.ready(init);
        var map,
            Placemark;

        function init() {
            map = new ymaps.Map("map", {
                center: [53.890977, 27.563152],
                zoom: 17
            });

            map.behaviors.disable('scrollZoom');

            Placemark = new ymaps.Placemark([53.890977, 27.563152], {
                hintContent: 'PRIME EVENT',
                balloonContent: 'PRIME EVENT'
            });

            map.geoObjects.add(Placemark);
        }
    }
});
