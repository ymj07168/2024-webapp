<template>
  <div>지도 {{ moveLat }} / {{ moveLng }}</div>
  <div class="d-flex flex-row gap-5 flex-wrap" style="width: 100%">
    <div id="map" style="width: 400px; height: 400px"></div>
    <div id="search-map" style="width: 400px; height: 400px"></div>
  </div>
  <div class="my-3">
    <input
      v-model="searchKeyword"
      @keyup.enter="searchPlaces"
      type="text"
      class="form-control"
      placeholder="장소를 입력하세요"
    />
    <button @click="searchPlaces" class="btn btn-primary mt-2">검색</button>
  </div>
  {{ latitude }}{{ longitude }}
</template>

<script setup>
import { onMounted, ref } from "vue";

const locations = [
  { name: "올리브영 현대아울렛가산점", lat: 37.477818, lng: 126.88904 }, // 올리브영 현대아울렛가산점
  { name: "올리브영 가산점", lat: 37.480981, lng: 126.882436 }, // 올리브영 가산점
  { name: "올리브영 구로디지털점", lat: 37.485849, lng: 126.898809 }, // 올리브영 구로디지털점
];

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);
const searchKeyword = ref("이태원");

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      if (window.kakao && window.kakao.maps) {
        initMap();
        initSearchMap();
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);

  locations.forEach((location) => {
    let markerPosition = new kakao.maps.LatLng(location.lat, location.lng);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    var iwContent = `<div style="padding:5px;">${location.name}</div>`;
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    kakao.maps.event.addListener(marker, "mouseover", function () {
      infowindow.open(map, marker);
    });

    kakao.maps.event.addListener(marker, "mouseout", function () {
      infowindow.close();
    });
  });

  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};

const initSearchMap = () => {
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  var mapContainer = document.getElementById("search-map"),
    mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var ps = new kakao.maps.services.Places();

  ps.keywordSearch(searchKeyword.value, placesSearchCB);

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      var bounds = new kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      map.setBounds(bounds);
    }
  }

  function displayMarker(place) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "</div>"
      );
      infowindow.open(map, marker);
    });
  }
};

// 사용자가 검색할 때 호출되는 함수입니다.
const searchPlaces = () => {
  if (!searchKeyword.value) {
    alert("검색어를 입력하세요!");
    return;
  }

  // 새로운 검색어로 장소 검색을 다시 수행합니다.
  initSearchMap();
};
</script>

<style lang="scss" scoped></style>
