# UMP Pharmaco-BioAI & Transcriptomics Research Group Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-2563eb?style=flat-square)](LICENSE)
[![BioAI Research](https://img.shields.io/badge/BioAI_Research-microRNA_Profiling-0f766e?style=flat-square)](https://github.com/wwm100107-creator/ump-bioai-lab)
[![UMP HCMC](https://img.shields.io/badge/UMP_HCMC-School_of_Pharmacy-1e3a8a?style=flat-square)](https://wwm100107-creator.github.io/ump-bioai-lab/)
[![Last Commit](https://img.shields.io/github/last-commit/wwm100107-creator/ump-bioai-lab?style=flat-square&color=475569)](https://github.com/wwm100107-creator/ump-bioai-lab/commits/main)

**Trang thông tin điện tử công khai (Open Public Portal – Không yêu cầu đăng nhập)** phục vụ đề tài nghiên cứu khoa học sinh viên tại **Trường Dược – Đại học Y Dược Thành phố Hồ Chí Minh (UMP HCMC)**.

---

## Đề tài Nghiên cứu / Research Topic

- **Tiếng Việt:** *Bước đầu ứng dụng trí tuệ nhân tạo trong xây dựng mô hình chẩn đoán ung thư tuyến tiền liệt dựa trên phân tích biểu hiện microRNA từ nguồn dữ liệu lớn*
- **English:** *Initial Application of Artificial Intelligence in Developing a Prostate Cancer Diagnostic Model Based on Big-Data microRNA Expression Profiling*

- **Đơn vị chủ quản / Institution:** Trường Dược – Đại học Y Dược Thành phố Hồ Chí Minh (School of Pharmacy – University of Medicine and Pharmacy at Ho Chi Minh City)
- **Địa chỉ / Address:** 41 Đinh Tiên Hoàng, P. Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
- **URL công khai / Public URL:** `https://wwm100107-creator.github.io/ump-bioai-lab/`

---

## Tính năng chính / Key Features

1. **Song ngữ Việt – Anh linh hoạt (Bilingual VI–EN / VI / EN):** Chuyển đổi tức thì giữa chế độ song ngữ đầy đủ, thuần tiếng Việt hoặc thuần tiếng Anh; tích hợp thẻ OpenGraph và Schema.org (`ResearchProject`, `ResearchOrganization`, `CollegeOrUniversity`).
2. **Dữ liệu lớn chuẩn quốc tế (Big Data Cohorts):** Trình bày chi tiết quá trình thu thập, chuẩn hóa và kiểm định chéo trên các bộ dữ liệu TCGA-PRAD (NCI GDC), NCBI GEO GSE112264, NCBI GEO GSE21036 (MSKCC), cùng danh pháp chuẩn từ miRBase v22.1 và tương tác gen đích từ miRTarBase v9.0.
3. **Bảng điều khiển tương tác (Interactive Benchmark & Biomarker Dashboard):**
   - Biểu đồ đường cong ROC động & bảng chỉ số hiệu năng 6 thuật toán (Stacking Ensemble, XGBoost, LightGBM, Random Forest, SVM-RBF, Logistic Regression) trên tập Internal 10-Fold CV và External Validation.
   - Biểu đồ Volcano Plot và biểu đồ tầm quan trọng đặc trưng SHAP (Explainable AI).
   - Bảng tra cứu 14 microRNA lõi (7 OncomiRs tăng biểu hiện & 7 Tumor-Suppressor miRNAs giảm biểu hiện) kèm bộ lọc và tìm kiếm thời gian thực.
4. **Bộ mô phỏng Chẩn đoán AI & Giải thích SHAP (Interactive AI Prototype):** Cho phép thử nghiệm 3 ca mẫu thực nghiệm hoặc điều chỉnh mức biểu hiện $\log_2(\text{RPM}+1)$ của 6 miRNA trọng tâm để quan sát xác suất dự đoán và đóng góp SHAP từng biến.
5. **Tùy chỉnh thông tin nhóm ngay trên giao diện hoặc trong mã nguồn:** Bấm nút **Tùy chỉnh thông tin** trên thanh tiêu đề để cập nhật tên sinh viên, MSSV, giảng viên hướng dẫn, bộ môn, email liên hệ (lưu cục bộ hoặc xuất JSON cấu hình).

---

## Cấu trúc mã nguồn / Repository Structure

- `index.html` — Cấu trúc HTML5 ngữ nghĩa, metadata Schema.org/OpenGraph và toàn bộ các phân khu học thuật.
- `styles.css` — Hệ thống giao diện y sinh học thuật (Academic Biomedical Navy & Teal), hỗ trợ Responsive và chế độ in (`@media print`).
- `app.js` — Chứa khối `LAB_CONFIG` ở đầu file, dữ liệu mô hình & 14 miRNA, bộ vẽ biểu đồ SVG động, trình mô phỏng SHAP và modal trích dẫn (BibTeX / APA).
- `.nojekyll` — Cấu hình GitHub Pages phục vụ trực tiếp trang tĩnh.

---

## Hướng dẫn cập nhật thông tin thành viên vĩnh viễn / How to Update Member Info Permanently

Mở file `app.js` và chỉnh sửa đối tượng `DEFAULT_LAB_CONFIG` ở những dòng đầu tiên (tên nhóm, mã đề tài, tên chủ nhiệm đề tài sinh viên, MSSV, giảng viên hướng dẫn, bộ môn, email), sau đó commit và push lên nhánh `main`:

```bash
git add app.js
git commit -m "Update lab team members and contact information"
git push origin main
```

> **Lưu ý khoa học / Scientific Disclaimer:** Toàn bộ công cụ mô phỏng trên trang web chỉ phục vụ mục đích nghiên cứu học thuật, minh họa phương pháp luận sinh tin học và không thay thế chẩn đoán lâm sàng chuyên khoa.
