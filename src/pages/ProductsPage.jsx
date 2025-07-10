import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [isError, setIsError] = useState(false); // 에러 상태

  // axios

  return (
    <div className="p-4">
      <div>
        {isLoading && <p>불러오는 중...</p>}

        {isError && (
          <p className="text-red-500">상품 목록을 불러오지 못했습니다.</p>
        )}

        {!isLoading && !isError && products.length > 0 && (
          <div>
            <h1 className="text-2xl font-bold mb-2">🛠️ 쇼핑몰 GET 실습</h1>

            <Link to="/">⬅️ 홈으로 돌아가기</Link>

            <h1 className="text-xl font-bold my-2">상품 전체 조회</h1>

            <ul className="list-disc ml-5 space-y-1"></ul>
          </div>
        )}
      </div>
    </div>
  );
}
