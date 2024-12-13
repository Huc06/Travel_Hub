const CurrentPlan = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Kế hoạch hiện tại</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Mục tiêu</h2>
            <p className="text-gray-700">
              Xây dựng nền tảng manga cộng đồng, nơi độc giả có thể trực tiếp ủng hộ các tác giả yêu thích 
              và tham gia vào quá trình ra quyết định thông qua hệ thống DAO.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Kế hoạch phát triển</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-pink-500">
                <h3 className="font-semibold text-lg mb-2">Giai đoạn 1: Xây dựng hệ thống ủng hộ cơ bản</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Tích hợp ví</li>
                  <li>Hệ thống chuyển token</li>
                  <li>Hiển thị dự án và tiến độ</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">Giai đoạn 2: Hệ thống DAO và quản lý dự án</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Triển khai smart contract cho DAO</li>
                  <li>Hệ thống bỏ phiếu cho nhà tài trợ</li>
                  <li>Đề xuất và bình chọn tiêu đề manga cần dịch</li>
                  <li>Tracking quá trình dịch thuật</li>
                  <li>Phân phối token quản trị dựa trên đóng góp</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">Giai đoạn 3: Mở rộng cộng đồng</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Tích hợp hệ thống bình luận và đánh giá</li>
                  <li>Marketplace cho NFT manga</li>
                  <li>Hệ thống phần thưởng cho người đóng góp</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Quyền lợi nhà tài trợ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-pink-700">Quyền biểu quyết</h3>
                <p className="text-gray-700">
                  Nhà tài trợ sẽ nhận được token quản trị, cho phép tham gia bỏ phiếu 
                  về các quyết định quan trọng của dự án.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-purple-700">Đề xuất dự án</h3>
                <p className="text-gray-700">
                  Có quyền đề xuất và bình chọn cho các tiêu đề manga cần được dịch thuật.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan; 