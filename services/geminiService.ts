import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Using process.env.API_KEY as strictly required
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là Trợ lý ảo AI của "Dinner App". Nhiệm vụ của bạn là tư vấn cho chủ quán ăn (SMEs) về giải pháp quản lý nhà hàng thông minh trên nền tảng SaaS.

Thông tin cốt lõi về Dinner App (dựa trên luận văn):
1.  **Sản phẩm:** Hệ thống SaaS quản lý quán ăn với tính năng trọng tâm là Gọi món qua QR Code (Table-side Ordering).
2.  **Đối tượng mục tiêu:** Các quán ăn, nhà hàng quy mô vừa và nhỏ (SMEs), quán cafe, trà sữa.
3.  **Lợi ích chính (USP):**
    *   **Cắt giảm chi phí nhân sự:** Giảm 20-30% định biên nhân viên phục vụ nhờ khách tự gọi món.
    *   **Tăng tốc độ:** Giảm thời gian chờ đợi, tăng vòng quay bàn (table turnover) lên 15-20 phút.
    *   **Loại bỏ sai sót:** Đồng bộ trực tiếp từ máy khách xuống bếp (KDS), không qua ghi chép thủ công.
    *   **Chi phí thấp:** Mô hình thuê bao (Subscription) thay vì mua phần cứng đắt tiền (CapEx).
4.  **Tính năng nổi bật:** QR Code động, Đồng bộ giỏ hàng nhóm (Group Order), Thanh toán đa kênh (MoMo, ZaloPay), Báo cáo thời gian thực.

Phong cách trả lời:
- Chuyên nghiệp, am hiểu nghiệp vụ F&B, ngắn gọn và thuyết phục.
- Nhấn mạnh vào "Tinh gọn", "Hiệu quả" và "Tiết kiệm chi phí".
- Nếu khách hỏi về giá, hãy đề cập đến mô hình thuê bao linh hoạt (theo tháng/năm) phù hợp với SMEs và gói Freemium cho quán nhỏ.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[] = []) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau hoặc liên hệ bộ phận hỗ trợ.";
  }
};