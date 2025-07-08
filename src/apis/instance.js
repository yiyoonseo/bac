import axios from 'axios';

// const token = localStorage.getItem('accessToken'); 토큰은 3주차 로그인 구현 이후 사용

const instance = axios.create({
  // 일단 배포된 홍엽 운영진 url로. 추후 백엔드 팀원이 배포되면 그걸로 바꿔서 과제 제출해주세요. env 파일에서 수정합니다.
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

export default instance;
