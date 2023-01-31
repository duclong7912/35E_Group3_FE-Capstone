
export interface JobMenuState {
    arrJobMenu: JobMenuModel[]
}

export interface JobMenuModel {
    id:                number;
    tenLoaiCongViec:   string;
    dsNhomChiTietLoai: DsNhomChiTietLoai[];
}

export interface DsNhomChiTietLoai {
    id:             number;
    tenNhom:        string;
    hinhAnh:        string;
    maLoaiCongviec: number;
    dsChiTietLoai:  DsChiTietLoai[];
}

export interface DsChiTietLoai {
    id:         number;
    tenChiTiet: string;
}