
export interface AdminState{
    arrUser: UserModel[]
    userInfo: UserModel | null
    arrJob: AdminJobModel[];
    arrJobType: JobTypeModel[],
    arrService: ServiceModel[]
}

export interface UserModel {
    id:            number;
    name:          string;
    email:         string;
    password:      string;
    phone:         null;
    birthday:      string;
    avatar:        null;
    gender:        boolean;
    role:          string;
    skill:         string[];
    certification: string[];
    bookingJob:    string[];
}

export interface AddAdminModel {
    email: string,
    name: string,
    password: string,
    phone: string,
    role: string
}

export interface AdminEditUser {
    id: number,
    email: string ,
    name: string ,
    phone: number | string,
    birthday: string ,
    gender: any ,
    role: string,
    certification: string[],
    skill: string[]
}

export interface AdminJobModel {
    id:                    number;
    tenCongViec:           string;
    danhGia:               number;
    giaTien:               number;
    nguoiTao:              number;
    hinhAnh:               string;
    moTa:                  string;
    maChiTietLoaiCongViec: number;
    moTaNgan:              string;
    saoCongViec:           number;
}

export interface JobTypeModel {
    id:              number;
    tenLoaiCongViec: string;
}

export interface ServiceModel {
    id:          number;
    maCongViec:  number;
    maNguoiThue: number;
    ngayThue:    string;
    hoanThanh:   boolean;
}