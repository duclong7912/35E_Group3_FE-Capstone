export type JobDetailState = {
  arrJobDetail: JobDetailModel[];
  arrComment: Comment[];
  postComment: PostComment[];
}

export interface JobDetailModel {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}


export interface Comment {
  ngayBinhLuan:     string;
  noiDung:          string;
  saoBinhLuan:      number;
  tenNguoiBinhLuan: string;
  avatar:           string;
}


export interface PostComment {
  id:              number;
  maCongViec:      number;
  maNguoiBinhLuan: number;
  ngayBinhLuan:    string;
  noiDung:         string;
  saoBinhLuan:     number;
}

export interface ThueCongViec {
  maCongViec:  number;
  maNguoiThue: number;
  ngayThue:    string;
}
