import React, { useState } from 'react';

export default function Mypage() {
  const [postcode, setPostcode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [guide, setGuide] = useState('');
  function execDaumPostcode() {
    new window.daum.Postcode({
      oncomplete(data) {
        // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        const roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraRoadAddr = ''; // 참고 항목 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr +=
            extraRoadAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== '') {
          extraRoadAddr = ` (${extraRoadAddr})`;
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        setPostcode(data.zonecode);
        setRoadAddress(roadAddr);
        setJibunAddress(data.jibunAddress);

        // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
        if (roadAddr !== '') {
          setExtraAddress(extraRoadAddr);
        } else {
          setExtraAddress('');
        }

        // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
        if (data.autoRoadAddress) {
          const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          setGuide(`(예상 도로명 주소 : ${expRoadAddr})`);
        } else if (data.autoJibunAddress) {
          const expJibunAddr = data.autoJibunAddress;
          setGuide(`(예상 지번 주소 : ${expJibunAddr})`);
        } else {
          setGuide('');
        }
      },
    }).open();
  }
  return (
    <div>
      <head>
        <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
      </head>
      ㅁㄴㅇㅁㄴㅇ
      <br />
      asd
      <input type="text" id="sample4_postcode" placeholder="우편번호" />
      <input
        type="button"
        onClick={() => sample4_execDaumPostcode()}
        value="우편번호 찾기"
      />
      <br />
      <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
      <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
      <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
      <input type="text" id="sample4_extraAddress" placeholder="참고항목" />
    </div>
  );
}
