import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef(null);
  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapContainer = mapRef.current;
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    });
  }, []);
  return (
    <div>
      <Wrapper id="map" ref={mapRef} />
    </div>
  );
}
