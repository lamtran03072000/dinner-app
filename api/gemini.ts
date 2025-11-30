import { GoogleGenAI } from "@google/genai";

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
`;

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

let ai: any = null;
try {
  if (!apiKey) {
    console.warn("No GEMINI_API_KEY provided to serverless function");
  }
  ai = new GoogleGenAI({ apiKey });
} catch (e) {
  console.error("Failed to initialize GoogleGenAI in serverless function", e);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (!ai) {
    return res.status(500).json({ error: "AI client not initialized" });
  }

  try {
    const { message, history = [] } = req.body || {};

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: { systemInstruction: SYSTEM_INSTRUCTION },
      history: history.map((h: any) => ({ role: h.role, parts: h.parts })),
    });

    const result = await chat.sendMessage({ message });

    return res.status(200).json({ text: result.text });
  } catch (error) {
    console.error("Gemini API Error (server):", error);
    return res.status(500).json({ error: "Gemini API Error" });
  }
}
