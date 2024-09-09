<template>
  <div>지도 {{ moveLat }} / {{ moveLng }}</div>
  <div id="map" style="width: 500px; height: 400px"></div>

  {{ latitude }}{{ longitude }}
</template>

<script setup>
import { onMounted, ref } from "vue";

const locations = [
  { lat: 37.477818, lng: 126.88904 }, // 올리브영 현대아울렛가산점
  { lat: 37.480981, lng: 126.882436 }, // 올리브영 가산점
  { lat: 37.485849, lng: 126.898809 }, // 올리브영 구로디지털점
];

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
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

  // 여러 마커를 생성하기 위한 배열 순회
  locations.forEach((location) => {
    let markerPosition = new kakao.maps.LatLng(location.lat, location.lng);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  });

  // 지도 중심좌표 변경 이벤트 리스너 추가
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};
</script>

<style lang="scss" scoped></style>
