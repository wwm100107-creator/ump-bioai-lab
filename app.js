/**
 * ============================================================================
 * CẤU HÌNH NHÓM NGHIÊN CỨU / RESEARCH GROUP CONFIGURATION
 * Sinh viên có thể chỉnh sửa trực tiếp các trường bên dưới (hoặc dùng nút
 * "Tùy chỉnh thông tin" ngay trên giao diện web).
 * ============================================================================
 */
const DEFAULT_LAB_CONFIG = {
  labNameVi: "Nhóm Nghiên cứu Trí tuệ Nhân tạo Y sinh & Sinh tin học Dược (UMP Pharmaco-BioAI Lab)",
  labNameEn: "UMP Pharmaco-BioAI & Transcriptomics Research Group",
  institutionVi: "Trường Dược – Đại học Y Dược Thành phố Hồ Chí Minh",
  institutionEn: "School of Pharmacy – University of Medicine and Pharmacy at Ho Chi Minh City (UMP HCMC)",
  departmentVi: "Bộ môn Dược lý – Dược lâm sàng & Sinh tin học Y dược (Nhóm Nghiên cứu Sinh viên NCKH)",
  departmentEn: "Department of Pharmacology – Clinical Pharmacy & Biomedical Informatics (Student Research Unit)",
  addressVi: "41 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
  addressEn: "41 Dinh Tien Hoang St., Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
  projectCode: "UMP-PHARM-NCKH-2026-PRAD",
  studentLeadName: "Sinh viên Chủ nhiệm Đề tài (Cập nhật họ tên)",
  studentLeadId: "MSSV: 4112xxxxxx (Khóa Dược chính quy)",
  studentLeadRoleVi: "Sinh viên Trường Dược – ĐHYD TP.HCM | Chủ nhiệm đề tài",
  studentLeadRoleEn: "Pharmacy Student, School of Pharmacy – UMP HCMC | Student Principal Investigator",
  advisorName: "TS. DS. / PGS. TS. Giảng viên Hướng dẫn (Cập nhật họ tên)",
  advisorTitleVi: "Giảng viên Hướng dẫn Khoa học – Trường Dược, ĐHYD TP.HCM",
  advisorTitleEn: "Scientific Faculty Advisor – School of Pharmacy, UMP HCMC",
  collaboratorsVi: "Nhóm Nghiên cứu Sinh tin học & Dược lý Phân tử (Hội đồng Cố vấn Kỹ thuật AI Y sinh)",
  collaboratorsEn: "Bioinformatics & Molecular Pharmacology Advisory Subgroup (Biomedical AI Technical Panel)",
  contactEmail: "pharmaco-bioai-lab@ump.edu.vn",
  publicUrl: "https://wwm100107-creator.github.io/ump-bioai-lab/",
  year: "2026"
};

const STORAGE_KEY_CONFIG = "ump_bioai_lab_config_v1";
const STORAGE_KEY_LANG = "ump_bioai_lang_mode_v1";

function loadLabConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (!saved) return { ...DEFAULT_LAB_CONFIG };
    return { ...DEFAULT_LAB_CONFIG, ...JSON.parse(saved) };
  } catch {
    return { ...DEFAULT_LAB_CONFIG };
  }
}

let labConfig = loadLabConfig();

/**
 * ============================================================================
 * DỮ LIỆU HIỆU NĂNG MÔ HÌNH / MODEL BENCHMARK DATA
 * ============================================================================
 */
const MODEL_BENCHMARKS = {
  stacking: {
    name: "Stacking Ensemble (XGB + LGBM + SVM)",
    internal: {
      auc: 0.964,
      ci: "0.951 – 0.977",
      sens: "93.8%",
      spec: "92.1%",
      f1: "0.935",
      mcc: "0.858",
      cm: { tp: 1227, fp: 39, fn: 81, tn: 453 },
      roc: [
        [0, 0], [0.01, 0.42], [0.02, 0.65], [0.04, 0.80], [0.06, 0.89],
        [0.08, 0.938], [0.12, 0.956], [0.18, 0.972], [0.28, 0.985], [0.45, 0.994], [1, 1]
      ]
    },
    external: {
      auc: 0.941,
      ci: "0.916 – 0.966",
      sens: "90.3%",
      spec: "89.3%",
      f1: "0.927",
      mcc: "0.781",
      cm: { tp: 102, fp: 3, fn: 11, tn: 25 },
      roc: [
        [0, 0], [0.02, 0.36], [0.04, 0.58], [0.07, 0.77], [0.107, 0.903],
        [0.16, 0.928], [0.25, 0.952], [0.38, 0.974], [0.60, 0.990], [1, 1]
      ]
    }
  },
  xgboost: {
    name: "XGBoost Classifier",
    internal: {
      auc: 0.956,
      ci: "0.942 – 0.970",
      sens: "92.4%",
      spec: "90.8%",
      f1: "0.923",
      mcc: "0.834",
      cm: { tp: 1209, fp: 45, fn: 99, tn: 447 },
      roc: [
        [0, 0], [0.015, 0.38], [0.03, 0.61], [0.05, 0.77], [0.092, 0.924],
        [0.14, 0.946], [0.22, 0.967], [0.34, 0.981], [0.55, 0.992], [1, 1]
      ]
    },
    external: {
      auc: 0.932,
      ci: "0.903 – 0.961",
      sens: "88.5%",
      spec: "85.7%",
      f1: "0.913",
      mcc: "0.731",
      cm: { tp: 100, fp: 4, fn: 13, tn: 24 },
      roc: [
        [0, 0], [0.025, 0.34], [0.05, 0.55], [0.09, 0.74], [0.143, 0.885],
        [0.20, 0.916], [0.30, 0.944], [0.45, 0.968], [0.66, 0.986], [1, 1]
      ]
    }
  },
  lightgbm: {
    name: "LightGBM",
    internal: {
      auc: 0.951,
      ci: "0.936 – 0.966",
      sens: "91.6%",
      spec: "89.8%",
      f1: "0.916",
      mcc: "0.819",
      cm: { tp: 1198, fp: 50, fn: 110, tn: 442 },
      roc: [
        [0, 0], [0.02, 0.37], [0.04, 0.58], [0.065, 0.76], [0.102, 0.916],
        [0.16, 0.940], [0.25, 0.962], [0.39, 0.979], [0.60, 0.991], [1, 1]
      ]
    },
    external: {
      auc: 0.926,
      ci: "0.895 – 0.957",
      sens: "87.6%",
      spec: "85.7%",
      f1: "0.908",
      mcc: "0.718",
      cm: { tp: 99, fp: 4, fn: 14, tn: 24 },
      roc: [
        [0, 0], [0.03, 0.31], [0.06, 0.52], [0.10, 0.73], [0.143, 0.876],
        [0.22, 0.909], [0.34, 0.938], [0.50, 0.966], [0.70, 0.985], [1, 1]
      ]
    }
  },
  rf: {
    name: "Random Forest (500 Trees)",
    internal: {
      auc: 0.942,
      ci: "0.925 – 0.959",
      sens: "89.9%",
      spec: "88.4%",
      f1: "0.903",
      mcc: "0.788",
      cm: { tp: 1176, fp: 57, fn: 132, tn: 435 },
      roc: [
        [0, 0], [0.02, 0.33], [0.05, 0.55], [0.08, 0.73], [0.116, 0.899],
        [0.18, 0.926], [0.28, 0.953], [0.42, 0.974], [0.64, 0.989], [1, 1]
      ]
    },
    external: {
      auc: 0.915,
      ci: "0.880 – 0.950",
      sens: "86.7%",
      spec: "82.1%",
      f1: "0.899",
      mcc: "0.684",
      cm: { tp: 98, fp: 5, fn: 15, tn: 23 },
      roc: [
        [0, 0], [0.035, 0.28], [0.07, 0.49], [0.12, 0.70], [0.179, 0.867],
        [0.25, 0.899], [0.36, 0.932], [0.53, 0.961], [0.72, 0.983], [1, 1]
      ]
    }
  },
  svm: {
    name: "RBF-Kernel SVM",
    internal: {
      auc: 0.938,
      ci: "0.920 – 0.956",
      sens: "89.4%",
      spec: "87.8%",
      f1: "0.899",
      mcc: "0.779",
      cm: { tp: 1169, fp: 60, fn: 139, tn: 432 },
      roc: [
        [0, 0], [0.025, 0.30], [0.055, 0.52], [0.09, 0.71], [0.122, 0.894],
        [0.19, 0.922], [0.29, 0.949], [0.45, 0.971], [0.67, 0.987], [1, 1]
      ]
    },
    external: {
      auc: 0.909,
      ci: "0.872 – 0.946",
      sens: "85.8%",
      spec: "82.1%",
      f1: "0.894",
      mcc: "0.671",
      cm: { tp: 97, fp: 5, fn: 16, tn: 23 },
      roc: [
        [0, 0], [0.04, 0.26], [0.08, 0.47], [0.13, 0.69], [0.179, 0.858],
        [0.26, 0.892], [0.38, 0.925], [0.55, 0.957], [0.74, 0.980], [1, 1]
      ]
    }
  },
  logreg: {
    name: "LASSO Logistic Regression (Baseline)",
    internal: {
      auc: 0.906,
      ci: "0.884 – 0.928",
      sens: "85.2%",
      spec: "83.5%",
      f1: "0.867",
      mcc: "0.706",
      cm: { tp: 1114, fp: 81, fn: 194, tn: 411 },
      roc: [
        [0, 0], [0.04, 0.24], [0.08, 0.45], [0.13, 0.65], [0.165, 0.852],
        [0.24, 0.885], [0.36, 0.920], [0.52, 0.952], [0.72, 0.976], [1, 1]
      ]
    },
    external: {
      auc: 0.879,
      ci: "0.836 – 0.922",
      sens: "82.3%",
      spec: "78.6%",
      f1: "0.865",
      mcc: "0.594",
      cm: { tp: 93, fp: 6, fn: 20, tn: 22 },
      roc: [
        [0, 0], [0.05, 0.21], [0.10, 0.41], [0.16, 0.62], [0.214, 0.823],
        [0.30, 0.860], [0.43, 0.899], [0.60, 0.938], [0.78, 0.971], [1, 1]
      ]
    }
  }
};

/**
 * ============================================================================
 * 14 DẤU ẤN microRNA LÕI / 14-miRNA CORE DIAGNOSTIC SIGNATURE
 * ============================================================================
 */
const MIRNA_SIGNATURE = [
  {
    id: "hsa-miR-375-3p",
    direction: "up",
    log2fc: 2.84,
    fdr: "1.2e-48",
    negLog10Fdr: 47.9,
    univariateAuc: 0.912,
    meanShap: 0.82,
    targets: "SEC23A, YAP1, PTPN4, AR",
    pathwayVi: "Tăng sinh tế bào biểu mô tuyến tiền liệt & điều hòa trục tín hiệu thụ thể Androgen",
    pathwayEn: "Prostate epithelial proliferation & Androgen Receptor (AR) signaling modulation"
  },
  {
    id: "hsa-miR-141-3p",
    direction: "up",
    log2fc: 2.31,
    fdr: "4.6e-41",
    negLog10Fdr: 40.3,
    univariateAuc: 0.894,
    meanShap: 0.71,
    targets: "SHP, ZEB1, KLF9, PTEN",
    pathwayVi: "Chuyển dạng biểu mô – trung mô (EMT) & hoạt hóa đồng vận AR",
    pathwayEn: "Epithelial-mesenchymal transition (EMT) & AR co-regulator suppression"
  },
  {
    id: "hsa-miR-182-5p",
    direction: "up",
    log2fc: 2.15,
    fdr: "9.8e-37",
    negLog10Fdr: 36.0,
    univariateAuc: 0.881,
    meanShap: 0.64,
    targets: "FOXO1, BRCA1, NDRG1",
    pathwayVi: "Sửa chữa DNA & ức chế chết tế bào theo chương trình (Apoptosis)",
    pathwayEn: "DNA damage repair attenuation & FOXO1-mediated apoptosis evasion"
  },
  {
    id: "hsa-miR-183-5p",
    direction: "up",
    log2fc: 1.98,
    fdr: "3.1e-34",
    negLog10Fdr: 33.5,
    univariateAuc: 0.869,
    meanShap: 0.56,
    targets: "DKK3, SMAD4, EGR1",
    pathwayVi: "Hoạt hóa con đường Wnt/β-catenin & cụm gen miR-183-96-182",
    pathwayEn: "Wnt/β-catenin pathway activation via miR-183-96-182 oncogenic cluster"
  },
  {
    id: "hsa-miR-21-5p",
    direction: "up",
    log2fc: 1.76,
    fdr: "2.4e-29",
    negLog10Fdr: 28.6,
    univariateAuc: 0.858,
    meanShap: 0.54,
    targets: "PTEN, PDCD4, TPM1, RECK",
    pathwayVi: "Trục tín hiệu PI3K/AKT/mTOR & xâm lấn mô đệm",
    pathwayEn: "PI3K/AKT/mTOR hyperactivation & extracellular matrix invasion"
  },
  {
    id: "hsa-miR-96-5p",
    direction: "up",
    log2fc: 1.64,
    fdr: "6.5e-26",
    negLog10Fdr: 25.2,
    univariateAuc: 0.842,
    meanShap: 0.43,
    targets: "FOXO3A, MTSS1, RARγ",
    pathwayVi: "Thúc đẩy chu kỳ tế bào & đề kháng điều trị nội tiết",
    pathwayEn: "Cell-cycle progression & endocrine resistance promotion"
  },
  {
    id: "hsa-miR-106b-5p",
    direction: "up",
    log2fc: 1.38,
    fdr: "1.9e-20",
    negLog10Fdr: 19.7,
    univariateAuc: 0.821,
    meanShap: 0.36,
    targets: "CDKN1A (p21), RB1, E2F1",
    pathwayVi: "Vượt điểm kiểm G1/S trong chu kỳ phân bào",
    pathwayEn: "G1/S cell-cycle checkpoint bypass via p21/CDKN1A repression"
  },
  {
    id: "hsa-miR-205-5p",
    direction: "down",
    log2fc: -2.46,
    fdr: "7.2e-45",
    negLog10Fdr: 44.1,
    univariateAuc: 0.903,
    meanShap: 0.78,
    targets: "ZEB1, ZEB2, BCL2, PKCε",
    pathwayVi: "Bảo vệ tính toàn vẹn biểu mô đáy tuyến tiền liệt & ức chế di căn",
    pathwayEn: "Prostate basal epithelial integrity preservation & EMT suppression"
  },
  {
    id: "hsa-miR-145-5p",
    direction: "down",
    log2fc: -2.19,
    fdr: "5.4e-39",
    negLog10Fdr: 38.3,
    univariateAuc: 0.887,
    meanShap: 0.67,
    targets: "ERG, MYC, FSCN1, SOX2",
    pathwayVi: "Ức chế gen sinh ung ERG/MYC & biệt hóa tế bào",
    pathwayEn: "ERG/MYC oncogene suppression & tumor-suppressor differentiation"
  },
  {
    id: "hsa-miR-143-3p",
    direction: "down",
    log2fc: -1.94,
    fdr: "2.1e-33",
    negLog10Fdr: 32.7,
    univariateAuc: 0.864,
    meanShap: 0.51,
    targets: "KRAS, ERK5, BCL2, HK2",
    pathwayVi: "Điều hòa âm tính con đường MAPK/ERK & chuyển hóa hiếu khí khối u",
    pathwayEn: "MAPK/ERK negative regulation & tumor glycolysis attenuation"
  },
  {
    id: "hsa-miR-221-3p",
    direction: "down",
    log2fc: -1.67,
    fdr: "8.9e-27",
    negLog10Fdr: 26.1,
    univariateAuc: 0.846,
    meanShap: 0.41,
    targets: "DVL2, IRF2, SOCS3",
    pathwayVi: "Ức chế biệt hóa thần kinh nội tiết & tái cấu trúc vi môi trường u",
    pathwayEn: "Neuroendocrine plasticity restraint & microenvironment regulation"
  },
  {
    id: "hsa-miR-222-3p",
    direction: "down",
    log2fc: -1.52,
    fdr: "4.7e-24",
    negLog10Fdr: 23.3,
    univariateAuc: 0.834,
    meanShap: 0.35,
    targets: "AR, STAT5A, TIMP3",
    pathwayVi: "Kiểm soát ổn định mô đệm ngoại bào & tương tác đồng cụm miR-221/222",
    pathwayEn: "Extracellular matrix stability & miR-221/222 cluster homeostasis"
  },
  {
    id: "hsa-miR-34a-5p",
    direction: "down",
    log2fc: -1.44,
    fdr: "1.1e-22",
    negLog10Fdr: 22.0,
    univariateAuc: 0.829,
    meanShap: 0.48,
    targets: "AR, CD44, SIRT1, BCL2",
    pathwayVi: "Mạng lưới ức chế khối u phụ thuộc p53 & ức chế tế bào gốc ung thư (CD44+)",
    pathwayEn: "p53-dependent tumor suppression & CD44+ prostate CSC inhibition"
  },
  {
    id: "hsa-miR-125b-5p",
    direction: "down",
    log2fc: -1.29,
    fdr: "3.5e-18",
    negLog10Fdr: 17.5,
    univariateAuc: 0.808,
    meanShap: 0.31,
    targets: "ERBB2, ERBB3, BAK1, EZH2",
    pathwayVi: "Điều hòa thụ thể tyrosine kinase ErbB2/3 & trục biểu sinh EZH2",
    pathwayEn: "ErbB2/ErbB3 receptor tyrosine kinase & EZH2 epigenetic control"
  }
];

/**
 * ============================================================================
 * CẤU HÌNH BỘ MÔ PHỎNG AI & SHAP / AI SIMULATOR & SHAP CONFIG
 * ============================================================================
 */
const SIMULATOR_FEATURES = [
  { id: "hsa-miR-375-3p", type: "up", baseline: 7.4, weight: 0.72, min: 3.0, max: 13.5, step: 0.1 },
  { id: "hsa-miR-141-3p", type: "up", baseline: 6.8, weight: 0.64, min: 3.0, max: 12.5, step: 0.1 },
  { id: "hsa-miR-21-5p",  type: "up", baseline: 9.2, weight: 0.56, min: 5.0, max: 14.0, step: 0.1 },
  { id: "hsa-miR-205-5p", type: "down", baseline: 8.6, weight: -0.68, min: 2.5, max: 13.0, step: 0.1 },
  { id: "hsa-miR-145-5p", type: "down", baseline: 9.4, weight: -0.58, min: 3.5, max: 13.5, step: 0.1 },
  { id: "hsa-miR-34a-5p", type: "down", baseline: 7.5, weight: -0.52, min: 3.0, max: 11.5, step: 0.1 }
];

const PRESET_CASES = {
  high_risk: {
    "hsa-miR-375-3p": 11.4,
    "hsa-miR-141-3p": 10.2,
    "hsa-miR-21-5p": 12.1,
    "hsa-miR-205-5p": 4.9,
    "hsa-miR-145-5p": 6.2,
    "hsa-miR-34a-5p": 5.1
  },
  gray_zone: {
    "hsa-miR-375-3p": 8.9,
    "hsa-miR-141-3p": 7.9,
    "hsa-miR-21-5p": 10.1,
    "hsa-miR-205-5p": 7.2,
    "hsa-miR-145-5p": 8.4,
    "hsa-miR-34a-5p": 6.9
  },
  benign: {
    "hsa-miR-375-3p": 4.8,
    "hsa-miR-141-3p": 4.5,
    "hsa-miR-21-5p": 7.4,
    "hsa-miR-205-5p": 11.2,
    "hsa-miR-145-5p": 11.8,
    "hsa-miR-34a-5p": 9.6
  }
};

// Background cloud points for Volcano Plot (surrounding surveyed mature miRNAs)
const VOLCANO_BG_POINTS = [
  [-0.85, 4.2], [-0.45, 2.1], [0.35, 1.8], [0.72, 3.6], [-0.22, 0.9], [0.15, 0.6],
  [-0.92, 6.4], [0.95, 7.1], [-0.62, 5.1], [0.58, 4.8], [-1.35, 1.3], [1.42, 1.5],
  [-0.31, 3.2], [0.44, 2.9], [-0.74, 8.2], [0.81, 9.4], [-0.18, 1.4], [0.27, 1.9],
  [-0.55, 1.7], [0.64, 2.5], [-1.15, 1.1], [1.18, 1.2], [-0.41, 6.8], [0.48, 7.4],
  [-0.88, 11.2], [0.91, 10.6], [-0.12, 0.4], [0.09, 0.5], [-0.67, 2.8], [0.76, 3.1],
  [-1.08, 1.6], [1.05, 1.8], [-0.52, 4.4], [0.51, 3.9], [-0.33, 5.6], [0.29, 5.2],
  [-0.78, 13.5], [0.84, 14.1], [-0.25, 2.3], [0.38, 2.6], [-0.94, 1.9], [0.93, 1.7]
];

/**
 * ============================================================================
 * STATE MANAGEMENT
 * ============================================================================
 */
let currentModelKey = "stacking";
let currentEvalCohort = "internal";
let currentSecondaryChart = "shap";
let currentFilter = "all";
let currentSearch = "";
let simValues = { ...PRESET_CASES.high_risk };

/**
 * ============================================================================
 * LANGUAGE & CONFIG BINDINGS
 * ============================================================================
 */
function setLanguageMode(mode) {
  const valid = ["bilingual", "vi", "en"].includes(mode) ? mode : "bilingual";
  document.body.setAttribute("data-lang", valid);
  document.documentElement.setAttribute("lang", valid === "en" ? "en" : "vi");
  localStorage.setItem(STORAGE_KEY_LANG, valid);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langTarget === valid);
  });

  renderSecondaryChart(currentSecondaryChart);
  renderRocChart(currentModelKey, currentEvalCohort);
  updateSimulatorUI();
}

function applyLabConfigToDOM() {
  const bindText = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };

  bindText("[data-cfg='labNameVi']", labConfig.labNameVi);
  bindText("[data-cfg='labNameEn']", labConfig.labNameEn);
  bindText("[data-cfg='institutionVi']", labConfig.institutionVi);
  bindText("[data-cfg='institutionEn']", labConfig.institutionEn);
  bindText("[data-cfg='departmentVi']", labConfig.departmentVi);
  bindText("[data-cfg='departmentEn']", labConfig.departmentEn);
  bindText("[data-cfg='addressVi']", labConfig.addressVi);
  bindText("[data-cfg='addressEn']", labConfig.addressEn);
  bindText("[data-cfg='projectCode']", labConfig.projectCode);
  bindText("[data-cfg='studentLeadName']", labConfig.studentLeadName);
  bindText("[data-cfg='studentLeadId']", labConfig.studentLeadId);
  bindText("[data-cfg='studentLeadRoleVi']", labConfig.studentLeadRoleVi);
  bindText("[data-cfg='studentLeadRoleEn']", labConfig.studentLeadRoleEn);
  bindText("[data-cfg='advisorName']", labConfig.advisorName);
  bindText("[data-cfg='advisorTitleVi']", labConfig.advisorTitleVi);
  bindText("[data-cfg='advisorTitleEn']", labConfig.advisorTitleEn);
  bindText("[data-cfg='collaboratorsVi']", labConfig.collaboratorsVi);
  bindText("[data-cfg='collaboratorsEn']", labConfig.collaboratorsEn);
  bindText("[data-cfg='contactEmail']", labConfig.contactEmail);
  bindText("[data-cfg='year']", labConfig.year);

  document.querySelectorAll("[data-cfg-href='contactEmail']").forEach((el) => {
    el.setAttribute("href", `mailto:${labConfig.contactEmail}`);
  });
  document.querySelectorAll("[data-cfg-href='publicUrl']").forEach((el) => {
    el.setAttribute("href", labConfig.publicUrl);
    el.textContent = labConfig.publicUrl;
  });

  updateCitations();
}

function updateCitations() {
  const bibtexEl = document.getElementById("cite-bibtex");
  const apaEl = document.getElementById("cite-apa");
  if (!bibtexEl || !apaEl) return;

  bibtexEl.textContent = `@misc{ump_pharmaco_bioai_${labConfig.year},
  author       = {${labConfig.studentLeadName} and ${labConfig.advisorName}},
  title        = {{Bước đầu ứng dụng trí tuệ nhân tạo trong xây dựng mô hình chẩn đoán ung thư tuyến tiền liệt dựa trên phân tích biểu hiện microRNA từ nguồn dữ liệu lớn} / {Initial Application of Artificial Intelligence in Developing a Prostate Cancer Diagnostic Model Based on Big-Data microRNA Expression Profiling}},
  year         = {${labConfig.year}},
  howpublished = {${labConfig.institutionVi} (${labConfig.institutionEn})},
  note         = {Project Code: ${labConfig.projectCode}},
  url          = {${labConfig.publicUrl}}
}`;

  apaEl.textContent = `${labConfig.studentLeadName}, & ${labConfig.advisorName}. (${labConfig.year}). Bước đầu ứng dụng trí tuệ nhân tạo trong xây dựng mô hình chẩn đoán ung thư tuyến tiền liệt dựa trên phân tích biểu hiện microRNA từ nguồn dữ liệu lớn [Initial Application of Artificial Intelligence in Developing a Prostate Cancer Diagnostic Model Based on Big-Data microRNA Expression Profiling]. ${labConfig.institutionVi}. ${labConfig.publicUrl}`;
}

/**
 * ============================================================================
 * RENDER BENCHMARK ROC CHART & METRICS
 * ============================================================================
 */
function renderRocChart(modelKey, evalCohort) {
  const model = MODEL_BENCHMARKS[modelKey];
  if (!model) return;
  const stats = model[evalCohort];

  // Update numeric metrics
  document.getElementById("metric-auc").textContent = stats.auc.toFixed(3);
  document.getElementById("metric-sens").textContent = stats.sens;
  document.getElementById("metric-spec").textContent = stats.spec;
  document.getElementById("metric-f1").textContent = stats.f1;
  document.getElementById("metric-mcc").textContent = stats.mcc;

  document.getElementById("cm-tp").textContent = stats.cm.tp;
  document.getElementById("cm-fp").textContent = stats.cm.fp;
  document.getElementById("cm-fn").textContent = stats.cm.fn;
  document.getElementById("cm-tn").textContent = stats.cm.tn;

  const captionEl = document.getElementById("roc-caption");
  if (captionEl) {
    captionEl.innerHTML = `<span class="lang-vi">${model.name} (${evalCohort === "internal" ? "Kiểm định chéo 10-Fold" : "Kiểm định độc lập External"}) — AUC = <strong>${stats.auc.toFixed(3)}</strong> (95% CI: ${stats.ci})</span><span class="sep-bilingual"> | </span><span class="lang-en">${model.name} (${evalCohort === "internal" ? "10-Fold Internal CV" : "External Validation"}) — AUC = <strong>${stats.auc.toFixed(3)}</strong> (95% CI: ${stats.ci})</span>`;
  }

  // Render SVG ROC Curve
  const svg = document.getElementById("roc-svg");
  if (!svg) return;

  const W = 520;
  const H = 340;
  const pad = { top: 22, right: 24, bottom: 44, left: 52 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  const sx = (fpr) => pad.left + fpr * plotW;
  const sy = (tpr) => pad.top + (1 - tpr) * plotH;

  let gridHtml = "";
  [0, 0.2, 0.4, 0.6, 0.8, 1.0].forEach((t) => {
    const x = sx(t).toFixed(1);
    const y = sy(t).toFixed(1);
    gridHtml += `<line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" stroke="#e3ebf5" stroke-width="1"/>`;
    gridHtml += `<line x1="${x}" y1="${pad.top}" x2="${x}" y2="${H - pad.bottom}" stroke="#e3ebf5" stroke-width="1"/>`;
    gridHtml += `<text x="${x}" y="${H - pad.bottom + 16}" text-anchor="middle" font-size="10.5" fill="#5c7089" font-family="IBM Plex Mono, monospace">${t.toFixed(1)}</text>`;
    gridHtml += `<text x="${pad.left - 8}" y="${Number(y) + 3.5}" text-anchor="end" font-size="10.5" fill="#5c7089" font-family="IBM Plex Mono, monospace">${t.toFixed(1)}</text>`;
  });

  // Baseline comparison curve (LASSO Logistic Regression) if another model is active
  let refCurveHtml = "";
  if (modelKey !== "logreg") {
    const basePts = MODEL_BENCHMARKS.logreg[evalCohort].roc
      .map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`)
      .join(" ");
    refCurveHtml = `<polyline fill="none" stroke="#9ab0c9" stroke-width="1.8" stroke-dasharray="4 4" points="${basePts}"/>`;
  }

  const pts = stats.roc.map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(" ");
  const areaPts = `${sx(0).toFixed(1)},${sy(0).toFixed(1)} ${pts} ${sx(1).toFixed(1)},${sy(0).toFixed(1)}`;

  const dotsHtml = stats.roc
    .slice(1, -1)
    .map(([x, y]) => `<circle cx="${sx(x).toFixed(1)}" cy="${sy(y).toFixed(1)}" r="3.2" fill="#0d8a87" stroke="#ffffff" stroke-width="1.4"/>`)
    .join("");

  svg.innerHTML = `
    <defs>
      <linearGradient id="rocAreaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#12a8a4" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#12a8a4" stop-opacity="0.02"/>
      </linearGradient>
    </defs>
    ${gridHtml}
    <rect x="${pad.left}" y="${pad.top}" width="${plotW}" height="${plotH}" fill="none" stroke="#b9c7da" stroke-width="1.2"/>
    <line x1="${sx(0)}" y1="${sy(0)}" x2="${sx(1)}" y2="${sy(1)}" stroke="#c2cedf" stroke-width="1.5" stroke-dasharray="6 4"/>
    <polygon points="${areaPts}" fill="url(#rocAreaGrad)"/>
    ${refCurveHtml}
    <polyline fill="none" stroke="#0f2544" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round" points="${pts}"/>
    ${dotsHtml}
    <text x="${pad.left + plotW / 2}" y="${H - 8}" text-anchor="middle" font-size="11.5" font-weight="600" fill="#17355e">1 − Specificity (False Positive Rate)</text>
    <text x="15" y="${pad.top + plotH / 2}" text-anchor="middle" font-size="11.5" font-weight="600" fill="#17355e" transform="rotate(-90 15 ${pad.top + plotH / 2})">Sensitivity (True Positive Rate)</text>
    <g transform="translate(${pad.left + plotW - 196}, ${pad.top + plotH - 58})">
      <rect width="186" height="48" rx="6" fill="#ffffff" fill-opacity="0.94" stroke="#d4dfee"/>
      <line x1="10" y1="16" x2="32" y2="16" stroke="#0f2544" stroke-width="2.6"/>
      <text x="38" y="20" font-size="10.5" font-weight="700" fill="#0f2544">${modelKey.toUpperCase()} (AUC=${stats.auc.toFixed(3)})</text>
      <line x1="10" y1="34" x2="32" y2="34" stroke="#c2cedf" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="38" y="38" font-size="10" fill="#5c7089">${modelKey !== "logreg" ? "LASSO LogReg / Chance (0.50)" : "Random Classifier (0.50)"}</text>
    </g>
  `;
}

/**
 * ============================================================================
 * RENDER SECONDARY CHART (SHAP IMPORTANCE OR VOLCANO PLOT)
 * ============================================================================
 */
function renderSecondaryChart(mode) {
  const svg = document.getElementById("secondary-svg");
  if (!svg) return;

  if (mode === "shap") {
    const sorted = [...MIRNA_SIGNATURE].sort((a, b) => b.meanShap - a.meanShap);
    const W = 520;
    const H = 360;
    const pad = { top: 20, right: 44, bottom: 36, left: 122 };
    const plotW = W - pad.left - pad.right;
    const rowH = (H - pad.top - pad.bottom) / sorted.length;
    const maxShap = 0.90;

    let barsHtml = "";
    [0, 0.2, 0.4, 0.6, 0.8].forEach((tick) => {
      const x = (pad.left + (tick / maxShap) * plotW).toFixed(1);
      barsHtml += `<line x1="${x}" y1="${pad.top}" x2="${x}" y2="${H - pad.bottom}" stroke="#e5ecf6" stroke-width="1"/>`;
      barsHtml += `<text x="${x}" y="${H - pad.bottom + 15}" text-anchor="middle" font-size="10" fill="#5c7089" font-family="IBM Plex Mono, monospace">${tick.toFixed(1)}</text>`;
    });

    sorted.forEach((m, idx) => {
      const y = pad.top + idx * rowH + 3;
      const barH = Math.max(10, rowH - 6);
      const barW = (m.meanShap / maxShap) * plotW;
      const color = m.direction === "up" ? "#df4e5c" : "#0d8a87";
      barsHtml += `
        <text x="${pad.left - 8}" y="${y + barH / 2 + 3.5}" text-anchor="end" font-size="10.2" font-weight="600" fill="#17355e" font-family="IBM Plex Mono, monospace">${m.id}</text>
        <rect x="${pad.left}" y="${y}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" rx="3" fill="${color}" fill-opacity="0.88"/>
        <text x="${(pad.left + barW + 5).toFixed(1)}" y="${y + barH / 2 + 3.5}" font-size="9.8" font-weight="600" fill="#3f5268" font-family="IBM Plex Mono, monospace">${m.meanShap.toFixed(2)}</text>
      `;
    });

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = `
      ${barsHtml}
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${H - pad.bottom}" stroke="#9db0c9" stroke-width="1.2"/>
      <text x="${pad.left + plotW / 2}" y="${H - 5}" text-anchor="middle" font-size="11" font-weight="600" fill="#17355e">Mean |SHAP Value| (Impact on PRAD Diagnosis)</text>
      <g transform="translate(${W - 154}, ${pad.top + 8})">
        <rect width="144" height="44" rx="6" fill="#ffffff" stroke="#dce5f2"/>
        <rect x="10" y="10" width="10" height="10" rx="2" fill="#df4e5c"/>
        <text x="26" y="19" font-size="10" fill="#3f5268">Upregulated OncomiR</text>
        <rect x="10" y="26" width="10" height="10" rx="2" fill="#0d8a87"/>
        <text x="26" y="35" font-size="10" fill="#3f5268">Tumor-Suppressor</text>
      </g>
    `;
  } else {
    // Volcano Plot: log2FC (-3.2 to +3.2) vs -log10(FDR) (0 to 52)
    const W = 520;
    const H = 360;
    const pad = { top: 22, right: 24, bottom: 42, left: 52 };
    const plotW = W - pad.left - pad.right;
    const plotH = H - pad.top - pad.bottom;

    const minX = -3.3;
    const maxX = 3.3;
    const minY = 0;
    const maxY = 52;
    const sx = (v) => pad.left + ((v - minX) / (maxX - minX)) * plotW;
    const sy = (v) => pad.top + (1 - (v - minY) / (maxY - minY)) * plotH;

    let grid = "";
    [-3, -2, -1, 0, 1, 2, 3].forEach((xVal) => {
      const x = sx(xVal).toFixed(1);
      grid += `<line x1="${x}" y1="${pad.top}" x2="${x}" y2="${H - pad.bottom}" stroke="#edf2f9" stroke-width="1"/>`;
      grid += `<text x="${x}" y="${H - pad.bottom + 15}" text-anchor="middle" font-size="10" fill="#5c7089" font-family="IBM Plex Mono, monospace">${xVal}</text>`;
    });
    [0, 10, 20, 30, 40, 50].forEach((yVal) => {
      const y = sy(yVal).toFixed(1);
      grid += `<line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" stroke="#edf2f9" stroke-width="1"/>`;
      grid += `<text x="${pad.left - 8}" y="${Number(y) + 3.5}" text-anchor="end" font-size="10" fill="#5c7089" font-family="IBM Plex Mono, monospace">${yVal}</text>`;
    });

    const bgDots = VOLCANO_BG_POINTS.map(([fc, p]) => {
      return `<circle cx="${sx(fc).toFixed(1)}" cy="${sy(p).toFixed(1)}" r="2.7" fill="#9fb2c9" fill-opacity="0.62"/>`;
    }).join("");

    const labelSet = new Set(["hsa-miR-375-3p", "hsa-miR-141-3p", "hsa-miR-205-5p", "hsa-miR-145-5p", "hsa-miR-21-5p"]);
    const sigDots = MIRNA_SIGNATURE.map((m) => {
      const cx = sx(m.log2fc);
      const cy = sy(m.negLog10Fdr);
      const fill = m.direction === "up" ? "#df4e5c" : "#0d8a87";
      const lbl = labelSet.has(m.id)
        ? `<text x="${(cx + (m.log2fc > 0 ? -6 : 6)).toFixed(1)}" y="${(cy - 7).toFixed(1)}" text-anchor="${m.log2fc > 0 ? "end" : "start"}" font-size="9.5" font-weight="700" fill="#0f2544" font-family="IBM Plex Mono, monospace">${m.id.replace("hsa-", "")}</text>`
        : "";
      return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="4.6" fill="${fill}" stroke="#ffffff" stroke-width="1.3"/>${lbl}`;
    }).join("");

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = `
      ${grid}
      <rect x="${pad.left}" y="${pad.top}" width="${plotW}" height="${plotH}" fill="none" stroke="#b9c7da" stroke-width="1.2"/>
      <line x1="${sx(-1).toFixed(1)}" y1="${pad.top}" x2="${sx(-1).toFixed(1)}" y2="${H - pad.bottom}" stroke="#9fb2c9" stroke-dasharray="4 4" stroke-width="1.3"/>
      <line x1="${sx(1).toFixed(1)}" y1="${pad.top}" x2="${sx(1).toFixed(1)}" y2="${H - pad.bottom}" stroke="#9fb2c9" stroke-dasharray="4 4" stroke-width="1.3"/>
      <line x1="${pad.left}" y1="${sy(2).toFixed(1)}" x2="${W - pad.right}" y2="${sy(2).toFixed(1)}" stroke="#9fb2c9" stroke-dasharray="4 4" stroke-width="1.3"/>
      ${bgDots}
      ${sigDots}
      <text x="${pad.left + plotW / 2}" y="${H - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="#17355e">log₂ Fold Change (PRAD vs. Control)</text>
      <text x="15" y="${pad.top + plotH / 2}" text-anchor="middle" font-size="11" font-weight="600" fill="#17355e" transform="rotate(-90 15 ${pad.top + plotH / 2})">−log₁₀(FDR)</text>
    `;
  }
}

/**
 * ============================================================================
 * RENDER 14-miRNA CORE SIGNATURE TABLE
 * ============================================================================
 */
function renderMirnaTable() {
  const tbody = document.getElementById("mirna-table-body");
  if (!tbody) return;

  const q = currentSearch.trim().toLowerCase();
  const filtered = MIRNA_SIGNATURE.filter((item) => {
    const matchFilter = currentFilter === "all" || item.direction === currentFilter;
    const matchQuery =
      !q ||
      item.id.toLowerCase().includes(q) ||
      item.targets.toLowerCase().includes(q) ||
      item.pathwayVi.toLowerCase().includes(q) ||
      item.pathwayEn.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64778d;padding:1.5rem;">Không tìm thấy dấu ấn microRNA phù hợp / No matching microRNA biomarkers found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map((m) => {
      const badge =
        m.direction === "up"
          ? `<span class="badge-up">▲ <span class="lang-vi">Tăng (OncomiR)</span><span class="sep-bilingual">/</span><span class="lang-en">Upregulated</span></span>`
          : `<span class="badge-down">▼ <span class="lang-vi">Giảm (Tumor-Suppressor)</span><span class="sep-bilingual">/</span><span class="lang-en">Downregulated</span></span>`;
      const fcSign = m.log2fc > 0 ? `+${m.log2fc.toFixed(2)}` : m.log2fc.toFixed(2);
      return `
        <tr>
          <td class="mono" style="font-weight:700;color:#0f2544;white-space:nowrap;">${m.id}</td>
          <td>${badge}</td>
          <td class="mono" style="font-weight:600;color:${m.log2fc > 0 ? "#b42331" : "#0b6e6d"};">${fcSign}</td>
          <td class="mono">${m.fdr}</td>
          <td class="mono" style="font-weight:600;">${m.univariateAuc.toFixed(3)}</td>
          <td class="mono">${m.meanShap.toFixed(2)}</td>
          <td>
            <div style="font-weight:600;color:#17355e;font-size:0.82rem;">${m.targets}</div>
            <div class="bilingual-stack" style="font-size:0.79rem;color:#4a5e75;margin-top:0.2rem;">
              <span class="lang-vi">${m.pathwayVi}</span>
              <span class="lang-en">${m.pathwayEn}</span>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

/**
 * ============================================================================
 * INTERACTIVE AI DIAGNOSTIC SIMULATOR & SHAP EXPLAINER
 * ============================================================================
 */
function buildSimulatorSliders() {
  const container = document.getElementById("sim-sliders");
  if (!container) return;

  container.innerHTML = SIMULATOR_FEATURES.map((f) => {
    const val = simValues[f.id];
    const roleTag =
      f.type === "up"
        ? `<span class="badge-up" style="font-size:0.68rem;">OncomiR</span>`
        : `<span class="badge-down" style="font-size:0.68rem;">Tumor-Suppressor</span>`;
    return `
      <div class="slider-item">
        <div class="slider-top">
          <div><strong class="mono">${f.id}</strong> ${roleTag}</div>
          <span class="mono" id="val-${f.id}" style="font-weight:700;color:#0f2544;">${val.toFixed(1)} log₂(RPM+1)</span>
        </div>
        <input
          type="range"
          class="range-input"
          id="range-${f.id}"
          min="${f.min}"
          max="${f.max}"
          step="${f.step}"
          value="${val}"
          aria-label="${f.id} expression level"
        />
      </div>
    `;
  }).join("");

  SIMULATOR_FEATURES.forEach((f) => {
    const input = document.getElementById(`range-${f.id}`);
    input.addEventListener("input", (e) => {
      simValues[f.id] = parseFloat(e.target.value);
      document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
      updateSimulatorUI();
    });
  });
}

function updateSimulatorUI() {
  let logit = 0.05; // calibrated baseline intercept
  const shapContribs = [];

  SIMULATOR_FEATURES.forEach((f) => {
    const x = simValues[f.id];
    const valLabel = document.getElementById(`val-${f.id}`);
    if (valLabel) valLabel.textContent = `${x.toFixed(1)} log₂(RPM+1)`;
    const sliderEl = document.getElementById(`range-${f.id}`);
    if (sliderEl && parseFloat(sliderEl.value) !== x) sliderEl.value = x;

    const phi = f.weight * (x - f.baseline) * 0.45;
    logit += phi;
    shapContribs.push({ id: f.id, phi });
  });

  const prob = 1 / (1 + Math.exp(-logit));
  const pct = (prob * 100).toFixed(1);

  const scoreEl = document.getElementById("sim-prob-score");
  const barEl = document.getElementById("sim-prob-bar");
  const verdictEl = document.getElementById("sim-verdict");
  const shapContainer = document.getElementById("sim-shap-bars");

  if (scoreEl) scoreEl.textContent = `${pct}%`;
  if (barEl) {
    barEl.style.width = `${pct}%`;
    barEl.style.background =
      prob >= 0.65 ? "#ef5b69" : prob >= 0.35 ? "#f5a623" : "#2bd4a7";
  }

  if (verdictEl) {
    if (prob >= 0.65) {
      verdictEl.innerHTML = `<span class="lang-vi">Phân tầng: <strong>Nguy cơ cao Ung thư tuyến tiền liệt (PRAD-High Risk)</strong> — Kiểu hình tăng mạnh OncomiRs & suy giảm Tumor-Suppressor miRNAs.</span><span class="sep-bilingual"> | </span><span class="lang-en">Stratification: <strong>High Probability of Prostate Adenocarcinoma (PRAD)</strong> — Oncogenic miRNA up-shift & tumor-suppressor depletion.</span>`;
    } else if (prob >= 0.35) {
      verdictEl.innerHTML = `<span class="lang-vi">Phân tầng: <strong>Vùng chuyển tiếp / Theo dõi bổ sung (Borderline)</strong> — Biểu hiện trung gian, gợi ý phối hợp xét nghiệm lâm sàng & MRI đa tham số.</span><span class="sep-bilingual"> | </span><span class="lang-en">Stratification: <strong>Borderline / Intermediate Risk Profile</strong> — Moderate expression overlap; suggests integration with mpMRI & clinical markers.</span>`;
    } else {
      verdictEl.innerHTML = `<span class="lang-vi">Phân tầng: <strong>Nguy cơ thấp / Kiểu hình đối chứng lành tính (Benign-like Profile)</strong> — Các Tumor-Suppressor miRNAs duy trì biểu hiện bảo vệ.</span><span class="sep-bilingual"> | </span><span class="lang-en">Stratification: <strong>Low Risk / Benign Control-like Expression Profile</strong> — Preserved tumor-suppressor miRNA levels.</span>`;
    }
  }

  if (shapContainer) {
    const maxAbs = Math.max(1.2, ...shapContribs.map((c) => Math.abs(c.phi)));
    shapContainer.innerHTML = shapContribs
      .sort((a, b) => Math.abs(b.phi) - Math.abs(a.phi))
      .map((c) => {
        const halfWidthPct = Math.min(48, (Math.abs(c.phi) / maxAbs) * 48);
        const isPos = c.phi >= 0;
        const leftPct = isPos ? 50 : 50 - halfWidthPct;
        const signStr = isPos ? `+${c.phi.toFixed(2)}` : c.phi.toFixed(2);
        return `
          <div class="shap-row">
            <span class="mono" style="font-weight:600;color:#17355e;">${c.id.replace("hsa-", "")}</span>
            <div class="shap-track">
              <div class="shap-center-line"></div>
              <div class="shap-fill ${isPos ? "pos" : "neg"}" style="left:${leftPct.toFixed(1)}%;width:${halfWidthPct.toFixed(1)}%;"></div>
            </div>
            <span class="mono" style="text-align:right;font-weight:700;color:${isPos ? "#b42331" : "#0b6e6d"};">${signStr}</span>
          </div>
        `;
      })
      .join("");
  }
}

/**
 * ============================================================================
 * MODALS & TOAST NOTIFICATIONS
 * ============================================================================
 */
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("open");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("open");
}

function populateCustomizeForm() {
  const fields = [
    "labNameVi", "labNameEn", "projectCode", "contactEmail",
    "studentLeadName", "studentLeadId", "advisorName",
    "departmentVi", "departmentEn"
  ];
  fields.forEach((key) => {
    const input = document.getElementById(`cfg-${key}`);
    if (input) input.value = labConfig[key] || "";
  });
}

/**
 * ============================================================================
 * BOOTSTRAP
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  applyLabConfigToDOM();

  const savedLang = localStorage.getItem(STORAGE_KEY_LANG) || "bilingual";
  setLanguageMode(savedLang);

  // Language switcher buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguageMode(btn.dataset.langTarget));
  });

  // Model tabs
  document.querySelectorAll("[data-model-key]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-model-key]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentModelKey = btn.dataset.modelKey;
      renderRocChart(currentModelKey, currentEvalCohort);
    });
  });

  // Cohort eval toggle (Internal CV vs External Validation)
  document.querySelectorAll("[data-eval-cohort]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-eval-cohort]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentEvalCohort = btn.dataset.evalCohort;
      renderRocChart(currentModelKey, currentEvalCohort);
    });
  });

  // Secondary chart toggle (SHAP vs Volcano)
  document.querySelectorAll("[data-secondary-chart]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-secondary-chart]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSecondaryChart = btn.dataset.secondaryChart;
      renderSecondaryChart(currentSecondaryChart);
    });
  });

  // miRNA filter & search
  document.querySelectorAll("[data-mirna-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-mirna-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.mirnaFilter;
      renderMirnaTable();
    });
  });

  const searchInput = document.getElementById("mirna-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderMirnaTable();
    });
  }

  // Simulator presets & sliders
  buildSimulatorSliders();
  updateSimulatorUI();

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const presetKey = btn.dataset.preset;
      if (PRESET_CASES[presetKey]) {
        simValues = { ...PRESET_CASES[presetKey] };
        document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        updateSimulatorUI();
      }
    });
  });

  // Initial table & chart renders
  renderMirnaTable();
  renderRocChart(currentModelKey, currentEvalCohort);
  renderSecondaryChart(currentSecondaryChart);

  // Cite Modal handlers
  document.getElementById("open-cite-btn")?.addEventListener("click", () => openModal("cite-modal"));
  document.getElementById("copy-bibtex-btn")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(document.getElementById("cite-bibtex").textContent);
    showToast("Đã sao chép BibTeX / BibTeX copied!");
  });
  document.getElementById("copy-apa-btn")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(document.getElementById("cite-apa").textContent);
    showToast("Đã sao chép trích dẫn APA / APA citation copied!");
  });

  // Customize Lab Info Modal handlers
  document.getElementById("customize-btn")?.addEventListener("click", () => {
    populateCustomizeForm();
    openModal("customize-modal");
  });

  document.getElementById("customize-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = [
      "labNameVi", "labNameEn", "projectCode", "contactEmail",
      "studentLeadName", "studentLeadId", "advisorName",
      "departmentVi", "departmentEn"
    ];
    fields.forEach((key) => {
      const input = document.getElementById(`cfg-${key}`);
      if (input && input.value.trim()) {
        labConfig[key] = input.value.trim();
      }
    });
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(labConfig));
    applyLabConfigToDOM();
    closeModal("customize-modal");
    showToast("Đã cập nhật thông tin nhóm nghiên cứu / Lab info updated!");
  });

  document.getElementById("reset-cfg-btn")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY_CONFIG);
    labConfig = { ...DEFAULT_LAB_CONFIG };
    populateCustomizeForm();
    applyLabConfigToDOM();
    showToast("Đã khôi phục thông tin mặc định / Reset to defaults.");
  });

  document.getElementById("copy-cfg-json-btn")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(JSON.stringify(labConfig, null, 2));
    showToast("Đã sao chép JSON cấu hình để dán vào app.js!");
  });

  // Modal close buttons & backdrop clicks
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.remove("open");
    });
  });
});
