import { LoginModel } from "../loginModel/loginModel";

export interface UserState {
    loading: boolean,
    userLogin: ProfileModel | null,
    jobHired: JobHired[] | null
}

export interface ProfileModel {
  id:            number ;
  name:          string ;
  email:         string;
  password:      string;
  phone:         string;
  birthday:      string;
  avatar:        string;
  gender:        boolean;
  role:          string;
  skill:         string[];
  certification: string[];
  bookingJob:    any[];
}


export interface EditUserModel {
  id: number,
  email: string | string,
  name: string | string,
  phone: number | string | string,
  birthday: string | string,
  gender: boolean ,
  certification: string[],
  skill: string[]
}

export interface JobHired {
  id:        number;
  ngayThue:  string;
  hoanThanh: boolean;
  congViec:  CongViec;
}

export interface CongViec {
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